import { useParams } from "react-router-dom";
import "../styles/ProfilePage.css";
import { FRIENDS_DB, INITIAL_DATA, ORG_DATA } from "../helpers/data";
import { options } from "../helpers/option";
import { useEffect, useState } from "react";
import CustomInput from "../components/Templates/Input/CustomInput";
import InterestCard from "../components/Templates/InterestCard/InterestCard";

const ProfilePage = () => {
  const { id } = useParams();
  const numericId = parseInt(id.replace(":", ""), 10);
  const [currentUser, setCurrentUser] = useState(null);
  const [arrInterest, setArrInterest] = useState([]);
  const [userDesc, setUserDesc] = useState("");

  function updateFields(fields) {}
  function updateFieldsOrg(fields) {}
  useEffect(() => {
    const foundUser = FRIENDS_DB.find((item) => item.id === numericId);
    setCurrentUser(foundUser);
    if (foundUser && foundUser.interests) {
      setArrInterest(
        foundUser.interests.split(", ").map((item) => item.trim())
      );
    }
    if (foundUser && foundUser.desc) {
      setUserDesc(foundUser.desc);
    }
  }, [numericId]);

  const handleInterestsChange = (selected) => {
    updateFields({ interests: selected });
  };

  const handleDeleteInterest = (interest) => {
    const updatedInterests = arrInterest.filter((item) => item !== interest);
    setArrInterest(updatedInterests);

    const updatedUser = {
      ...currentUser,
      interests: updatedInterests.join(", "),
    };

    setCurrentUser(updatedUser);
    updateFields({ interests: updatedUser.interests });
  };
  const editDesc = (e) => {
    setUserDesc(e.target.value);
  };

  return (
    <div className="mainContainer" style={{ marginTop: "2rem" }}>
      <div className="uspMain">
        <div className="uspMain_imgBlock">
          <img
            src={currentUser ? currentUser.img : null}
            alt="error"
            className="uspMain_img"
          />
        </div>
        <div className="uspInfo_block">
          <div className="uspInfo_blockMini">
            <div>
              <h3>Загрузить новую фотографию профиля</h3>
              <p style={{ color: "grey" }}>
                Только файлы с разрешением .png, .jpg, .webp
              </p>
            </div>
            <div className="uspInfo_btn">Загрузить</div>
          </div>
          <textarea
            className="uspInfo_desc"
            value={userDesc}
            onChange={editDesc}></textarea>
        </div>
      </div>
      <div className="uspInfo">
        <h3>Изменить информацию о пользователе</h3>
        <div className="uspInfo_inp">
          <CustomInput
            label="Имя"
            name="Имя"
            type="text"
            value={currentUser ? currentUser.firstName : null}
            required={true}
            onChange={updateFields}
            placeholder="Введите своё имя"
          />
          <CustomInput
            label="Фамилия"
            name="Фамилия"
            type="text"
            value={currentUser ? currentUser.lastName : null}
            required={true}
            onChange={updateFields}
            placeholder="Введите свою фамилию"
          />
          <CustomInput
            label="Пароль"
            name="Пароль"
            type="password"
            value={currentUser ? currentUser.password : null}
            required={true}
            onChange={updateFields}
            placeholder="Придумайте пароль"
          />
          <CustomInput
            label="Дата рождения"
            name="Дата рождения"
            type="date"
            value={currentUser ? currentUser.date : null}
            required={true}
            onChange={updateFields}
            placeholder="Выберите дату"
          />
          <CustomInput
            label="Ник в Telegram"
            name="Ник в Telegram"
            type="text"
            value={currentUser ? currentUser.username : null}
            required={true}
            onChange={updateFields}
            placeholder="Введите ник"
          />
          <CustomInput
            label="Учебное заведение"
            name="Учебное заведение"
            type="text"
            value={currentUser ? currentUser.education : null}
            required={true}
            onChange={updateFields}
            placeholder="Введите ваше учебное заведение"
          />
          <CustomInput
            label="Интересы и направления"
            type="select"
            name="interests"
            options={options}
            value={currentUser ? currentUser.interests : null}
            onChange={handleInterestsChange}
            multiple={true}
            placeholder="Выберите интересы"
            height="3rem"
          />
        </div>
        <div className="intMain">
          {currentUser &&
            arrInterest.map((item, index) => (
              <InterestCard
                key={index}
                name={item}
                isDelete
                onDelete={handleDeleteInterest}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
