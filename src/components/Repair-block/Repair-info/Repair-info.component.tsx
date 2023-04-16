import style from "./repair-info.module.scss";
import textData from "@/constants/json/repaire.json";

const RepairInfo = () => {
  const { priceInformation } = textData;
  return (
    <div className={style.repair_info}>
      <div className={style.repair_info_white}>
        <h2 className={style.title}>{priceInformation.title}</h2>
        <p className={style.info}>{priceInformation.info}</p>
      </div>
      <div className={style.repair_info_blue}>
        <h4 className={style.minorTitle}>{priceInformation.minorTitle}</h4>
        <p className={style.text}>{priceInformation.text}</p>
      </div>
    </div>
  );
};

export default RepairInfo;
