import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { Link, useNavigate } from "react-router-dom";
const ForgotPassword = () => {
    const navigate = useNavigate();
    const restorePassword = () =>{
        navigate("/reset-password");
    }
  return (
    <div className={`${style.forgotPasswordBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">Восстановление пароля</p>
      <div className="mt-6">
        <Input placeholder="Укажите e-mail" />
      </div>

      <div className={`${style.buttonBox} mt-6`}>
        <Button onClick={restorePassword}>Восстановить</Button>
      </div>

      <div className={`${style.containerLink} mt-28`}>
        <p className="textDarkGrey text text_type_main-default">
          Вспомнили пароль?
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
export default ForgotPassword;