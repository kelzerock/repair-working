import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import classNames from "classnames";

import closeIcon from "../../../public/images/modal/Icon_close.svg";
import loaderIcon from "../../../public/images/modal/Loader.svg";

import style from "./modal.module.scss";
import Image from "next/image";
import MaskedInput from "react-text-mask";
import { useScrollLock } from "@/hooks/scroll-lock";
import { PhoneMasks } from "@/constant/regex";
import { data } from "autoprefixer";

export type FormType = {
  name: string | undefined;
  address: string | undefined;
  phone: string;
  message: string;
};

export type ModalPropsType = {
  isShowingModal: boolean;
  setIsShowingModal: (arg: boolean) => void;
  typeOfModal: "warranty" | "review" | "request" | "call";
};

export const useTypeOfModal = (type: string) => {
  switch (true) {
    case type === "review":
      return {
        isReview: true,
        isRequest: false,
        isWarranty: false,
        isCall: false,
      };
    case type === "request":
      return {
        isReview: false,
        isRequest: true,
        isWarranty: false,
        isCall: false,
      };
    case type === "warranty":
      return {
        isReview: false,
        isRequest: false,
        isWarranty: true,
        isCall: false,
      };
    case type === "call":
      return {
        isReview: false,
        isRequest: false,
        isWarranty: false,
        isCall: true,
      };
    default:
      return {
        isReview: false,
        isRequest: false,
        isWarranty: false,
        isCall: false,
      };
  }
};

