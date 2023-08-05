import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
const Profile = (props) => {
  const [name,setName] = useState(props.name);
  const [email,setEmail] = useState(props.email);
  const [password,setPassword] = useState("")
  return (
    <div>
      <div className="mt-6">
        <Input
          placeholder="Имя"
          icon="EditIcon"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <Input
          placeholder="Логин"
          icon="EditIcon"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mt-6">
        <Input
          placeholder="Пароль"
          icon="EditIcon"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Profile;
