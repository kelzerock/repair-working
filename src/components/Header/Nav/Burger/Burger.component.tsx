import linkArr from "@/constants/json/path.json";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import style from "./burger.module.scss";

const Burger = () => {
  const [burger_class, setBurgerClass] = useState(
    classNames(style.burger_bar, style.unclicked)
  );
  const [menu_class, setMenuClass] = useState(
    classNames(style.menu, style.hidden)
  );
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [nav_burger, setNavBurger] = useState(
    classNames(style.nav_burger, style.hidden)
  );
  const [showSpoiler, setShowSpoiler] = useState(Array(5).fill(true));

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass(classNames(style.burger_bar, style.clicked));
      setMenuClass(classNames(style.menu, style.visible));
      setNavBurger(classNames(style.nav_burger, style.visible));
    } else {
      setBurgerClass(classNames(style.burger_bar, style.unclicked));
      setMenuClass(classNames(style.menu, style.hidden));
      setNavBurger(classNames(style.nav_burger, style.hidden));
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <div className={style.burger_menu} onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>

      <div className={menu_class}>
        <nav className={classNames(nav_burger)}>
          <ul className={style.first_ul}>
            {linkArr.path.map((el, index) => {
              if (el.subelements) {
                return (
                  <li key={index} className={style.list_elem}>
                    <div
                      className={style.sub_nav}
                      onClick={() => {
                        let newData = showSpoiler.map((element, i) => {
                          if (i === index) {
                            console.log("test");
                            return !element;
                          } else {
                            return element;
                          }
                        });
                        setShowSpoiler(newData);
                      }}
                    >
                      <span className={style.sub_header}>{el.namePage}
                      
                      <Image className={classNames(style.img, showSpoiler[index] ? style.rotateImg : "")} src="/images/header/small-arrow-black.svg" alt="arrow" width={10} height={10} />
                      </span>
                      <ul
                        className={classNames(
                          style.sub_nav_list,
                          showSpoiler[index] ? style.sub_hidden : ""
                        )}
                      >
                        {el.subelements.map((elem, ind) => (
                          <li key={ind}>
                            <Link
                              href={el.link + elem.subLink}
                              className={style.header_link}
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
                  <li key={index} className={style.list_elem}>
                    <Link
                      href={el.link}
                      onClick={updateMenu}
                      className={style.header_link}
                    >
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
