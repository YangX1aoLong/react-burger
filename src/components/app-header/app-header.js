import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../navigation-link";
import style from "./app-header.module.css";

import { useNavigate } from "react-router-dom";
const AppHeader = () => {
       const navigate = useNavigate();
       const restorePassword = () => {
         navigate("/reset-password");
       };
       
  return (
    <div className={style.navPanel}>
      <div className={`${style.contentBox} m-4`}>
        <div className={style.navBox}>
          <NavigationLink
            icon={BurgerIcon}
            typeIcon="primary"
            text="Конструктор"
          />
          <NavigationLink
            icon={ListIcon}
            typeIcon="secondary"
            text="Лента заказов"
          />
        </div>
        <div className={style.logoBurger}>
          <Logo></Logo>
        </div>
        <div
          className={`${style.navBox} ${style.loginBox}`}
          onClick={() => {
            console.log("test");
          }}
        >
          <NavigationLink
            className="ml-10"
            icon={ProfileIcon}
            typeIcon="secondary"
            text="Личный кабинет"
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
