import { trainers } from "../../data";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Keyboard, Scrollbar, Navigation } from "swiper/modules";
import "./AppTrainers.css";

export default function AppTrainers() {
  const [modal, setModal] = useState(false);
  const [activeTrainer, setActiveTrainer] = useState(null);

  const handleOpenModal = (trainer) => {
    setActiveTrainer(trainer);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setActiveTrainer(null);
  };

  return (
    <section className="trainers">
      <div className="trainers-container">
        <div className="trainers-title">Профессиональные тренеры</div>
        <div className="trainers-list">
          <Swiper
            slidesPerView={1.5}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            scrollbar={true}
            navigation={true}
            loop={true}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="mySwiper"
          >
            {trainers.map((trainer) => (
              <SwiperSlide key={trainer.id} {...trainer}>
                <img
                  className="trainer-photo"
                  src={trainer.photo}
                  alt="тренер"
                />
                <div className="trainer-name">{trainer.name}</div>
                <div className="trainer-post">{trainer.post}</div>
                <button
                  className="details-btn"
                  onClick={() => handleOpenModal(trainer)}
                >
                  Подробнее
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <Modal open={modal}>
            {activeTrainer && (
              <>
                <img
                  className="modal-photo"
                  src={activeTrainer.photo}
                  alt="тренер"
                />
                <div className="modal-main-info">
                  <div className="modal-name">{activeTrainer.name}</div>
                  <div className="modal-links">
                    <img src="imgs/Facebook.svg" alt="facebook" />
                    <img src="imgs/Instagram.svg" alt="instagram" />
                  </div>
                </div>
                <div className="model-tabs">
                  
                </div>
                
                <button onClick={handleCloseModal}>Закрыть</button>
              </>
            )}
          </Modal>
        </div>
      </div>
    </section>
  );
}
