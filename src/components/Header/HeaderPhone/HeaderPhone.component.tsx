import Image from "next/image";
import style from "./headerPhone.module.scss";
import aboutFirm from "@/constants/json/about-firm.json";

const HeaderPhone = () => {
  return (
    <div className={style.header_phone}>
          <a href={`tel:${aboutFirm.phone[0]}`}>
            {aboutFirm.phoneImg[0]}
          </a>
          <a href={`tel:${aboutFirm.phone[1]}`}>
            {aboutFirm.phoneImg[1]}
          </a>
  
      <a href={`tel:${aboutFirm.phone[0]}`}>
        <Image src="/phone-call.svg" alt="phone call" width={30} height={30} sizes="100vw"/>
      </a>
    </div>
  );
};

export default HeaderPhone;
