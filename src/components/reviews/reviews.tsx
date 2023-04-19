import classNames from "classnames";
import style from "./reviews.module.scss";
import textReview from "../../constants/json/reviews.json";
import { ReviewCard } from "./review-card";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "../modal";

export const Reviews = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  
  return (
    <div className={classNames(style.section, "container")}>
       {isShowingModal && (
        <Modal
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          typeOfModal="review"
        />
      )}
      {/* <h4 className={style.title}>Новые отзывы</h4> */}
      <div className={style.wrapper}>
        <div className={style.score_wrapper}>
          <div className={style.score_div}>
            <p className={style.score_num}>{textReview.total.percent}%</p>
            <p className={style.score_text}>положительных отзывов</p>
          </div>
        </div>
        <div className={style.feedback_wrapper}>
          <Link href={"#"} className={classNames("link", style.link_btn)}>
            <button className={style.btn}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsShowingModal(!isShowingModal);
            }}
            >Отправить отзыв</button>
          </Link>
          <Link
            href={"/reviews"}
            className={classNames("link", style.link_btn)}
          >
            <button className={style.btn}>Перейти в раздел</button>
          </Link>
        </div>
      </div>
      {/* <div className={style.wrapper}>
                    <textarea
                        className={style.textarea}
                        placeholder='Поделитесь вашим мнением о работе с нашей компанией'
                        // onChange={(e) => setModalText(e.target.value)}
                    />
                </div>
            </div> */}
    </div>
  );
};
