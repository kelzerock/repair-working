import Link from "next/link";
import style from "./nav.module.scss";
import linkArr from "@/constants/json/path.json";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

const Nav = () => {

  const [isShow, setIsShow] = useState('')

  return (
    <nav className={style.nav}>
      <ul>
        {linkArr.path.map((el, index) => {
          if (el.subelements) {
            return (
              <li key={index}>
                <div className={style.header_sub_link}>
                  <span>
                    {el.namePage}
                    <Image
                      className={style.nav_arrow}
                      src="/images/header/small-arrow.svg"
                      alt="arrow"
                      width="10"
                      height="10"
                      sizes="100vw"
                    />
                    <Image
                      className={style.nav_arrow_black}
                      src="/images/header/small-arrow-black.svg"
                      alt="arrow"
                      width="10"
                      height="10"
                      sizes="100vw"
                    />
                  </span>

                  <div className={classNames(style.addiction_nav, isShow)} onClick={()=>{
                    setIsShow(style.hidden)
                  }}>
                    <ul>
                      {el.subelements.map((element, index) => {
                        return (
                          <li key={index}>
                            <Link href={el.link + element.subLink}>
                              {element.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <Link href={el.link}>{el.namePage}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Nav;
