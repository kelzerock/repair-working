import Link from "next/link";
import style from "./nav.module.scss";

export const linkArr = [
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

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {linkArr.map((el, index) => (
          <li key={index}>
            <Link href={el.link}>{el.namePage}
              
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;