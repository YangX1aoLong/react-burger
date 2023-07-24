import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";
import { Link } from "react-router-dom";
const Login = () => {
  const onIconClick = () => {
    console.log("iconClick");
  };
  return (
    <div className={`${style.loginBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">Вход</p>
      <div className="mt-6">
        <Input
          //   type={"text"}
          placeholder="E-mail"
          //   onChange={(e) => setValue(e.target.value)}
          //   value={value}
          //   name={"name"}
          //   error={false}
          icon="none"
          //   ref={inputRef}
          //   onIconClick={onIconClick}
          //   errorText={"Ошибка"}
          //   size={"default"}
          //   extraClass="ml-1"
        />
      </div>
      <div className="mt-6">
        <Input
          placeholder="Пароль"
          icon={"HideIcon"}
          onIconClick={onIconClick}
        />
      </div>
      <div className={`${style.buttonBox} mt-6`}>
        <Button>Войти</Button>
      </div>
      <div className={`${style.containerLink} mt-28`}>
        <p className={`ml-10 textDarkGrey text text_type_main-default`}>
          Вы - новый пользователь?
        </p>
        <Link
          to="/register"
          className="ml-2 textLink text text_type_main-default"
        >
          Зарегистрироваться
        </Link>
      </div>
      <div className={`${style.containerLink} mt-4`}>
        <p className="ml-20 textDarkGrey text text_type_main-default">
          Забыли пароль?
        </p>
        <Link
          to="/forgot-password"
          className="ml-2 textLink text text_type_main-default"
        >
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
};
export default Login;
