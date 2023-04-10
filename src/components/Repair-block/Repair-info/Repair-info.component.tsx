import style from "./repair-info.module.scss";
import textData from "@/constants/json/repaire.json";

interface PriceInformationInterface {
  title: string;
  info: string;
  minorTitle: string;
  text: string;
}

const RepairInfo = () => {
  const { priceInformation } = textData;
  return (
    <div className={style.repair_info}>
      <div className={style.repair_info_white}>
        <h2>{priceInformation.title}</h2>
        <p>{priceInformation.info}</p>
      </div>
      <div className={style.repair_info_blue}>
        <h4>{priceInformation.minorTitle}</h4>
        <p>{priceInformation.text}</p>
      </div>
    </div>
  );
};

export default RepairInfo;
