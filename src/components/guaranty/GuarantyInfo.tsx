import { Workflow } from "@/components/workflow";
import style from "./guarantyInfo.module.scss";

const GuarantyInfo = () => {
  return (
    <div className={style.block_info}>
      <div className={style.info_text}>
      <h1>Гарантийный случай </h1>
      <p>
        Мы даём официальную гарантию на проведённый нашими мастерами ремонт и
        заменённые запчасти от 3 месяцев до 2 лет. Срок зависит от типа поломки
        и деталей. Вы получаете официальную квитанцию, в ней указаны работы и
        запчасти, которые менялись, цена и срок гарантии.
      </p>
      <p>
        Если ваша техника сломается в этот период, то наш мастер приедет к вам
        еще раз и бесплатно устранит проблему.
      </p>
      <button>У вас гарантий случай?</button>
      </div>
      <Workflow guaranty={true} />
    </div>
  );
};


export default GuarantyInfo;