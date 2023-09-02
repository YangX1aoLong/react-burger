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
  const selectFeed = () => {
    setSelectedLink(linkList[1]);
    navigate("/feed");
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
            <NavigationLink text="Лента заказов" type={selectedLink === linkList[0] ? "primary" : "secondary"}>
              <BurgerIcon type={selectedLink === linkList[0] ? "primary" : "secondary"} />
            </NavigationLink>
          </div>
          <div onClick={selectFeed}>
            <NavigationLink text="Лента заказов" type={selectedLink === linkList[1] ? "primary" : "secondary"}>
              <ListIcon type={selectedLink === linkList[1] ? "primary" : "secondary"} />
            </NavigationLink>
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
            text="Личный кабинет" type={selectedLink === linkList[2] ? "primary" : "secondary"}>
            <ProfileIcon type={selectedLink === linkList[2] ? "primary" : "secondary"} />
          </NavigationLink>
        </div>
      </div>
    </div>
  );
};
//className="ml-10"
export default AppHeader;
