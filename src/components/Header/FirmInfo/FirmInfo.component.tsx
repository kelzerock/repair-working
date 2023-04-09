import style from "./firmInfo.module.scss";
import Image from "next/image";

const info: string[] = [
  "с 8:00 до 22:00 без выходных",
  "Бесплатная диагностика",
  "Гарантия до 2 лет",
];

const FirmInfo = () => {
  return (
    <ul className={style.header_firm_info}>
      {info.map((el, index) => (
        <li key={index}>
          <Image src="/done.svg" width={10} height={10} alt="done img" />
          <span>{el}</span>
        </li>
      ))}
    </ul>
  );
};

export default FirmInfo;
