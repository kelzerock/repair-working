import style from "./installation.module.scss";

const Installation = ({ data }: InstallData) => {
  const {
    price,
    head1,
    headInfo,
    head2,
    head2Info,
    head2UL,
    head2Info2,
    head3,
    head3Info,
    head3UL,
    head4,
    head4Info,
    head4UL,
    head4Info2,
    head5,
    head5Info,
    // head6,
    // head6Info,
    // head6UL,
    // head6Info2,
  } = data;

  return (
    <div className={style.title}>
      <h1 className={style.header}>{head1}</h1>
      <p className={style.head_info}>{headInfo}</p>
      <h2 className={style.head2}>{head2}</h2>
      <p>{head2Info}</p>
      <ul>
        {head2UL.map((el, ind) => (
          <li key={ind}>
            <p>
              <b>{el.title}</b>
              {el.text}
            </p>
          </li>
        ))}
      </ul>
      <p>{head2Info2}</p>
      <h3>{head3}</h3>
      <p>{head3Info}</p>
      <ul>
        {head3UL.map((el, ind) => (
          <li key={ind}>
            <p>
              <b>{el.title}</b>
              {el.text}
            </p>
          </li>
        ))}
      </ul>
      <h3>{head4}</h3>
      <p>{head4Info}</p>
      <ul>
        {head4UL.map((el, ind) => (
          <li key={ind}>
            <p>{el}</p>
          </li>
        ))}
      </ul>
      <p>{head4Info2}</p>
      <h3>{head5}</h3>
      <p>{head5Info}</p>
      <div className={style.info_price}>
        <div className={style.hat_table}>
          <div className={style.price_title}>цена работ</div>
          <div className={style.price_guaranty}>гарантия</div>
        </div>
        {price.map((element, index) => (
          <div key={index} className={style.price_element}>
            <p className={style.price_title}>{element.title}</p>
            <p className={style.price_title_price}>{element.priceForWork}</p>
            <p className={style.price_title_guaranty}>{element.guaranty}</p>
          </div>
        ))}

      </div>
        <div>
          <p>
            <b>
              <i>Примечание: </i>
            </b>{" "}
            В любом случае, в цену включено:
          </p>
          <ul>
            <li>
              <p>Выезд мастера по Вашему адресу;</p>
            </li>
            <li>
              <p>Выполнение всех работ по установке;</p>
            </li>
            <li>
              <p>Стоимость всех необходимых комплектующих.</p>
            </li>
          </ul>
        </div>
      {/* <h3>{head6}</h3> */}
      {/* <p>{head6Info}</p>
      <ul>
        {head6UL.map((el, ind) => (
          <li key={ind}>
            <p>
              <span>{el.title}</span>
              {el.text}
            </p>
          </li>
        ))}
      </ul>
      <p>{head6Info2}</p> */}
    </div>
  );
};

export default Installation;

interface InstallData {
  data: {
    price: { title: string; priceForWork: string; guaranty: string }[];
    head1: string;
    headInfo: string;
    head2: string;
    head2Info: string;
    head2UL: { title: string; text: string }[];
    head2Info2: string;
    head3: string;
    head3Info: string;
    head3UL: { title: string; text: string }[];
    head4: string;
    head4Info: string;
    head4UL: string[];
    head4Info2: string;
    head5: string;
    head5Info: string;
    head6: string;
    head6Info: string;
    head6UL: { title: string; text: string }[];
    head6Info2: string;
  };
}
