import Image from "next/image";
import style from "./headerPhone.module.scss";
import aboutFirm from "@/constants/json/about-firm.json";

const HeaderPhone = () => {
  return (
    <div className={style.header_phone}>
          <a href={`tel:${aboutFirm.phone[0]}`}>
            {aboutFirm.phone[0]}
          </a>
          <a href={`tel:${aboutFirm.phone[1]}`}>
            {aboutFirm.phone[1]}
          </a>
  
      <a href="tel:{phoneNumber[0]}">
        <Image src="/phone-call.svg" alt="phone call" width={40} height={40} />
      </a>
    </div>
  );
};

export default HeaderPhone;
