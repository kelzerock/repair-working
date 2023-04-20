import style from "./repair-break.module.scss";
import textData from "@/constants/json/repair-break.json";
import Image from "next/image";
import Button from "@/components/Button/Button.component";
import classNames from "classnames";
import { text } from "stream/consumers";
import { Modal } from "@/components/modal";
import { useState } from "react";

const jsonInfo: any = textData;

interface InfoLi {
  img: string;
  imgAlt: string;
  title: string;
  info: string[];
  price: number;
}

const RepairBreak = ({ filter }: any) => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  return (
    <div className={style.block}>
            {isShowingModal && <Modal isShowingModal={isShowingModal} setIsShowingModal={setIsShowingModal} typeOfModal="request"/>}
      <h2>Стоимость ремонта частых поломок</h2>
      <ul className={style.block_ul}>
        {jsonInfo[filter].data.map((el: InfoLi, index: any) => (
          <li key={index} className={style.block_li}>
            <div className={style.li_info}>
              <Image
                className={style.block_li_img}
                src={el.img}
                alt={el.imgAlt}
                width="0"
                height="0"
                sizes="100vw"
              />

              <div className={style.item_info}>
                <h3>{el.title}</h3>
                <ul>
                  {el.info.map((elem, ind) => (
                    <li key={ind}>
                      <Image
                        src="/images/repair/check-svgrepo-com.svg"
                        alt="check"
                        width={20}
                        height={20}
                      />
                      <p>{elem}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              className={classNames("btn-yellow", style.break_btn)}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsShowingModal(!isShowingModal);
              }}
            >
              от {el.price} руб.
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepairBreak;
