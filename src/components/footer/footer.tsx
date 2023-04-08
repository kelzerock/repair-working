import style from './footer.module.scss';
import textInfo from '../../constants/json/footer-contacts.json';

export const Footer = () => (
    <footer className={style.footer}>
        <div className={style.firstblock}>
            <div className={style.social}>
                <ul>
                    {textInfo.social.map((el, ind) => 
                        <li key={ind}>
                            <a href={el.link}>{el.name}</a>
                        </li>
                    )}
                </ul>
            </div>
            <div className={style.contacts}>
                <div className={style.contacts_container}>
                    <p>{textInfo.contacts.time}</p>
                </div>
                <div className={style.contacts_container}>
                    {textInfo.contacts.phone.map((el, ind) => <p key={ind}>{el}</p>)}
                </div>
                <div className={style.contacts_container}>
                    <p>{textInfo.contacts.email}</p>
                </div>
                <div className={style.contacts_container}>
                    <p>{textInfo.contacts.address}</p>
                </div>
            </div>
        </div>
        <div className={style.secondblock}>
            <div className={style.customer}>
                <p>{textInfo.customer}</p>
            </div>
            <div className={style.service}>
                {textInfo.services.map((el, ind) => (
                    <ul key={`service-head-${ind}`} className={style.service_ul}>
                        <p className={style.service_name}>{el.name}</p>
                        {el.list.map((service, index) => (
                            <li key={`service-${index}`} className={style.service_li}><a href={service.link}>{service.name}</a></li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    </footer>
);