export const Modal = ({
  isShowingModal,
  setIsShowingModal,
  typeOfModal,
}: ModalPropsType) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormType>({ mode: "all" });
  const { isReview, isRequest, isWarranty, isCall } =
    useTypeOfModal(typeOfModal);

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    let checkIDContact: any = await checkContact(data);
    if (checkIDContact.total === 0) {
      addContactToBitrix(data);
    } else {
      addContactToBitrix(data, checkIDContact.result[0].ID);
    }
    setIsLoading(true);
  };

  const closeHandler = useCallback(() => {
    setIsShowingModal(false);
    unlockScroll();
  }, [setIsShowingModal, unlockScroll]);

  //// functional for bitrix

  async function sendDataToBitrix(method: string, data?: any) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    let response = await fetch(
      `https://r-teh.bitrix24.by/rest/14/ide5fauc0w6sizps/${method}`,
      requestOptions
    );
    if (response.ok) {
      let result = await response.json();
      setIsSuccess(true);
      return result;
    } else {
      setIsError(true);
    }
  }

  async function addDealToBitrix(contact_id: number, data: any) {
    let titleInfo = isCall
      ? "заявка на обратный звонок"
      : isReview
      ? "отзыв"
      : isWarranty
      ? "заявка на гарантийный ремонт"
      : "заявка на ремонт";
    let info = await sendDataToBitrix("crm.deal.add", {
      fields: {
        TITLE: `Заявка с сайта (${titleInfo})`,
        STAGE_ID: "NEW",
        CONTACT_ID: contact_id,
        COMMENTS: data.message,
        SOURCE_ID: "WEB",
        SOURCE_DESCRIPTION: `Заявка с сайта (${titleInfo})`,
        UTM_SOURCE: "r-teh.by",
      },
      params: { REGISTER_SONET_EVENT: "Y" },
    });
    return info;
  }

  async function addContactToBitrix(
    data: any,
    ID_contact: number | null = null
  ) {
    console.log(ID_contact);
    if (ID_contact) {
      console.log("create with exists id");
      await addDealToBitrix(ID_contact, data);
    } else {
      console.log("create with new id");
      let contactData = await sendDataToBitrix("crm.contact.add", {
        fields: {
          NAME: data.name,
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
          TYPE_ID: "CLIENT",
        },
        params: { REGISTER_SONET_EVENT: "Y" },
      });
      await addDealToBitrix(contactData.result, data);
    }
  }

  async function checkContact(data: any) {
    console.log("phone: ", data.phone);
    if (!data.phone) return { total: 0 };
    let filteredIDContact = await sendDataToBitrix("crm.contact.list", {
      filter: { PHONE: data.phone },
      select: ["ID"],
    });
    return filteredIDContact;
  }

  ////

  useLayoutEffect(() => {
    const closeModal = (e: Event): void => {
      if (!modalRef.current?.contains(e.target as Node) && isShowingModal) {
        closeHandler();
      }
    };

    document.body.addEventListener("click", closeModal);

    return () => document.body.removeEventListener("click", closeModal);
  }, [isShowingModal, setIsShowingModal, closeHandler]);

  useEffect(() => {
    if (isShowingModal) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isShowingModal, lockScroll, unlockScroll]);

  return (
    <div className={style.section}>
      <div className={style.wrapper} ref={modalRef}>
        <button
          type="button"
          className={style.close_icon}
          onClick={() => closeHandler()}
        >
          <Image src={closeIcon} alt="close icon" />
        </button>
        {isSuccess && (
          <div className={style.modal}>
            <h3 className={style.title}>
              {isReview ? "Благодарим за отзыв" : "Благодарим за обращение"}
            </h3>
            <p className={style.gratitude}>
              {isReview
                ? "Нам важно Ваше мнение."
                : "Мы рассмотрим Ваше обращение в самые кратчайшие сроки."}
            </p>
          </div>
        )}
        {isError && (
          <div className={style.modal}>
            <h3 className={style.title}>
              Что-то пошло не так. Попробуйте позже
            </h3>
          </div>
        )}
        {!isSuccess && !isError && (
          <form className={style.modal} onSubmit={handleSubmit(onSubmit)}>
            {isReview && <h3 className={style.title}>Оставить отзыв</h3>}
            {isRequest && <h3 className={style.title}>Оставить заявку</h3>}
            {isWarranty && (
              <h3 className={style.title}>Обратиться по гарантии</h3>
            )}
            {isCall && (
              <h3 className={style.title}>Заказать обратный звонок</h3>
            )}
            <label className={style.label}>
              <input
                className={classNames(style.input, {
                  [style.invalid]: errors.name,
                })}
                placeholder="Фамилия и имя"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Поле не может быть пустым",
                  },
                  pattern: {
                    value: /^[а-яА-Я\s]*$/i,
                    message: "Используйте кириллицу",
                  },
                })}
              />
              <span className={style.placeholder}>Фамилия и имя</span>
              {errors.name && (
                <span className={style.error}>{errors.name.message}</span>
              )}
            </label>
            {/* {(isRequest || isWarranty) && (
                            <label className={style.label}>
                                <input
                                    className={classNames(
                                        style.input,
										{[style.invalid]: errors.address}
                                    )}
                                    placeholder='Адрес'
									{...register('address', {
										required: {value: true, message: 'Поле не может быть пустым'},
										pattern: {value: /[^a-zA-z]/, message: 'Используйте кириллицу'}
									})}
								/>
                                <span className={style.placeholder}>Адрес</span>
								{errors.address &&
	                                <span className={style.error}>
										{errors.address.message}
									</span>
								}
                            </label>
                        )} */}
            {(isRequest || isWarranty || isCall || isReview) && (
              <Controller
                control={control}
                name="phone"
                rules={{
                  required: "Поле не может быть пустым",
                  validate: {
                    hasXsymbols: (value) =>
                      value.match(PhoneMasks.placeholderChar) === null ||
                      "В формате +375 (xx) xxx-xx-xx",
                    hasWrongCode: (value) =>
                      value.match(PhoneMasks.codePhoneRegex) !== null ||
                      "Проверьте код оператора",
                  },
                }}
                render={({ field }) => (
                  <label className={style.label}>
                    <MaskedInput
                      name="phone"
                      value={field.value}
                      type="tel"
                      inputMode="tel"
                      mask={PhoneMasks.phoneMask}
                      placeholderChar="x"
                      className={classNames(style.input, {
                        [style.invalid]: errors.phone,
                      })}
                      placeholder="Номер телефона"
                      guide={true}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                    />
                    <span className={style.placeholder}>Номер телефона</span>
                    {errors.phone && (
                      <span className={style.error}>
                        {errors.phone.message}
                      </span>
                    )}
                  </label>
                )}
              />
            )}
            {!isCall && (
              <label className={style.label_area}>
                <textarea
                  className={classNames(style.textarea, {
                    [style.invalid]: errors.message,
                  })}
                  placeholder={
                    isReview
                      ? "Опишите Ваше впечатление о проделанной нами работе."
                      : isRequest
                      ? "Опишите возникшую проблему (Вид и модель техники, неисправность)"
                      : isWarranty
                      ? "Опишите Ваш гарантийный случай, с указанием сведений из гарантийного талона"
                      : ""
                  }
                  {...register("message", {
                    required: {
                      value: true,
                      message: "Поле не может быть пустым",
                    },
                  })}
                />
                {errors.message && (
                  <span className={style.error}>{errors.message.message}</span>
                )}
              </label>
            )}
            <button
              className={classNames(style.btn)}
              disabled={isLoading || !isValid}
              type="submit"
            >
              {isLoading && (
                <Image
                  className={style.loader}
                  src={loaderIcon}
                  width={15}
                  height={15}
                  alt="loading"
                />
              )}
              {isReview
                ? "Оставить отзыв"
                : isRequest
                ? "Отправить заявку"
                : isWarranty
                ? "Обратиться по гарантии"
                : isCall
                ? "Мы перезвоним Вам"
                : ""}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
