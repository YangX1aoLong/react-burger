import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getForgotPassword } from "../../services/actions/forgot-password";
import { shallowEqual } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [flag, setFlag] = useState(false);
  const password = useAppSelector((store) => ({ password: store.forgotPassword }), shallowEqual);
  useEffect(() => {
    if (password?.password?.data?.success && flag) { setFlag(false); navigate("/reset-password"); }
  }, [password])
  const restorePassword = () => {
    if (email !== "") {
      setFlag(true);
      dispatch(getForgotPassword(email));
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
