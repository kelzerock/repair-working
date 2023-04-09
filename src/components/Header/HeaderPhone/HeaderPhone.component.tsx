import Button from "@/components/Button/Button.component";
import { phoneNumber } from "@/constant/tel";
import Image from "next/image";
import style from "./headerPhone.module.scss";

const HeaderPhone = () => {
  return (
    <div className={style.header_phone}>
      {phoneNumber.map((el, index) => (
        <a key={index} href="tel:{el}">
          {el}
        </a>
      ))}
      <a href="tel:{phoneNumber[0]}">
        <Image src="/phone-call.svg" alt="phone call" width={40} height={40} />
      </a>
    </div>
  );
};

export default HeaderPhone;
