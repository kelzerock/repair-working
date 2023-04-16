import { useState } from "react";
import Image from "next/image";
import style from "./repairPrice.module.scss";
import iconSpoiler from "../../../../public/images/services/icon_spoiler_blue.svg";
import classNames from "classnames";

interface Info {
  description: string;
  price: number;
  time: string;
  guaranty: string;
}

interface Price {
  title: string;
  info: Info[];
}

interface TextDataPrice {
  data: {
    small: Price;
    middle: Price;
    big: Price;
  };
}

const RepairPrice = ({ data }: TextDataPrice) => {
  const [isShowingSmall, setIsShowingSmall] = useState(true);
  const [isShowingMiddle, setIsShowingMiddle] = useState(true);
  const [isShowingBig, setIsShowingBig] = useState(true);
  const [isTest, setIsTest] = useState([])

  const { small, middle, big } = data;

  return (
    <>
    <div className={style.section}>
      <div
        className={style.list_header}
        onClick={() => setIsShowingSmall(!isShowingSmall)}
        role="presentation"
      >
        <h2 className={style.title}>{small.title}</h2>
        <span>
          <Image
            src={iconSpoiler}
            alt="spoiler"
            className={classNames({ rotate: !isShowingSmall })}
          />
        </span>
      </div>
      <ul
        className={classNames(style.list_ul, {
          [style.list_hidden]: isShowingSmall,
        })}
      >
        {small.info.map((el, ind) => (
          <li key={`price-${ind}`} className={style.list_li}>
            <h4 className={style.main_info}>{el.description}</h4>
            <h4 className={style.main_price}>от {el.price} руб.</h4>
            <p className={style.main_time}>{el.time}</p>
            <p className={style.main_guaranty}>{el.guaranty}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className={style.section}>
      <div
        className={style.list_header}
        onClick={() => setIsShowingMiddle(!isShowingMiddle)}
        role="presentation"
      >
        <h2 className={style.title}>{middle.title}</h2>
        <span>
          <Image
            src={iconSpoiler}
            alt="spoiler"
            className={classNames({ rotate: !isShowingMiddle })}
          />
        </span>
      </div>
      <ul
        className={classNames(style.list_ul, {
          [style.list_hidden]: isShowingMiddle,
        })}
      >
        {middle.info.map((el, ind) => (
          <li key={`price-${ind}`} className={style.list_li}>
            <h4 className={style.main_info}>{el.description}</h4>
            <h4 className={style.main_price}>от {el.price} руб.</h4>
            <p className={style.main_time}>{el.time}</p>
            <p className={style.main_guaranty}>{el.guaranty}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className={style.section}>
      <div
        className={style.list_header}
        onClick={() => setIsShowingBig(!isShowingBig)}
        role="presentation"
      >
        <h2 className={style.title}>{big.title}</h2>
        <span>
          <Image
            src={iconSpoiler}
            alt="spoiler"
            className={classNames({ rotate: !isShowingBig })}
          />
        </span>
      </div>
      <ul
        className={classNames(style.list_ul, {
          [style.list_hidden]: isShowingBig,
        })}
      >
        {big.info.map((el, ind) => (
          <li key={`price-${ind}`} className={style.list_li}>
            <h4 className={style.main_info}>{el.description}</h4>
            <h4 className={style.main_price}>от {el.price} руб.</h4>
            <p className={style.main_time}>{el.time}</p>
            <p className={style.main_guaranty}>{el.guaranty}</p>
          </li>
        ))}
      </ul>
    </div>

    <Test />
    </>
  );
};

export default RepairPrice;

const tt = [
  {title: '1', data: ['a', 'b','c']},
  {title: '2', data: ['1a', '1b','1c']},
  {title: '3', data: ['1', '2','3']},
]

const Test = () => {

  const [isTest, setIsTest] = useState([
    {id: 0, check: false},
    {id: 1, check: false},
    {id: 2, check: false},
    {id: 3, check: false},
    {id: 4, check: false},
    {id: 5, check: false},
  ])
  interface Test {
    id: number,
    check: boolean
  }

  const handleTest = (ind:number) => {
  console.log(isTest)
    let xxx = isTest.map(el=> {
      if(el.id === ind){
          return {id: el.id, check: !el.check}
        } else {
          return {id: el.id, check: el.check}
        }
    })

    setIsTest(xxx)    
    }


    // console.log((event as MouseEvent).target)
    // let ev = (event as MouseEvent).target
    // let xx  = ev? ((ev as HTMLElement).closest('div') as HTMLElement) : '';
    // let yy  = (xx as HTMLElement).dataset.key
    // console.log(yy)
    // SetIsTest(
    //   isTest.map((el: any, index: number):any=>{
    //     el.id === parseInt(yy)
    //     ? {...isTest, check: isTest[el.id]}
    //     : {...isTest}
    //   }))

  // }



  return (
    <div>
      {tt.map((el, index)=>(
        
        <div className={classNames(style.testing,  !isTest[index].check ? style.red : "" )} data-key={index} key={index}  
        onClick={()=>{handleTest(index)}}>
          <h1>{el.title}</h1>
          {el.data.map((elem, ind)=>(
            <p key={ind}>{elem}</p>
          ))}
        </div>
      ))
        }
    </div>
  )
}