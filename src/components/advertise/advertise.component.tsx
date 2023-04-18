import Image from "next/image";
import Button from "../Button/Button.component";
import style from "./advertise.module.scss";
import aboutFirm from "@/constants/json/about-firm.json";
import { Modal } from "../modal";
import { useState } from "react";

const Advertise = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  return (
    <div className={style.block}>
      {isShowingModal && (
        <Modal
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          typeOfModal="call"
        />
      )}
      <div className={style.wrapper}>
        <div className={style.block_img}>
          <Image
            className={style.img_fridge}
            src="/images/advertase/fridge.png"
            width="0"
            height="0"
            alt="fridge"
            sizes="100vw"
          />
          <Image
            className={style.img_master}
            src="/images/advertase/master.png"
            width="0"
            height="0"
            alt="master"
            sizes="100vw"
          />
        </div>
        <div className={style.block_info}>
          <h2>Звоните прямо сейчас</h2>
          <h4>Ответим на все вопросы по телефонам</h4>
          <h4 className={style.info_phone}>
            {aboutFirm.phone[0]} или {aboutFirm.phone[1]}
          </h4>
          <button
            className="btn-yellow"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsShowingModal(!isShowingModal);
            }}
          >
            Перезвоните мне
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
