import style from "./contacts.module.scss";
import infoAboutFirm from "@/constants/json/about-firm.json";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className={style.block}>
      <h2>НАШИ КОНТАКТЫ</h2>
      <p>
        Мы выполним ремонт в удобное для вас время. Мастера нашей компании
        выезжают по всей территории г.Минска и Минского района.
      </p>
      <p>Обращайтесь по нашим телефонам:</p>
      <ul>
        <li>{infoAboutFirm.phone[0]}</li>
        <li>{infoAboutFirm.phone[1]}</li>
      </ul>
      <p>
        Прием заявок на ремонт/установку принимается с{" "}
        {infoAboutFirm.time.start} до {infoAboutFirm.time.end} ежедневно и без
        выходных!
      </p>
      <p>А так же вы можете оставить On-Line заявку на нашем сайте.</p>
      <p>
        E-mail:
        <a href={`mailto: ${infoAboutFirm.email}`}> {infoAboutFirm.email}</a>
      </p>
    </div>
  );
};

export default ContactPage;
