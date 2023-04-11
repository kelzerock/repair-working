import classNames from 'classnames';
import Image from 'next/image';
import style from './reviews.module.scss';
import textReview from '../../constants/json/reviews.json';
import { ReviewCard } from './review-card';
import iconArrow from '../../../public/images/services/icon_arrow_right.svg';

export const Reviews = () => {

    return (
        <div className={classNames(style.section, 'container')}>
            <h4 className={style.title}>Новые отзывы</h4>
            <div className={style.wrapper}>
                <div className={style.score_wrapper}>
                    <div className={style.score_div}>
                        <p className={style.score_num}>{textReview.total.percent}%</p>
                        <p className={style.score_text}>положительных отзывов</p>
                        <Image src={iconArrow} alt='arrow to right'/>
                    </div>
                    <div className={style.score_div_desc}>
                        <p className={style.score_desc}>{textReview.total.count} отзыва оставили клиенты</p>
                    </div>
                </div>
                <div className={style.reviews}>
                    {textReview.reviews.map((el, ind) => 
                        <ReviewCard key={`card-review-${ind}`} {...el}/>
                    )}
                </div>
            </div>
        </div>
    )
}