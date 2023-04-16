import style from "./price.module.scss";
import textServices from "@/constants/json/services.json";
import Image from "next/image";
import { useState } from "react";
import priceListInfo from "@/constants/json/repaire-price.json";
import classNames from "classnames";
import RepairPrice from "@/components/Repair-block/Repair-price/RepairPrice.component";

const ListPriceObject:any = priceListInfo;

const PricePage = () => {
  const [isShowListPrice, setIsShowListPrice] = useState(false);
  const [filter, setFilter] = useState("");

  const handleClick = (info: string) => {
    setIsShowListPrice(!isShowListPrice);
    setFilter(info);
  };

  return (
    <div className={style.container_price}>
      <h2>СТОИМОСТЬ УСЛУГ ПО РЕМОНТУ</h2>
      <div className={style.section__services}>
        {textServices.services[0].list.map((el, ind) => (
          <div
            key={`button-list-${ind}`}
            className={classNames(style.section__btn, el.filterName === filter && filter ? style.action : "")}
            onClick={() => handleClick(el.filterName)}
          >
            <Image src={el.image} alt={el.name} width={32} height={32} />
            <span>{el.name}</span>
          </div>
        ))}
      </div>
          {filter
            ? <RepairPrice data={ListPriceObject[filter].data}/>
            : ""}
    </div>
  );
};

export default PricePage;
