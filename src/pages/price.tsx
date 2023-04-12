import style from "./price.module.scss";
import textServices from "@/constants/json/services.json";
import Image from "next/image";
import { useState } from "react";
import priceListInfo from "@/constants/json/repaire-price-2.json";
import classNames from "classnames";

const x: any = priceListInfo;

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

      <div className={style.price_list}>
        <ul className={style.list_ul}>
          {filter
            ? x[filter].map((el: any, ind: any) => (
                <li key={`price-${ind}`} className={style.list_li}>
                  <h4 className={style.main_info}>{el.description}</h4>
                  <h4 className={style.main_price}>от {el.price} руб.</h4>
                  <p className={style.main_time}>{el.time}</p>
                  <p className={style.main_guaranty}>{el.guaranty}</p>
                </li>
              ))
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default PricePage;
