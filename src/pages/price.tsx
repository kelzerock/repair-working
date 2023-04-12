import style from "./price.module.scss";
import textServices from "../constants/json/services.json";
import Image from "next/image";
import RepairInfo from "@/components/Repair-block/Repair-info/Repair-info.component";
import { useState } from "react";

const PricePage = () => {
  const [isShowListPrice, setIsShowListPrice] = useState(false)
  const [filter, setFilter] = useState('')

  return (
    <div className={style.container_price}>
      <h2>СТОИМОСТЬ УСЛУГ ПО РЕМОНТУ</h2>
      <div className={style.section__services}>
        {textServices.services[0].list.map((el, ind) => (
          <button key={`button-list-${ind}`} className={style.section__btn}>
            <Image src={el.image} alt={el.name} width={32} height={32} />
            <span>{el.name}</span>
          </button>
        ))}
      </div>

      <div className={style.price_list}>
        
      </div>
    </div>
  );
};

export default PricePage;
