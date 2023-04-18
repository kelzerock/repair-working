import Image from "next/image";
import Link from "next/link";
import style from "./404.module.scss";

const ErrorPage = () => {
  return (
    <div className={style.block}>
      <Image
        src="/images/404.svg"
        alt="404 page"
        width="0"
        height="0"
        sizes="100vw"
        className={style.img}
      />
      <p>
        Вы попали на страницу, которой не существует, либо зашли по неверному
        адресу.
      </p>
      <Link className={style.link} href="/">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ErrorPage;
