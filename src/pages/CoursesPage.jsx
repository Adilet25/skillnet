import React from "react";
import SearchBar from "../components/Templates/SearchBar/SearchBar";
import "../styles/color-variables.css";
import MainCard from "../components/Templates/Cards/MainCard/MainCard";
import oshka from "../assets/companyLogos/oshka.png";

const courses = [
  {
    logo: oshka,
    name: "Мобильный оператор О!",
    description:
      "Помогай продвигать IT-продукт через соцсети, участвуя в создании контента и рекламных кампаниях.",
    buttonText: "Подробнее",
    color: "var(--colorMain)",
  },
  {
    logo: oshka,
    name: "Компания XYZ",
    description:
      "Стань частью команды маркетологов и помогай развивать стратегии продвижения.",
    buttonText: "Узнать больше",
    color: "var(--colorMain)",
  },
  {
    logo: oshka,
    name: "TechHub",
    description:
      "Работай над проектами с использованием новейших технологий и инструментов.",
    buttonText: "Присоединиться",
    color: "var(--colorMain)",
  },
  {
    logo: oshka,
    name: "Startup Inc.",
    description: "Помощь в создании контента и продвижении стартапа.",
    buttonText: "Подробнее",
    color: "var(--colorMain)",
  },
];

const CoursesPage = () => {
  return (
    <div className="mainContainer">
      <SearchBar
        inputText={"Что вы хотите найти?"}
        data={courses}
        renderItem={(courses) => (
          <MainCard
            logo={courses.logo}
            title={courses.name}
            description={courses.description}
            buttonText={courses.buttonText}
            color={courses.color}
            hasBorder={false}
            width={"95%"}
          />
        )}
      />
      <div>
        <h4>Рекомандации</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}>
          {courses.map((courses) => (
            <MainCard
              logo={courses.logo}
              title={courses.name}
              description={courses.description}
              buttonText={courses.buttonText}
              color={courses.color}
              hasBorder={false}
              width={"95%"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoursesPage;
