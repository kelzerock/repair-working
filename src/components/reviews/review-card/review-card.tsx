import style from './review-card.module.scss';
import iconStar from '../../../../public/images/reviews/icon_star.svg';
import Image from 'next/image';

type ReviewCardType = {
    score: number,
    title: string,
    desc: string,
    author: string,
    date: string,
}

export const ReviewCard = ({
    score,
    title,
    desc,
    author,
    date    
}: ReviewCardType) => {

    const scoreStars = Array(score).fill(<Image src={iconStar} alt='star'/>);

    return (
        <div className={style.wrapper}>
            <div className={style.score}>
                {scoreStars}
            </div>
            <div className={style.content}>
                <h4 className={style.title}>{title}</h4>
                <p className={style.desc}>{desc}</p>
            </div>
            <div className={style.row}>
                <p className={style.author}>{author} | {date}</p>
            </div>
        </div>
    )
}