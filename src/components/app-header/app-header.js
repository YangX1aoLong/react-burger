import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../navigation-link";
import style from "./app-header.module.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
const linkList = ["Конструктор", "Лента заказов", "Личный кабинет"];
const AppHeader = () => {
  const [selectedLink, setSelectedLink] = useState(linkList[0]);
  const navigate = useNavigate();
  const selectConstructor = () => {
    setSelectedLink(linkList[0]);
    navigate("/");
  };
  const selectProfile = () => {
    setSelectedLink(linkList[2]);
    navigate("/profile");
  };
  return (
    <div className={style.navPanel}>
      <div className={`${style.contentBox} m-4`}>
        <div className={style.navBox}>
          <div onClick={selectConstructor}>
            <NavigationLink
              icon={BurgerIcon}
              typeIcon={selectedLink === linkList[0] ? "primary" : "secondary"}
              text={linkList[0]}
            />
          </div>
          <div>
            <NavigationLink
              icon={ListIcon}
              typeIcon={selectedLink === linkList[1] ? "primary" : "secondary"}
              text="Лента заказов"
            />
          </div>
        </div>
        <div className={style.logoBurger}>
          <Logo></Logo>
        </div>
        <div
          className={`${style.navBox} ${style.loginBox}`}
          onClick={selectProfile}
        >
          <NavigationLink
            className="ml-10"
            icon={ProfileIcon}
            typeIcon={selectedLink === linkList[2] ? "primary" : "secondary"}
            text="Личный кабинет"
          />
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
