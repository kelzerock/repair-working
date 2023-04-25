import classNames from 'classnames';
import style from './faq.module.scss';
import { useState } from 'react';
import textFAQ from '../../constants/json/faq.json';
import textFooter from '../../constants/json/footer-contacts.json';
import textDataAboutFirm from '@/constants/json/about-firm.json'
import iconSpoiler from '../../../public/images/services/icon_spoiler_blue.svg';
import Image from 'next/image';

export const FAQ = () => {
    const quantityOfSection = 6;
    const firstSection = 0;
    const secondSection = 1;
    const thirdSection = 2;
    const fourthSection = 3;
    const fifthSection = 4;
    const sixthSection = 5;
    const [showSpoiler, setShowSpoiler] = useState(Array(quantityOfSection).fill(true));

    return (
        <div className={classNames(style.section, 'container')}>
            <h2 className={style.title}>Ответы на часто задаваемые вопросы</h2>
            <div className={style.wrapper}>
                <div className={style.content}>
                    <div
                        className={style.list_header}
                        onClick={() => setShowSpoiler(showSpoiler.map((element, i) => i === firstSection ? !element : element))}
                        role='presentation'
                    >
                        <span><Image src={textFAQ.advantage.img} alt='pluses' width={40} height={40}/></span>
                        <h4 className={style.title}>{textFAQ.advantage.title}</h4>
                        <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !showSpoiler[firstSection]})} width={12} height={7}/></span>
                    </div>
                    <ul
                        className={classNames(style.list_ul, {[style.list_hidden] : showSpoiler[firstSection]})}
                    >
                        {textFAQ.advantage.list.map((el, ind) => (
                            <li key={`advantage-${ind}`} className={style.list_li}>
                                {/* <h4 className={style.list_title}>{el.head}</h4> */}
                                {/* <p className={style.list_desc}>{el.head} {el.desc}</p> */}
                                <p className={style.list_desc}><strong>{el.head}</strong> {el.desc}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={style.content}>
                    <div
                        className={style.list_header}
                        onClick={() => setShowSpoiler(showSpoiler.map((element, i) => i === secondSection ? !element : element))}
                        role='presentation'
                    >
                        <span><Image src={textFAQ.callmaster.img} alt='call to master' width={40} height={40}/></span>
                        <h4 className={style.title}>{textFAQ.callmaster.title}</h4>
                        <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !showSpoiler[secondSection]})} width={12} height={7}/></span>
                    </div>
                    <ol
                        className={classNames(style.list_ol, {[style.list_hidden] : showSpoiler[secondSection]})}
                    >
                        <p>{textFAQ.callmaster.firstStep}</p>
                        {textFAQ.callmaster.secondStep.map((el, ind) => (
                            <li key={`advantage-${ind}`} className={classNames(style.list_li, style.list_ol_li)}>
                                <p className={style.list_desc}><strong>{el.strong}</strong>{el.basic}</p>
                            </li>
                        ))}
                        <p>{textFAQ.callmaster.thirdStep}</p>
                    </ol>
                </div>
                <div className={style.content}>
                    <div
                        className={style.list_header}
                        onClick={() => setShowSpoiler(showSpoiler.map((element, i) => i === thirdSection ? !element : element))}
                        role='presentation'
                    >
                        <span><Image src={textFAQ.howlong.img} alt='time' width={40} height={40}/></span>
                        <h4 className={style.title}>{textFAQ.howlong.title}</h4>
                        <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !showSpoiler[thirdSection]})} width={12} height={7}/></span>
                    </div>
                    <ul
                        className={classNames(style.list_ul, {[style.list_hidden] : showSpoiler[thirdSection]})}
                    >
                        <p>{textFAQ.howlong.desc}</p>
                    </ul>
                </div>
                <div className={style.content}>
                    <div
                        className={style.list_header}
                        onClick={() => setShowSpoiler(showSpoiler.map((element, i) => i === fourthSection ? !element : element))}
                        role='presentation'
                    >
                        <span><Image src={textFAQ.warranty.img} alt='time' width={40} height={40}/></span>
                        <h4 className={style.title}>{textFAQ.warranty.title}</h4>
                        <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !showSpoiler[fourthSection]})} width={12} height={7}/></span>
                    </div>
                    <ul
                        className={classNames(style.list_ul, {[style.list_hidden] : showSpoiler[fourthSection]})}
                    >
                        <p>{textFAQ.warranty.desc}</p>
                    </ul>
                </div>
                <div className={style.content}>
                    <div
                        className={style.list_header}
                        onClick={() => setShowSpoiler(showSpoiler.map((element, i) => i === fifthSection ? !element : element))}
                        role='presentation'
                    >
                        <span><Image src={textFAQ.brends.img} alt='rare' width={40} height={40}/></span>
                        <h4 className={style.title}>{textFAQ.brends.title}</h4>
                        <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !showSpoiler[fifthSection]})} width={12} height={7}/></span>
                    </div>
                    <ul
                        className={classNames(style.list_ul, {[style.list_hidden] : showSpoiler[fifthSection]})}
                    >
                        <p>{textFAQ.brends.firstStep} техники {textFAQ.brends.secondStep}</p>
                        {textFAQ.brends.brendList.map((el, ind) => (
                            <li key={`advantage-${ind}`} className={style.list_li}>
                                <p className={style.list_desc}>{el}</p>
                            </li>
                        ))}
                        <p>{textFAQ.brends.thirdStep}</p>
                    </ul>
                </div>
                <div className={style.content}>
                    <div
                        className={style.list_header}
                        onClick={() => setShowSpoiler(showSpoiler.map((element, i) => i === sixthSection ? !element : element))}
                        role='presentation'
                    >
                        <span><Image src={textFAQ.contacts.img} alt='contacts' width={40} height={40}/></span>
                        <h4 className={style.title}>{textFAQ.contacts.title}</h4>
                        <span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !showSpoiler[sixthSection]})} width={12} height={7}/></span>
                    </div>
                    <ul
                        className={classNames(style.list_ul, {[style.list_hidden] : showSpoiler[sixthSection]})}
                    >
                        <p>{textFAQ.contacts.firstStep}</p>
                        {textDataAboutFirm.phoneImg.map((el, ind) => <a href={`tel:${el}`} key={ind}>{el}</a>)}
                        <p>{textFAQ.contacts.secondStep}</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}