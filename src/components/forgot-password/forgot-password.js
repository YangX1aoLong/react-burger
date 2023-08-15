import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getForgotPassword } from "../../services/actions/forgot-password";
import { useDispatch } from "react-redux";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const restorePassword = () => {
    if (email !== "") {
      dispatch(getForgotPassword(email)).then((e) => {
        if (e.payload?.success) navigate("/reset-password");
        else alert(e.payload?.message);
      });
    }
  };
  return (
    <div className={`${style.forgotPasswordBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">
        Восстановление пароля
      </p>
      <form className="mt-6">
        <Input
          placeholder="Укажите e-mail"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <div className={`${style.buttonBox} mt-6`}>
        <Button htmlType="button" onClick={restorePassword}>
          Восстановить
        </Button>
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
export default ForgotPassword;
