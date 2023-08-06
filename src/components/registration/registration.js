import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { hidePassword, showPassword } from "../../utils/input-settings";
import { useDispatch } from "react-redux";
import { getRegistration } from "../../services/actions/registration";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordSetting, setPasswordSetting] = useState(hidePassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onIconClick = () => {
    if (passwordSetting.icon === "HideIcon") {
      setPasswordSetting(showPassword);
    } else setPasswordSetting(hidePassword);
  };
  const onRegistration = () => {
    dispatch(getRegistration(email, password, name));
    navigate("/");
  };
  return (
    <div className={`${style.registrationBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">
        Регистрация
      </p>
      <form className="mt-6">
        <Input
          placeholder="Имя"
          icon="none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <form className="mt-6">
        <Input
          placeholder="E-mail"
          icon="none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <form className="mt-6">
        <Input
          placeholder="Пароль"
          type={passwordSetting.type}
          icon={passwordSetting.icon}
          onIconClick={onIconClick}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </form>
      <div className={`${style.buttonBox} mt-6`}>
        <Button htmlType="button" onClick={onRegistration}>
          Зарегистрироваться
        </Button>
      </div>
      <div className={`${style.containerLink} mt-28`}>
        <p className="textDarkGrey text text_type_main-default">
          Уже зарегистрированы?
        </p>
        <Link to="/login" className="ml-2 textLink text text_type_main-default">
          Войти
        </Link>
      </div>
    </div>
  );
};
export default Registration;
