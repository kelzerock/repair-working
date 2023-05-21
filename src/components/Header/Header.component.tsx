import classNames from "classnames";
import { useState } from "react";
import { Modal } from "../modal";
import FirmInfo from "./FirmInfo/FirmInfo.component";
import style from "./header.module.scss";
import HeaderPhone from "./HeaderPhone/HeaderPhone.component";
import Logo from "./Logo/logo.component";
import Burger from "./Nav/Burger/Burger.component";
import Nav from "./Nav/Nav.component";

const Header = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);

  return (
    <div className={style.header_wrapper}>
            {isShowingModal && <Modal isShowingModal={isShowingModal} setIsShowingModal={setIsShowingModal} typeOfModal="call"/>}
      <div className="container">
        <div className={style.header}>
          <Logo />
          <FirmInfo />
          <HeaderPhone />
          <Nav />
          <button
            className={classNames("btn-yellow", style.header_btn)}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsShowingModal(!isShowingModal);
            }}
          >
            Перезвоните мне
          </button>
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Header;
