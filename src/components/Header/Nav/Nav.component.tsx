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
                <Link href={""}  className="header_sub_link">
                  {el.namePage}

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
                </Link>
              </li>
            );
          } else {
            return (
            <li key={index}>
              <Link href={el.link}>{el.namePage}</Link>
            </li>
            )
          }
        })}
      </ul>
    </nav>
  );
};

export default Nav;
