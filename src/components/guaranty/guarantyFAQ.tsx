import classNames from "classnames";
import style from "./guarantyFAQ.module.scss";
import { Fragment, useState } from "react";
import textFAQ from "@/constants/json/guarantyFAQ.json";
import iconSpoiler from "/images/services/icon_spoiler_blue.svg";
import Image from "next/image";

export const GuarantyFAQ = () => {
  const quantityOfSection = 6;

  const [showSpoiler, setShowSpoiler] = useState(
    Array(quantityOfSection).fill(true)
  );
  const [filter, setFilter] = useState();

  const handleClick = (index: number) => {
    const newArr = showSpoiler.map((element, i) =>
      i === index ? !element : element
    );
    setShowSpoiler(newArr);
  };

  return (
    <div className={classNames(style.section, "container")}>
      <h2 className={style.title}>Ответы на часто задаваемые вопросы</h2>
      <div className={style.wrapper}>
        {textFAQ.map((element, index: number) => (
          <Fragment key={index}>
            <div className={style.content}>
              <div
                className={style.list_header}
                onClick={() => handleClick(index)}
                role="presentation"
              >
                <span>
                  <Image
                    src="/images/faq/how-call-master.png"
                    alt="info image"
                    width={40}
                    height={40}
                  />
                </span>
                <h4 className={style.title}>{element.question}</h4>
                <span>
                  <Image
                    src="/images/services/icon_spoiler_blue.svg"
                    alt="spoiler"
                    className={classNames({ rotate: !showSpoiler[index] })}
                    width={12}
                    height={7}
                  />
                </span>
              </div>
              <ol
                className={classNames(style.list_ol, {
                  [style.list_hidden]: showSpoiler[index],
                })}
              >
                <li>
                  <p>{element.answer}</p>
                </li>
              </ol>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default GuarantyFAQ;
