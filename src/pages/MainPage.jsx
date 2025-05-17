import React, { useRef } from "react";
import MainCard from "../components/Templates/Cards/MainCard/MainCard";
import oshka from "../assets/companyLogos/oshka.png";
import mainimg from "../assets/mainimg.png";

import "../styles/MainPage.css";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const internships = [
  {
    logo: oshka,
    title: "Мобильный оператор О!",
    description:
      "Помогай продвигать IT-продукт через соцсети, участвуя в создании контента и рекламных кампаниях.",
    buttonText: "Подробнее",
    color: "var(--colorViol)",
  },
  {
    logo: oshka,
    title: "Компания XYZ",
    description:
      "Стань частью команды маркетологов и помогай развивать стратегии продвижения.",
    buttonText: "Узнать больше",
    color: "var(--colorViol)",
  },
  {
    logo: oshka,
    title: "TechHub",
    description:
      "Работай над проектами с использованием новейших технологий и инструментов.",
    buttonText: "Присоединиться",
    color: "var(--colorViol)",
  },
  {
    logo: oshka,
    title: "Startup Inc.",
    description: "Помощь в создании контента и продвижении стартапа.",
    buttonText: "Подробнее",
    color: "var(--colorViol)",
  },
];
const courses = [
  {
    logo: oshka,
    title: "Мобильный оператор О!",
    description:
      "Помогай продвигать IT-продукт через соцсети, участвуя в создании контента и рекламных кампаниях.",
    buttonText: "Подробнее",
    color: "var(--colorDarkViol)",
  },
  {
    logo: oshka,
    title: "Компания XYZ",
    description:
      "Стань частью команды маркетологов и помогай развивать стратегии продвижения.",
    buttonText: "Узнать больше",
    color: "var(--colorDarkViol)",
  },
  {
    logo: oshka,
    title: "TechHub",
    description:
      "Работай над проектами с использованием новейших технологий и инструментов.",
    buttonText: "Присоединиться",
    color: "var(--colorDarkViol)",
  },
  {
    logo: oshka,
    title: "Startup Inc.",
    description: "Помощь в создании контента и продвижении стартапа.",
    buttonText: "Подробнее",
    color: "var(--colorDarkViol)",
  },
];
const students = [
  {
    logo: oshka,
    title: "Мобильный оператор О!",
    description:
      "Помогай продвигать IT-продукт через соцсети, участвуя в создании контента и рекламных кампаниях.",
    buttonText: "Подробнее",
    color: "var(--colorMain)",
  },
  {
    logo: oshka,
    title: "Компания XYZ",
    description:
      "Стань частью команды маркетологов и помогай развивать стратегии продвижения.",
    buttonText: "Узнать больше",
    color: "var(--colorMain)",
  },
  {
    logo: oshka,
    title: "TechHub",
    description:
      "Работай над проектами с использованием новейших технологий и инструментов.",
    buttonText: "Присоединиться",
    color: "var(--colorMain)",
  },
  {
    logo: oshka,
    title: "Startup Inc.",
    description: "Помощь в создании контента и продвижении стартапа.",
    buttonText: "Подробнее",
    color: "var(--colorMain)",
  },
];
const MainPage = () => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const swiperRef2 = useRef(null);
  const handlePrev2 = () => {
    swiperRef2.current?.slidePrev();
  };
  const handleNext2 = () => {
    swiperRef2.current?.slideNext();
  };

  const swiperRef3 = useRef(null);
  const handlePrev3 = () => {
    swiperRef3.current?.slidePrev();
  };
  const handleNext3 = () => {
    swiperRef3.current?.slideNext();
  };
  return (
    <div className="mainContainer">
      <div className="adBlock">
        <div className="adBlock_info">
          <h2>Добро пожаловать в SkillNet.kg!</h2>
          <p>
            Находи учебных партнёров, стажировки и волонтёрские проекты.
            Прокачивай свой опыт и достигай новых целей вместе с нами!
          </p>
        </div>
        <div className="adBlock_img">
          <img src={mainimg} alt="Main" />
        </div>
      </div>

      <div className="mainTabs mainIntern">
        <h2>Стажировки</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          style={{ maxWidth: "100%", overflow: "hidden" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}>
          {internships.map((internship, index) => (
            <SwiperSlide style={{ maxWidth: "100%" }} key={index}>
              <MainCard
                logo={internship.logo}
                title={internship.title}
                description={internship.description}
                buttonText={internship.buttonText}
                color={internship.color}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation">
          <button
            className="swiper-btn prev-btn"
            style={{ backgroundColor: "var(--colorViol)" }}
            onClick={handlePrev}>
            ❮
          </button>
          <button
            className="swiper-btn next-btn"
            style={{ backgroundColor: "var(--colorViol)" }}
            onClick={handleNext}>
            ❯
          </button>
        </div>
      </div>
      <div className="mainTabs mainCourse">
        <h2>Курсы и программы</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef2.current = swiper)}
          loop={true}
          style={{ maxWidth: "100%", overflow: "hidden" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}>
          {courses.map((internship, index) => (
            <SwiperSlide style={{ maxWidth: "100%" }} key={index}>
              <MainCard
                logo={internship.logo}
                title={internship.title}
                description={internship.description}
                buttonText={internship.buttonText}
                color={internship.color}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation">
          <button
            className="swiper-btn prev-btn"
            style={{ backgroundColor: "var(--colorDarkViol)" }}
            onClick={handlePrev2}>
            ❮
          </button>
          <button
            className="swiper-btn next-btn"
            style={{ backgroundColor: "var(--colorDarkViol)" }}
            onClick={handleNext2}>
            ❯
          </button>
        </div>
      </div>
      <div className="mainTabs mainStudent">
        <h2>Студенты</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          onSwiper={(swiper) => (swiperRef3.current = swiper)}
          loop={true}
          style={{ maxWidth: "100%", overflow: "hidden" }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}>
          {students.map((internship, index) => (
            <SwiperSlide style={{ maxWidth: "100%" }} key={index}>
              <MainCard
                logo={internship.logo}
                title={internship.title}
                description={internship.description}
                buttonText={internship.buttonText}
                color={internship.color}
                rounded
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation">
          <button
            className="swiper-btn prev-btn"
            style={{ backgroundColor: "var(--colorMain)" }}
            onClick={handlePrev3}>
            ❮
          </button>
          <button
            className="swiper-btn next-btn"
            style={{ backgroundColor: "var(--colorMain)" }}
            onClick={handleNext3}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
