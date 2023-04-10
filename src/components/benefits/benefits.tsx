import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import style from './benefits.module.scss';
import iconSpoiler from '../../../public/images/services/icon_spoiler_blue.svg';
import textBenefits from '../../constants/json/benefits.json';

export const Benefits = () => {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <div className={classNames(style.section, 'container')}>
            <h2 className={style.title}>Преимущества для Вас</h2>
            <span><Image src={iconSpoiler} alt='spoiler'/></span>
            <ul className={style.list_ul}>
                {textBenefits.map((el, ind) => (
                    <li key={`benefits-${ind}`} className={style.list_li}>
                        <Image src={el.image} alt={el.title} width={74} height={70}/>
                        <h4 className={style.list_title}>{el.title}</h4>
                        <p className={style.list_desc}>{el.desc}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}