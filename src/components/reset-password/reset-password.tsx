import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getResetPassword } from "../../services/actions/reset-password";
import { useDispatch } from "react-redux";
import { TInputIcon, TInputType } from "../../types";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [inputType, setIntputType] = useState<TInputType>("password");
  const [inputIcon, setInputIcon] = useState<TInputIcon>("HideIcon");
  const dispath = useDispatch();
  const navigate = useNavigate();
  const onIconClick = () => {
    if (inputIcon === "HideIcon") {
      setIntputType("text");
      setInputIcon("ShowIcon");
    } else {
      setIntputType("password");
      setInputIcon("HideIcon");
    }
  };
  const saveNewPassword = () => {
    dispath(getResetPassword(password, token)).then((e:any) => {
      if (e.payload?.success) navigate("/login");
      else alert(e.payload?.message);
    });
  };
  return (
    <div className={`${style.forgotPasswordBox}`}>
      <p className="textCenter textGrey text text_type_main-medium">
        Восстановление пароля
      </p>
      <div className="mt-6">
        <Input
          placeholder="Введите новый пароль"
          type={inputType}
          icon={inputIcon}
          onIconClick={onIconClick}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="mt-6">
        <Input
          placeholder="Введите код из письма"
          onChange={(e) => setToken(e.target.value)}
          value={token}
        />
      </div>

      <div className={`${style.buttonBox} mt-6`}>
        <Button onClick={saveNewPassword} htmlType="button">
          Сохранить
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
export default ResetPassword;
