import Link from "next/link";
import { useState } from "react";
import Nav, { linkArr } from "../Nav.component";
import style from './burger.module.scss'

const Burger = () => {
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
    console.log("burger bar", burger_class);
  };

  return (
    <>
      <div className="burger_menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <div className={menu_class}>
        <nav className={style.nav_burger}>
          <ul>
            {linkArr.map((el, index) => (
              <li key={index}>
                <Link href={el.link} onClick={updateMenu}>{el.namePage}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Burger;
