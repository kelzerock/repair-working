import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import closeIcon from '../../../public/images/modal/Icon_close.svg';

import style from './modal.module.scss';
import Image from 'next/image';
import { useScrollLock } from '@/hooks/scroll-lock';

export type ModalPropsType = {
    isShowingModal: boolean,
    setIsShowingModal: (arg: boolean) => void,
    typeOfModal: 'warranty' | 'review' | 'request' | 'call',
}

// export const useScrollLock = () => {
//     const lockScroll = useCallback(() => { 
//         document.body.style.overflow = 'hidden';
//     }, [])
    
//     const unlockScroll = useCallback(() => { 
//         document.body.style.overflow = '';
//     }, []);
    
//     return {
//         lockScroll,
//         unlockScroll
//     };  
// }

export const useTypeOfModal = (type: string) => {
    switch (true) {
        case type === 'review':
            return {isReview: true, isRequest: false, isWarranty: false, isCall: false}
        case type === 'request':
            return {isReview: false, isRequest: true, isWarranty: false, isCall: false}
        case type === 'warranty':
            return {isReview: false, isRequest: false, isWarranty: true, isCall: false}
        case type === 'call':
            return {isReview: false, isRequest: false, isWarranty: false, isCall: true}
        default:
            return {isReview: false, isRequest: false, isWarranty: false, isCall: false}
    }
}

export const Modal = ({isShowingModal, setIsShowingModal, typeOfModal}: ModalPropsType) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const {isReview, isRequest, isWarranty, isCall} = useTypeOfModal(typeOfModal);

    const [modalName, setModalName] = useState('');
    const [modalPhone, setModalPhone] = useState('');
    const [modalAddress, setModalAddress] = useState('');
    const [modalText, setModalText] = useState('');
    const {unlockScroll} = useScrollLock();

    const submitHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ TITLE: modalText })
        }

        fetch(`https://b24-jk9jbm.bitrix24.by/rest/1/pv44ctw5ojrpgsrl/crm.lead.add.json?`,
            requestOptions);
        setIsShowingModal(!isShowingModal);
    }

    const closeHandler = useCallback(() => {
        setIsShowingModal(false);
        unlockScroll();
    }, [setIsShowingModal, unlockScroll])

    useLayoutEffect(() => {
        const closeModal = (e: Event): void => {
            if (!modalRef.current?.contains(e.target as Node) && isShowingModal) {
                // setIsShowingModal(false);
                closeHandler();
            }
        }

        document.body.addEventListener('click', closeModal);

        return () => document.body.removeEventListener('click', closeModal);
    },[isShowingModal, setIsShowingModal, closeHandler])

    return (
        <div className={style.section}>
            <div className={style.wrapper} ref={modalRef} >
                <button
                    type='button'
                    className={style.close_icon}
                    onClick={() => closeHandler()}
                >
                    <Image src={closeIcon} alt='close icon'/>
                </button>
                <div className={style.modal}>
                    {isReview && <h3 className={style.title}>Оставить отзыв</h3>}
                    {isRequest && <h3 className={style.title}>Оставить заявку</h3>}
                    {isWarranty && <h3 className={style.title}>Обратиться по гарантии</h3>}
                    {isCall && <h3 className={style.title}>Заказать обратный звонок</h3>}
                    <label className={style.label}>
                        <input
                            className={style.input}
                            placeholder='Фамилия и имя'
                            onChange={(e) => setModalName(e.target.value)}
                        />
                        <span className={style.placeholder}>Фамилия и имя</span>
                    </label>
                    {(isRequest || isWarranty) &&
                        <label className={style.label}>
                            <input
                                className={style.input}
                                placeholder='Адрес'
                                onChange={(e) => setModalAddress(e.target.value)}

                            />
                            <span className={style.placeholder}>Адрес</span>
                        </label>
                    }
                    {(isRequest || isWarranty || isCall) &&
                        <label className={style.label}>
                            <input
                                type='number'
                                className={style.input}
                                placeholder='Номер телефона'
                                onChange={(e) => setModalPhone(e.target.value)}
                            />
                            <span className={style.placeholder}>Номер телефона</span>
                        </label>
                    }
                    {!isCall &&
                        <textarea
                            className={style.textarea}
                            placeholder={
                                isReview ? 'Опишите Ваше впечатление о проделанной нами работе.'
                                : isRequest ? 'Опишите возникшую проблему (Вид и модель техники, неисправность)'
                                : isWarranty ? 'Опишите Ваш гарантийный случай, с указанием сведений из гарантийного талона': ''
                            }
                            defaultValue={modalText}
                            onChange={(e) => setModalText(e.target.value)}
                        />
                    }
                    <button
                        className={classNames(style.btn)}
                        onClick={submitHandler}
                        type='submit'
                    >{
                        isReview ? 'Оставить отзыв'
                        : isRequest ? 'Отправить заявку'
                        : isWarranty ? 'Обратиться по гарантии'
                        : isCall ? 'Мы перезвоним Вам': ''
                    }</button>
                </div>
            </div>
        </div>
    )
}