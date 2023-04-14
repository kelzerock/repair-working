import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import style from './workflow.module.scss';
import iconSpoiler from '../../../public/images/services/icon_spoiler_blue.svg';
import textWorkflow from '../../constants/json/workflow.json';

export const Workflow = () => {
    const [isShowing, setIsShowing] = useState(false);

    return (
        <div className={classNames(style.section, 'container')}>
            <div
                className={style.list_header}
                onClick={() => setIsShowing(!isShowing)}
                role='presentation'
            >
                <h2 className={style.title}>Система работы</h2>
                <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !isShowing})}/></span>
            </div>
            <ul
                className={classNames(style.list_ul, {[style.list_hidden] : isShowing})}
            >
                {textWorkflow.map((el, ind) => (
                    <li key={`benefits-${ind}`} className={style.list_li}>
                        <Image src={el.image} alt={el.image} width={74} height={70} className={style.img} />
                        <h4 className={style.list_title}>{el.text}</h4>
                    </li>
                ))}
            </ul>
        </div>
    )
}