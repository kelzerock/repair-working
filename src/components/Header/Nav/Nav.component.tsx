import Link from "next/link";
import style from "./nav.module.scss";
import { linkArr } from "@/constant/header-constant";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {linkArr.map((el, index) => {
          if (el.subelements) {
            return (
              <li key={index}>
                <div className={style.header_sub_link}>
                  <span>{el.namePage}</span>
                  <div className={style.addiction_nav}>
                    <ul>
                      {el.subelements.map((element, index) => {
                        return (
                          <li key={index}>
                            <Link href={el.link + element.path}>
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
