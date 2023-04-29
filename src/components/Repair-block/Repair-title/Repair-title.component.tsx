import Head from "next/head";
import style from "./repair-title.module.scss";
import Image from "next/image";

interface TitleBlockInterface {
  data: {
    title: string;
    info: string;
    image: string;
    imageAlt: string;
  };
}

const RepairTitle = ({ data }: TitleBlockInterface) => {
  const { title, info, image, imageAlt } = data;
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <div className={style.title}>
        <h2>{title}</h2>
        <div className={style.info}>
          <Image src={image} alt={imageAlt} width="0" height="0" sizes="100vw"/>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
};

export default RepairTitle;
