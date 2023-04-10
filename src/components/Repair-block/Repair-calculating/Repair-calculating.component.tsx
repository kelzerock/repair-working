import Button from "@/components/Button/Button.component";
import Image from "next/image";
import style from "./repair-calculating.module.scss";
import textData from "@/constants/json/repaire.json"

const RepairCalculating = () => {
  const {calculation} = textData;
  return (
    <div className={style.calculating}>
      <div className={style.calculating_container}>
      <Image src="/images/accountant.webp" alt="accountant" width="0" height="0" sizes="100vw"/>

      <div className={style.calculation_info}>
        <h2>{calculation.title}</h2>
        <p>{calculation.text}</p>
        <Button className="btn-yellow " text={calculation.button}/>
      </div>
      </div>
    </div>
  )
}

export default RepairCalculating;