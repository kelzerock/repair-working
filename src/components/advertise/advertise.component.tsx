import Image from 'next/image';
import Button from '../Button/Button.component';
import style from './advertise.module.scss'

const Advertise = () => {
  return (
    <div className={style.block}>
      <div className={style.wrapper}>
        <div className={style.block_img}>
      <Image className={style.img_fridge} src="/images/advertase/fridge.png" width="0" height="0" alt='fridge' sizes="100vw"/>
      <Image className={style.img_master} src="/images/advertase/master.png" width="0" height="0" alt='master' sizes="100vw"/>
        </div>
        <div className={style.block_info}>
          <h2>Звоните прямо сейчас</h2>
          <h4>Ответим на все вопросы по телефонам</h4>
          <h4>+22222 или +22222</h4>
          <Button className="btn-yellow" text="Перезвоните мне"/>
        </div>


      </div>
    </div>
  )
}

export default Advertise;