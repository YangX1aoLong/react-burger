import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./registration.module.css";
import { Link } from "react-router-dom";
const Registration = () => {
  return (
    <div className={`${style.registrationBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">
        Регистрация
      </p>
      <div className="mt-6">
        <Input placeholder="Имя" icon="none" />
      </div>
      <div className="mt-6">
        <Input placeholder="E-mail" icon="none" />
      </div>
      <div className="mt-6">
        <Input placeholder="Пароль" icon={"HideIcon"} />
      </div>
      <div className={`${style.buttonBox} mt-6`}>
        <Button>Зарегистрироваться</Button>
      </div>
      <div className={`${style.containerLink} mt-28`}>
        <p className="textDarkGrey text text_type_main-default">
          Уже зарегистрированы?
        </p>
        <Link
          to="/login"
          className="ml-2 textLink text text_type_main-default"
        >
          Войти
        </Link>
      </div>
    </div>
  );
};
export default Registration;
