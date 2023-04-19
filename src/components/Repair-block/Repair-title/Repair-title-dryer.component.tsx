import style from "./repair-title-dryer.module.scss";
import textData from "@/constants/json/repaire.json";
import { useState } from "react";
import { Modal } from "@/components/modal";

const RepairTitleDryer = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const { title, info, image, imageAlt } = textData["title-block"].dryer;
  return (
    <div className={style.title}>
       {isShowingModal && (
        <Modal
          isShowingModal={isShowingModal}
          setIsShowingModal={setIsShowingModal}
          typeOfModal="request"
        />
      )}
      <h2>РЕМОНТ СУШИЛЬНЫХ МАШИН</h2>
      <p>
        Компания «РемТехСервис» — «скорая помощь» для сушильных машин в Минске и Минском районе!
      </p>
      <div className={style.info}>
        <ul>
          <li>
            <p>
              <b>
                Ремонтируем барабанные сушильные машины и сушильные шкафы на
                дому.
              </b>{" "}
              Только фирменные запчасти, опытные мастера, гарантия до 24
              месяцев.
            </p>
          </li>
          <li>
            <p>
              <b>Удобный и быстрый сервис.</b> Обслуживаем технику дома у
              клиента в Минске и Минском районе. У вас коттедж или загородный дом в области? — Обращайтесь.
            </p>
          </li>
          <li>
            <p>
              <b>Ремонт в день вызова, если заявка подана до обеда.</b> По
              вечерней заявке мастер приедет на следующий день. Хотите выбрать
              другую дату? Назовите её диспетчеру или напишите в <span className={style.click_form
              }
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsShowingModal(!isShowingModal);
              }}
              >форме заказа</span>.
            </p>
          </li>
          <li>
            <p>
              <b>Фирменный ремонт за 1 визит!</b> Мастер выполняет всю работу за
              один приезд, и вы получаете работающую сушилку через 1-2 часа. В
              редких случаях при сложной поломке модуля управления, ремонт
              проходит в два этапа: модуль демонтируется и вывозится в
              мастерскую, затем, через 1-2 дня исправный блок управления
              возвращается обратно.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RepairTitleDryer;
