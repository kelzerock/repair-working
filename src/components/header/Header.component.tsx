import Link from "next/link";
import Button from "../Button/Button.component";
import style from "./header.module.scss";

const linkArr = [
  { link: "/repair", namePage: "Ремонт" },
  { link: "/installation", namePage: "Установка" },
  { link: "/price", namePage: "Цены" },
  { link: "/blog", namePage: "Блог" },
  { link: "/faq", namePage: "Вопрос-ответ" },
  { link: "/geography", namePage: "География" },
  { link: "/reviews", namePage: "Отзывы" },
  { link: "/masters", namePage: "Мастера" },
  { link: "/contacts", namePage: "Контакты" },
];

const phoneNumber = [80291111111, 80291111111];

const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <div className="container">
        <div className="logo"></div>
        <div className="information_links"></div>
        <div className="header_phone">
          <div className="header_phone_info">
            {phoneNumber.map((el, index) => (
              <a key={index} href="tel:{el}">
                {el}
              </a>
            ))}
          </div>
          <Button className="btn-yellow" text="Перезвоните мне"/>
        </div>
        <nav>
          <ul>
            {linkArr.map((el, index) => (
              <li key={index}>
                <Link href={el.link}>{el.namePage}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
