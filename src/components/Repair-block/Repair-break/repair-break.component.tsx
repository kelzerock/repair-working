import style from './repair-break.module.scss';
import textData from '@/constants/json/repair-break.json';
import Image from 'next/image';
import Button from '@/components/Button/Button.component';
import classNames from 'classnames';
import { text } from 'stream/consumers';

const jsonInfo: any = textData;

interface InfoLi {
  img: string,
      imgAlt: string,
      title:  string,
      info:  string[],
      price: number
}

const RepairBreak = ({filter}:any) => {


  return (
    <div className={style.block}>
      <h2>Стоимость ремонта частых поломок</h2>
      <ul className={style.block_ul}>
        {jsonInfo[filter].data.map((el:InfoLi, index:any)=>(
          <li key={index} className={style.block_li}>
            <div className={style.li_info}>
              <Image className={style.block_li_img} src={el.img} alt={el.imgAlt} width="0" height="0" sizes='100vw'/>

              <div className={style.item_info}>
                <h3>{el.title}</h3>
                <ul>
                  {el.info.map((elem, ind)=>(
                    <li key={ind}>
                      <Image src="/images/repair/check-svgrepo-com.svg" alt="check" width={10} height={10}/>
                      <p>{elem}</p>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
            <Button className='btn-yellow' text={classNames("от ", el.price, " руб.")} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepairBreak;