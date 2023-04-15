import Link from "next/link";
import Image from "next/image";
import logoImg from "public/images/logo.png";
import style from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={style.logo}>
      <Link href="/">
        <Image src={logoImg} alt="logo" width="0" height="0" sizes="100vw" />
      </Link>
    </div>
  );
};

export default Logo;
