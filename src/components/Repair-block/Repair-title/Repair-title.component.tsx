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
      <div className={style.title}>
        <h1>{title}</h1>
        <div className={style.info}>
          <Image src={image} alt={imageAlt} width="0" height="0" sizes="100vw"/>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
};

export default RepairTitle;
