import classNames from "classnames";
import Image from "next/image";
import style from "./index.module.scss";
import textInfo from "../constants/json/main-page-first-section.json";
import iconArrowRight from "../../public/images/services/icon_arrow_right.svg";
import iconSpoiler from "../../public/images/services/icon_spoiler_blue.svg";
import textServices from "../constants/json/services.json";
import { Benefits } from "@/components/benefits";
import { Reviews } from "@/components/reviews";
import { Workflow } from "@/components/workflow";
import { Discount } from "@/components/discount";
import Link from "next/link";
import { useCheckSizeView } from "@/hooks/check-size-view";
import { useState } from "react";
import Head from "next/head";

const MainPage = () => {
  const isMobile = useCheckSizeView("(max-width: 650px)");
  const [isHidden, setIsHidden] = useState(true);
  const iconSize = isMobile ? 22 : 32;

  return (
    <div className={style.section}>
      <div className={classNames(style.wrapper, "container")}>
        <h2 className={style.section__header}>{textInfo.header}</h2>
        <h5 className={style.section__title}>{textInfo.title}</h5>
        <p className={style.section__description}>{textInfo.description}</p>
        <div className={style.section__services}>
          {textServices.services[0].list.map((el, ind) => (
            <Link
              key={`button-list-${ind}`}
              href={el.link}
              className={classNames(style.section__btn, {
                [style.section__btn_hidden]:
                  ind === textServices.services[0].list.length - 1 &&
                  isMobile &&
                  isHidden,
              })}
            >
              <Image
                src={el.image}
                alt={el.name}
                width={iconSize}
                height={iconSize}
              />
              <span>{el.name}</span>
              <Image
                src={iconArrowRight}
                alt="arrow right"
                width={16}
                height={16}
              />
            </Link>
          ))}
          {isMobile && (
            <button
              className={classNames(
                style.section__btn,
                style.section__btn_spoiler
              )}
              onClick={() => setIsHidden(!isHidden)}
            >
              <span>Вся техника</span>
              <Image
                src={iconSpoiler}
                alt="spoiler"
                className={classNames({ rotate: !isHidden })}
                width={12}
                height={6}
              />
            </button>
          )}
        </div>
      </div>
      <Benefits />
      <Reviews />
      <Workflow guaranty={false} />
      <Discount />
    </div>
  );
};

export default MainPage;
