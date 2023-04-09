import Link from "next/link";
import { useState } from "react";
import Burger from "./Burger/Burger.component";
import style from "./nav.module.scss";

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

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {linkArr.map((el, index) => (
          <li key={index}>
            <Link href={el.link}>{el.namePage}</Link>
          </li>
        ))}
      </ul>
      <div className={style.burger} >
        {/* <Burger /> */}
     </div>

    </nav>
  );
};

export default Nav;


// const Burger = () => {
//   const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
//     const [menu_class, setMenuClass] = useState("menu hidden")
//     const [isMenuClicked, setIsMenuClicked] = useState(false)

//     // toggle burger menu change
//     const updateMenu = () => {
//         if(!isMenuClicked) {
//             setBurgerClass("burger_bar clicked")
//             setMenuClass("menu visible")
//         }
//         else {
//             setBurgerClass("burger_bar unclicked")
//             setMenuClass("menu hidden")
//         }
//         setIsMenuClicked(!isMenuClicked)
//     }

//     return(
//       <>
          
//                 <div className={style.burger_menu} onClick={updateMenu}>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                     <div className={burger_class} ></div>
//                 </div>
            

//             <div className={menu_class}></div>
//       </>

//     )
// }