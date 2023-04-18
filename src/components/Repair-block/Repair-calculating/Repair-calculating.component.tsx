import Button from "@/components/Button/Button.component";
import Image from "next/image";
import style from "./repair-calculating.module.scss";
import textData from "@/constants/json/repaire.json";
import { Modal } from "@/components/modal";
import { useState } from "react";

const RepairCalculating = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const { calculation } = textData;

  return (
    <div className={style.calculating}>
      {isShowingModal && (
        <Modal
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          typeOfModal="request"
        />
      )}
      <div className={style.calculating_container}>
        <Image
          src="/images/accountant.webp"
          alt="accountant"
          width="0"
          height="0"
          sizes="100vw"
        />

        <div className={style.calculation_info}>
          <h2>{calculation.title}</h2>
          <p>{calculation.text}</p>
          <button
            className="btn-yellow "
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsShowingModal(!isShowingModal);
            }}
          >
            рассчитать ремонт
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepairCalculating;
