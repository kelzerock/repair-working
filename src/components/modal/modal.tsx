import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import closeIcon from '../../../public/images/modal/Icon_close.svg';

import style from './modal.module.scss';
import Image from 'next/image';
import { useScrollLock } from '@/hooks/scroll-lock';

export type ModalPropsType = {
    isShowingModal: boolean,
    setIsShowingModal: (arg: boolean) => void,
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

export const Modal = ({isShowingModal, setIsShowingModal}: ModalPropsType) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [modalText, setModalText] = useState('');
    const {unlockScroll} = useScrollLock();

    const submitHandler = () => {

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
                    <h3 className={style.title}>Оставить отзыв</h3>
                    <textarea
                        className={style.textarea}
                        placeholder='Опишите Ваше впечатление о проделанной нами работе.'
                        defaultValue={modalText}
                        onChange={(e) => setModalText(e.target.value)}
                    />
                    <button
                        className={classNames(style.btn)}
                        onClick={submitHandler}
                        type='submit'
                    >Отправить отзыв</button>
                </div>
            </div>
        </div>
    )
}