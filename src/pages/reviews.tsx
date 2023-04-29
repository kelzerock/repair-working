import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './reviews.module.scss';
import textReview from '../constants/json/reviews.json';
import iconArrow from '../../public/images/reviews/icon_like.svg';
import iconCrumbs from '../../public/images/reviews/icon_crumbs.svg';
import iconSpoiler from '../../public/images/services/icon_spoiler_blue.svg';
import classNames from 'classnames';
import { ReviewCardLand } from '@/components/reviews/review-card-land';
import { Modal } from '@/components/modal';
import Head from 'next/head';

const ReviewPage = () => {
	const [isShowing, setIsShowing] = useState(false);
	const [isShowingModal, setIsShowingModal] = useState(false);

	return (
		<>
			<Head>
				<title>
					Отзывы на услуги сервис-центра РемТехСервис
				</title>
			</Head>
			<div className={classNames(style.section, 'container')}>
				{isShowingModal && <Modal isShowingModal={isShowingModal} setIsShowingModal={setIsShowingModal} typeOfModal='review'/>}
				<div className={style.crumbs_wrapper}>
					<Link href={'/'}>Главная</Link>
					<Image src={iconCrumbs} alt='crumbs' className={style.crumbs_icon}/>
					<p>Отзывы</p>
				</div>
				<h1 className={style.section_title}>отзывы</h1>
				<div className={style.head_wrapper}>
					<div className={style.head_desc}>
						<p className={style.head_desc_text}>{textReview.total.desc}</p>
						<p className={style.head_desc_text_add}>Если вы не удовлетворены работой мастера, напишите претензию на <a href={`mailto:${textReview.total.email}`}>{textReview.total.email}</a>. В письме укажите адрес проведённого ремонта для идентификации заявки.</p>
					</div>
					<div className={style.score_wrapper}>
						<div className={style.score_div}>
							<Image src={iconArrow} alt='arrow to right'/>
							<p className={style.score_num}>{textReview.total.percent}%</p>
							<p className={style.score_text}>положительных отзывов</p>
						</div>
					</div>
				</div>
				<button
					className={style.btn}
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						setIsShowingModal(true);
						}
					}
				>Оставить отзыв</button>
				<div
					className={style.list_header}
					onClick={() => {setIsShowing(!isShowing); }}
					role='presentation'
				>
					<h3 className={style.title}>Показать все отзывы</h3>
					<span><Image src={iconSpoiler} alt='spoiler' className={classNames({'rotate': !isShowing})}/></span>
				</div>
				<ul
					className={classNames(style.list_ul, {[style.list_hidden] : isShowing})}
				>
					{textReview.reviews.map((el, ind) => 
						<ReviewCardLand key={`card-review-${ind}`} {...el}/>
					)}
				</ul>
			</div>
		</>
	)
}

export default ReviewPage;
