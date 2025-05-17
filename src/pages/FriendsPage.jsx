import React, { useState } from "react";
import SearchBar from "../components/Templates/SearchBar/SearchBar";
import friendimg from "../assets/friendsimg/friendimg.png";
import FriendCard from "../components/Templates/Cards/FriendCard/FriendCard";
import "../styles/color-variables.css";
import ProfileCard from "../components/Templates/Cards/ProfileCard/ProfileCard";

const FRIENDS_DB = [
  {
    id: 1,
    img: friendimg,
    username: "kutzhokg",
    name: "Кутманшер Эрмеков",
    desc: "Будущий data scientist. Люблю разбираться в числах, участвовать в хакатонахРазрабатываю мобильные приложения, увлекаюсь баскетболом и организую",
    interest: [
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
    ],
  },
  {
    id: 2,
    img: friendimg,
    username: "kutzhokg",
    name: "Давлет Азимов",
    desc: "Будущий data scientist. Люблю разбираться в числах, участвовать в хакатонахРазрабатываю мобильные приложения, увлекаюсь баскетболом и организую",
    interest: [
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
    ],
  },
  {
    id: 3,
    img: friendimg,
    username: "kutzhokg",
    name: "Согдиана",
    desc: "Будущий data scientist. Люблю разбираться в числах, участвовать в хакатонахРазрабатываю мобильные приложения, увлекаюсь баскетболом и организую",
    interest: [
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
      "web",
      "book",
      "pro",
      "coding",
      "cycling",
      "running",
    ],
  },
];

const FriendsPage = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isRequest, setIsRequest] = useState(true);

  return (
    <div className="mainContainer">
      <SearchBar
        inputText={"Введите имя, фамилию или интерес"}
        data={FRIENDS_DB}
        renderItem={(friend) => (
          <FriendCard
            key={friend.id}
            img={friend.img}
            name={friend.name}
            desc={friend.desc}
          />
        )}
      />
      {userProfile ? (
        <div>
          <ProfileCard id={userProfile} />
        </div>
      ) : (
        <></>
      )}
      {isRequest ? (
        <div>
          <h4 style={{ margin: "1rem 0" }}>Входящие запросы</h4>
          <FriendCard
            key={1}
            img={friendimg}
            name="dawdwadawd"
            desc="dwadawdawdwaaw"
            id={1}
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "1rem",
              alignItems: "center",
              margin: "1rem 0",
            }}>
            <div
              style={{
                backgroundColor: "var(--colorGreen)",
                borderRadius: "4px",
                color: "white",
                height: "2.5rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => setIsRequest(false)}>
              Принять
            </div>
            <div
              style={{
                backgroundColor: "var(--colorRed)",
                borderRadius: "4px",
                fontSize: "1rem",
                color: "white",
                height: "2.5rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={() => setIsRequest(false)}>
              Отклонить
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div>
        <h4>Ваши друзья</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "1rem",
          }}>
          {FRIENDS_DB.map((friend) => (
            <FriendCard
              key={friend.id}
              img={friend.img}
              name={friend.name}
              desc={friend.desc}
              id={friend.id}
              setUserProfile={setUserProfile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export { FRIENDS_DB };
export default FriendsPage;
