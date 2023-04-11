import style from "./installation.module.scss";

const Installation = ({ data }: InstallData) => {
  const {
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
    head6,
    head6Info,
    head6UL,
    head6Info2,
  } = data;

  return (
    <div className={style.title}>
      <h2>{head1}</h2>
      <p>{headInfo}</p>
      <h3>{head2}</h3>
      <p>{head2Info}</p>
      <ul>
        {head2UL.map((el, ind) => (
          <li key={ind}>
            <span>{el.title}</span>
            {el.text}
          </li>
        ))}
      </ul>
      <p>{head2Info2}</p>
      <h3>{head3}</h3>
      <p>{head3Info}</p>
      <ul>
        {head3UL.map((el, ind) => (
          <li key={ind}>
            <span>{el.title}</span>
            {el.text}
          </li>
        ))}
      </ul>
      <h3>{head4}</h3>
      <p>{head4Info}</p>
      <ul>
        {head4UL.map((el, ind) => (
          <li key={ind}>{el}</li>
        ))}
      </ul>
      <p>{head4Info2}</p>
      <h3>{head5}</h3>
      <p>{head5Info}</p>
      <h3>{head6}</h3>
      <p>{head6Info}</p>
      <ul>
        {head6UL.map((el, ind) => (
          <li key={ind}>
            <span>{el.title}</span>
            {el.text}
          </li>
        ))}
      </ul>
      <p>{head6Info2}</p>
    </div>
  );
};

export default Installation;

interface InstallData {
  data: {
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
