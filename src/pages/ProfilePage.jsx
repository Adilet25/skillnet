import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Профиль пользователя {id}</h1>
      {/* Здесь можешь делать запрос по `id` для получения данных о пользователе */}
    </div>
  );
};

export default ProfilePage;
