import Button from "../Button/Button.component";
import FirmInfo from "./FirmInfo/FirmInfo.component";
import style from "./header.module.scss";
import HeaderPhone from "./HeaderPhone/HeaderPhone.component";
import Logo from "./Logo/logo.component";
import Burger from "./Nav/Burger/Burger.component";
import Nav from "./Nav/Nav.component";

const Header = () => {
  return (
    <div className={style.header_wrapper}>
      <div className="container">
        <div className={style.header}>
          <Logo />
          <FirmInfo />
          <HeaderPhone />
          <Nav />
          <Button className="btn-yellow" text="Перезвоните мне" />
          <Burger />
        </div>
      </div>
    </div>
  );
};

export default Header;
