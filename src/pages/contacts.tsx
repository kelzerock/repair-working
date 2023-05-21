import style from "./contacts.module.scss";
import infoAboutFirm from "@/constants/json/about-firm.json";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "@/components/modal";

const ContactPage = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  return (
    <div className={style.block}>
      {isShowingModal && (
        <Modal
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          typeOfModal="request"
        />
      )}
      <h2>НАШИ КОНТАКТЫ</h2>
      <p>
        Мы выполним ремонт в удобное для вас время. Мастера нашей компании
        выезжают по всей территории г.Минска и Минского района.
      </p>
      <p>Обращайтесь по нашим телефонам:</p>
      <ul>
        <li>{infoAboutFirm.phoneImg[0]}</li>
        <li>{infoAboutFirm.phoneImg[1]}</li>
      </ul>
      <p>
        Прием заявок на ремонт/установку принимается с{" "}
        {infoAboutFirm.time.start} до {infoAboutFirm.time.end} ежедневно и без
        выходных!
      </p>
      <p>
        А так же вы можете оставить{" "}
        <span
          className={style.online_request}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsShowingModal(!isShowingModal);
          }}
        >
          On-Line заявку
        </span>{" "}
        на нашем сайте.
      </p>
      <p>
        E-mail:
        <a href={`mailto: ${infoAboutFirm.email}`}> {infoAboutFirm.email}</a>
      </p>
      <div className={style.public_contract}>
        <a href="/files/public_contract.docx" download="">
          <p>Наш публичный договор.</p>
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
