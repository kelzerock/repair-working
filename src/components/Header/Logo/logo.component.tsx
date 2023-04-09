import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../../public/wrench.svg";
import style from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={style.logo}>
      <Link href="/">
        <h2>РемБыт</h2>
        <p>Ремонт и установка бытовой техники</p>
        <Image src={logoImg} alt="logo" width={30} height={30} />
      </Link>
    </div>
  );
};

export default Logo;
