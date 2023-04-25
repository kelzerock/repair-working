import { Fragment, useState } from "react";
import Image from "next/image";
import style from "./repairPrice.module.scss";
import classNames from "classnames";

interface InfoPosition {
  description: string;
  price: string;
}

interface InfoBlock {
  title: string;
  info: InfoPosition[];
}

export interface TextDataPrice {
  data: InfoBlock[];
}

const RepairPrice = ({ data }: TextDataPrice) => {
  const [isData, setIsData] = useState([
    { id: 0, check: false },
    { id: 1, check: true },
    { id: 2, check: true },
    { id: 3, check: true },
    { id: 4, check: true },
    { id: 5, check: true },
  ]);

  const handleAccordionClick = (ind: number) => {
    let newData = isData.map((el) => {
      if (el.id === ind) {
        return { id: el.id, check: !el.check };
      } else {
        return { id: el.id, check: el.check };
      }
    });

    setIsData(newData);
  };

  return (
    <>
      <div className={style.section}>
        {data.map((elem, index) => (
          <Fragment key={index}>
            <div
              className={style.list_header}
              onClick={() => handleAccordionClick(index)}
              role="presentation"
            >
              <h2 className={style.title}>{elem.title}</h2>
              <span>
                <Image
                  src="/images/services/icon_spoiler_blue.svg"
                  alt="spoiler"
                  className={classNames({ rotate: !isData[index].check })}
                />
              </span>
            </div>
            <ul
              className={classNames(style.list_ul, {
                [style.list_hidden]: isData[index].check,
              })}
            >
              {elem.info.map((el, ind) => (
                <li key={`price-${ind}`} className={style.list_li}>
                  <h4 className={style.main_info}>{el.description}</h4>
                  <h4 className={style.main_price}>{el.price}</h4>
                </li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
      <p className={style.about_price}>
        Цены действительны c 01.04.2023 по 31.12.2023гг. Стоимость работ
        приведена справочно, точную стоимость ремонтных работ мастер определяет
        после диагностики
      </p>
    </>
  );
};

export default RepairPrice;
