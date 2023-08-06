import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getResetPassword } from "../../services/actions/reset-password";
import { hidePassword, showPassword } from "../../utils/input-settings";
import { useDispatch } from "react-redux";
const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [passwordSetting, setPasswordSetting] = useState(hidePassword);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const onIconClick = () => {
    if (passwordSetting.icon === "HideIcon") {
      setPasswordSetting(showPassword);
    } else setPasswordSetting(hidePassword);
  };
  const saveNewPassword = () => {
    dispath(getResetPassword(password, token)).then((e) => {
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
          type={passwordSetting.type}
          icon={passwordSetting.icon}
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
