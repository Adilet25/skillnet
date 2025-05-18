import React from "react";
import { FRIENDS_DB } from "../../../../helpers/data";
import chaticon from "../../../../assets/chaticon.svg";

import "./ProfileCard.css";
import InterestCard from "../../InterestCard/InterestCard";
import { useState } from "react";

const ProfileCard = ({ id }) => {
  const user = FRIENDS_DB.find((item) => item.id === id);
  const [btnStatus, setBtnStatus] = useState(false);
  const handleAddFriend = (id) => {
    console.log(`Добавлен в друзья: ${id}`);
    setBtnStatus(!btnStatus);
  };
  const handleOpenChat = (username) => {
    const tgLink = `https://t.me/${username}`;
    window.open(tgLink, "_blank");
  };
  const interestsArray =
    typeof user.interests === "string"
      ? user.interests.split(", ").map((item) => item.trim())
      : user.interests;

  return (
    <>
      {user ? (
        <div key={user.id} className="prCard">
          <div className="prCard_first">
            <img src={user.img} alt="error" />
            <div className="prCard_info">
              <h3>
                {user.firstName} {user.lastName}
              </h3>
              <p>{user.desc}</p>
            </div>
          </div>
          <div className="prCard_scn">
            <h4>Интересы и направления пользователя</h4>
            <div className="prCard_interest">
              {interestsArray.length > 0 ? (
                interestsArray.map((item, index) => (
                  <div key={index} style={{ margin: "0.5rem" }}>
                    <InterestCard name={item} />
                  </div>
                ))
              ) : (
                <p>Интересы не указаны</p>
              )}
            </div>
          </div>
          <div className="prCard_thr">
            <div
              className={`prCard_btn1 ${
                btnStatus ? "clickedbtn1" : "unclickedbtn1"
              }`}
              onClick={() => handleAddFriend()}>
              {btnStatus ? <>Отозвать запрос</> : <>Добавить в друзья</>}
            </div>
            <div
              className="prCard_btn2"
              onClick={() => handleOpenChat(user.username)}>
              <img src={chaticon} alt="error" />
            </div>
          </div>
        </div>
      ) : (
        <p>Пользователь не найден</p>
      )}
    </>
  );
};

export default ProfileCard;
