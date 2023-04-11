import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import style from './benefits.module.scss';
import iconSpoiler from '../../../public/images/services/icon_spoiler_blue.svg';
import textBenefits from '../../constants/json/benefits.json';


function useDelayUnmount(isMounted: boolean, delayTime: number) {
    const [showDiv, setShowDiv] = useState(false);
    useEffect(() => {
      let timeoutId : string | number | NodeJS.Timeout | undefined;
      if (isMounted && !showDiv) {
        setShowDiv(true);
      } else if (!isMounted && showDiv) {
        timeoutId = setTimeout(() => setShowDiv(false), delayTime); //delay our unmount
      }
      return () => clearTimeout(timeoutId); // cleanup mechanism for effects , the use of setTimeout generate a sideEffect
    }, [isMounted, delayTime, showDiv]);
    return showDiv;
  }

  
export const Benefits = () => {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <div className={classNames(style.section, 'container')}>
            <div
                className={style.list_header}
                onClick={() => setIsShowing(!isShowing)}
                role='presentation'
            >
                <h2 className={style.title}>Преимущества для Вас</h2>
                <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !isShowing})}/></span>
            </div>
            <ul
                className={classNames(style.list_ul, {[style.list_hidden] : isShowing})}
            >
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