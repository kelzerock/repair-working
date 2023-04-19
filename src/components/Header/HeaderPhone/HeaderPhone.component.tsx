import Image from "next/image";
import style from "./headerPhone.module.scss";
import aboutFirm from "@/constants/json/about-firm.json";

const HeaderPhone = () => {
  return (
    <div className={style.header_phone}>
      <a href={`tel:${aboutFirm.phone[0]}`}>
        <span>{aboutFirm.phoneImg[0]}</span>
        <Image
          className={style.phone_img}
          src="/images/header/A1-2018.webp"
          alt="a1 logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </a>
      <a href={`tel:${aboutFirm.phone[1]}`} className={style.phone_mts}>
        <span>{aboutFirm.phoneImg[1]}</span>
        <Image
          className={style.phone_img}
          src="/images/header/MTS_Logo_rus_r.png"
          alt="mts logo"
          width="0"
          height="0"
          sizes="100vw"
        />
      </a>

      <a href={`tel:${aboutFirm.phone[0]}`}>
        <Image
          src="/phone-call.svg"
          alt="phone call"
          width={30}
          height={30}
          sizes="100vw"
        />
      </a>
    </div>
  );
};

export default HeaderPhone;
