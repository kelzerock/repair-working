import classNames from "classnames";
import Image from "next/image";
import style from "./index.module.scss";
import textInfo from "../constants/json/main-page-first-section.json";
import iconArrowRight from "../../public/images/services/icon_arrow_right.svg";
import textServices from "../constants/json/services.json";
import { Benefits } from "@/components/benefits";
import { Reviews } from "@/components/reviews";
import { Workflow } from "@/components/workflow";
import { Discount } from "@/components/discount";
import Link from "next/link";
import Advertise from "@/components/advertise/advertise.component";
import { FAQ } from "@/components/faq";

const MainPage = () => {
  return (
    <div className={style.section}>
      <div className={classNames(style.wrapper, "container")}>
        <h2 className={style.section__header}>{textInfo.header}</h2>
        <h3 className={style.section__title}>{textInfo.title}</h3>
        <p className={style.section__description}>{textInfo.description}</p>
        <div className={style.section__services}>
          {textServices.services[0].list.map((el, ind) => (
            <Link
              key={`button-list-${ind}`}
              href={el.link}
              className={style.section__btn}
            >
              <Image src={el.image} alt={el.name} width={32} height={32} />
              <span>{el.name}</span>
              <Image
                src={iconArrowRight}
                alt="arrow right"
                width={16}
                height={16}
              />
            </Link>
          ))}
        </div>
      </div>
      <Benefits />
      <Reviews />
      <Workflow guaranty={false}/>
      <Discount />
    </div>
  );
};

export default MainPage;
