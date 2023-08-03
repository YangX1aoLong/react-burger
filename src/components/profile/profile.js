import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
const Profile = () => {
  return (
    <div>
      <div className="mt-6">
        <Input
          placeholder="Имя"
          icon="EditIcon"
          value="Имя"
          onChange={(e) => (e.target.value)}
        />
      </div>
      <div className="mt-6">
        <Input
          placeholder="Логин"
          icon="EditIcon"
          value="Логин"
          onChange={(e) => (e.target.value)}
        />
      </div>
      <div className="mt-6">
        <Input
          placeholder="Пароль"
          icon="EditIcon"
          value="Пароль"
          onChange={(e) => (e.target.value)}
        />
      </div>
    </div>
  );
};
export default Profile;
