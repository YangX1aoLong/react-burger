import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  const onIconClick = () =>{
    console.log('click')
  }
  return (
    <div className={`${style.forgotPasswordBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">
        Восстановление пароля
      </p>
      <div className="mt-6">
        <Input
          placeholder="Введите новый пароль"
          icon={"HideIcon"}
          onIconClick={onIconClick}
        />
      </div>
      <div className="mt-6">
        <Input placeholder="Введите код из письма" />
      </div>

      <div className={`${style.buttonBox} mt-6`}>
        <Button>Сохранить</Button>
      </div>

      <div className={`${style.containerLink} mt-28`}>
        <p className="textDarkGrey text text_type_main-default">
          Вспомнили пароль?
        </p>
        <Link to="/login" className="ml-2 textLink text text_type_main-default">
          Войти
        </Link>
      </div>
    </div>
  );
};
export default ResetPassword;
