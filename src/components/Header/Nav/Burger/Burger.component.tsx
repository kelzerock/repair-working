import { linkArr } from "@/constant/header-constant";
import Link from "next/link";
import { useState } from "react";


const Burger = () => {
  const [burger_class, setBurgerClass] = useState("burger_bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [nav_burger, setNavBurger] = useState("nav_burger hidden");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
      setMenuClass("menu visible");
      setNavBurger("nav_burger visible");
    } else {
      setBurgerClass("burger_bar unclicked");
      setMenuClass("menu hidden");
      setNavBurger("nav_burger hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className="burger_menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <div className={menu_class}>
        <nav className={nav_burger}>
          <ul>
            {linkArr.map((el, index) => {
              if (el.subelements) {
                return (
                  <li key={index}>
                    <div className="sub_nav">
                       <span>{el.namePage}</span>
                      <ul>
                        {el.subelements.map((elem, ind) => (
                          <li key={ind}>
                            <Link
                              href={el.link + elem.path}
                              className="header_link"
                              onClick={updateMenu}
                            >
                              {elem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li key={index}>
                    <Link href={el.link} onClick={updateMenu}>
                      {el.namePage}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Burger;
