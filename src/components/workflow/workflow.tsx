import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
import style from './workflow.module.scss';
import iconSpoiler from '../../../public/images/services/icon_spoiler_blue.svg';
import textWorkflow from '../../constants/json/workflow.json';
import { Modal } from '../modal';

export const Workflow = ({guaranty}:{guaranty:boolean}) => {
    const [isShowing, setIsShowing] = useState(false);
    const [isShowingModal, setIsShowingModal] = useState(false);
    const arrForDraw = guaranty ? textWorkflow.garanty : textWorkflow.casual

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
                {arrForDraw.map((el:any, ind:number) => (
                    <li key={`benefits-${ind}`} className={style.list_li}>
                        <Image src={el.image} alt={el.image} width={74} height={70} className={style.img} />
                        <h4 className={style.list_title}>{el.text}</h4>
                    </li>
                ))}
            </ul>
            {guaranty &&
                <button
                    className={classNames(style.btn_guaranty, {[style.btn_hidden] : isShowing})}
                    onClick={e => {
                        e.preventDefault(); 
                        e.stopPropagation();
                        setIsShowingModal(!isShowingModal);
                    }}
                >Оставить заявку</button>
            }
            {isShowingModal && <Modal isShowingModal={isShowingModal} setIsShowingModal={setIsShowingModal} typeOfModal='warranty'/>}
        </div>
    )
}