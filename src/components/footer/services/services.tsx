import { Fragment, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import style from './services.module.scss';
import textInfo from '../../../constants/json/footer-contacts.json';
import iconSpoiler from '../../../../public/images/services/icon_spoiler_white.svg';

export const Services = () => {
    const [showSpoiler, setShowSpoiler] = useState(Array(textInfo.services.length).fill(false));

    return (
        <Fragment>
            <div className={classNames(style.service, style.service_desktop)}>
                {textInfo.services.map((el, ind) => (
                    <ul key={`service-head-${ind}`} className={style.service_ul}>
                        <p className={style.service_name}>{el.name}</p>
                        {el.list.map((service, index) => (
                            <li key={`service-${index}`} className={style.service_li}><a href={service.link}>{service.name}</a></li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className={classNames(style.service, style.service_mobile)}>
                {textInfo.services.map((el, ind) => (
                    <ul
                        key={`service-head-${ind}`}
                        className={style.service_ul}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setShowSpoiler(showSpoiler.map((element, i) => i === ind ? !element : element))
                        }}
                    >
                        <p className={style.service_name}>
                            {el.name}
                            <span><Image src={iconSpoiler} alt='spoiler'/></span>
                        </p>
                        {showSpoiler[ind] && el.list.map((service, index) => (
                            <li key={`service-${index}`} className={style.service_li}><a href={service.link}>{service.name}</a></li>
                        ))}
                    </ul>
                ))}
            </div>
        </Fragment>
    )
};