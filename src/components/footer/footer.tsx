import style from './footer.module.scss';
import textInfo from '../../constants/json/footer-contacts.json';
import Image from 'next/image';
import timeIcon from '../../assets/svg/clock-icon.svg';
import phoneIcon from '../../assets/svg/ringing-phone-outline-icon.svg';
import emailIcon from '../../assets/svg/email-icon.svg';
import locationIcon from '../../assets/svg/map-pin-point-icon.svg';
import { Services } from './services';
import textAboutFirm from '@/constants/json/about-firm.json'

export const Footer = () => (
    <footer className={style.footer}>
        <div className='container'>
            <div className={style.firstblock}>
                <div className={style.social}>
                    <ul>
                        {textInfo.social.map((el, ind) => 
                            <li key={ind}>
                                <a href={el.link}>
                                    <Image src={el.image} alt={el.name} width={40} height={40} className={style.icon}/>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={style.contacts}>
                    <div className={style.contacts_container}>
                        <Image src={timeIcon} alt='work time' height={24} width={24} className={style.icon}/>
                        <p>{textInfo.contacts.time}</p>
                    </div>
                    <div className={style.contacts_container}>
                        <Image src={phoneIcon} alt='phone number' height={24} width={24} className={style.icon}/>
                        <div className={style.phones}>
                            {textAboutFirm.phoneImg.map((el, ind) => <p key={ind}>{el}</p>)}
                        </div>
                    </div>
                    <div className={style.contacts_container}>
                        <Image src={emailIcon} alt='email' height={24} width={24} className={style.icon}/>
                        <a href={`mailto:${textInfo.contacts.email}`}>{textInfo.contacts.email}</a>
                    </div>
                    {/* <div className={style.contacts_container}>
                        <Image src={locationIcon} alt='address' height={24} width={24} className={style.icon}/>
                        <p>{textInfo.contacts.address}</p>
                    </div> */}
                </div>
            </div>
            <div className={style.secondblock}>
                <div className={style.customer}>
                    <p>{textInfo.customer}</p>
                </div>
                <Services />
            </div>
        </div>
    </footer>
);