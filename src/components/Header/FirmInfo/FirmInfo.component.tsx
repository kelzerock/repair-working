import style from "./firmInfo.module.scss";
import Image from "next/image";

const info: string[] = [
  "с 10:00 до 22:00 без выходных",
  "Бесплатная диагностика",
  "Гарантия до 2 лет",
];

const FirmInfo = () => {
  return (
    <ul className={style.header_firm_info}>
      {info.map((el, index) => (
        <li key={index}>
          <Image src={`/images/header/header${index}.svg`} width="0" height="0" alt="done img" sizes="100vw" />
          <span>{el}</span>
        </li>
      ))}
    </ul>
  );
};

export default FirmInfo;
