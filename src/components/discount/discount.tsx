import classNames from 'classnames';
import style from './discount.module.scss';
import textDiscount from '../../constants/json/discount.json';

export const Discount = () => {
    return (
        <div className={classNames(style.section, 'container')}>
            <h2 className={style.section_title}>Скидки</h2>
            <div className={style.discount_wrapper}>
                {textDiscount.map((el, ind) => (
                    <div key={`discount-${ind}`} className={style.discount_card}>
                        <div className={style.text_wrapper}>
                            <p className={style.percent}>{el.percent}</p>
                            <p className={style.title}>{el.title}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className={style.comment}>* для получения скидки покажите мастеру подтверждающий документ. Скидки не суммируются.</p>
        </div>
    )
}