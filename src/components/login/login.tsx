import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { shallowEqual } from "react-redux";
import { getLogin } from "../../services/actions/login";
import { TInputIcon, TInputType } from "../../types/socket";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setIntputType] = useState<TInputType>("password");
  const [inputIcon, setInputIcon] = useState<TInputIcon>("HideIcon");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const login = useAppSelector((store) => store.login, shallowEqual);
  const onIconClick = () => {
    if (inputIcon === "HideIcon") {
      setIntputType("text");
      setInputIcon("ShowIcon");
    } else {
      setIntputType("password");
      setInputIcon("HideIcon");
    }
  };
  const onLogin = () => {
    dispatch(getLogin(email, password));
  };
  useEffect(() => {
    if (login?.data?.success) navigate("/")
    else if (login?.error !== null && login?.isLoading === false) alert(login?.error?.message);
  }, [login])

  return (
    <div className={`${style.loginBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">Вход</p>
      <form className="mt-6">
        <Input
          id="emailInput"
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <form className="mt-6">
        <Input
          id="passwordInput"
          placeholder="Пароль"
          type={inputType}
          icon={inputIcon}
          onIconClick={onIconClick}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
      </form>
      <div className={`${style.buttonBox} mt-6`}>
        <Button id="loginButton" htmlType="button" onClick={onLogin}>
          Войти
        </Button>
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
