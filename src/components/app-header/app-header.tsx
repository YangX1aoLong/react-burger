import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import NavigationLink from "../navigation-link";
import style from "./app-header.module.css";

import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
type THeader = {
  locate: string;
  name: string;
}
const linkList: THeader[] = [
  { locate: "/", name: "Конструктор" },
  { locate: "/feed", name: "Лента заказов" },
  { locate: "/profile", name: "Личный кабинет" }
];
const AppHeader = () => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState<string>(location.pathname);
  const navigate = useNavigate();  
  const selectConstructor = () => {
    setSelectedLink(linkList[0].locate);
    navigate(linkList[0].locate);
  };
  const selectFeed = () => {
    setSelectedLink(linkList[1].locate);
    navigate(linkList[1].locate);
  };
  const selectProfile = () => {
    setSelectedLink(linkList[2].locate);
    navigate(linkList[2].locate);
  };
  return (
    <div className={style.navPanel}>
      <div className={`${style.contentBox} m-4`}>
        <div className={style.navBox}>
          <div onClick={selectConstructor}>
            <NavigationLink text={linkList[0].name} type={selectedLink === linkList[0].locate ? "primary" : "secondary"}>
              <BurgerIcon type={selectedLink === linkList[0].locate ? "primary" : "secondary"} />
            </NavigationLink>
          </div>
          <div onClick={selectFeed}>
            <NavigationLink text={linkList[1].name} type={selectedLink === linkList[1].locate ? "primary" : "secondary"}>
              <ListIcon type={selectedLink === linkList[1].locate ? "primary" : "secondary"} />
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
            text={linkList[2].name} type={selectedLink === linkList[2].locate ? "primary" : "secondary"}>
            <ProfileIcon type={selectedLink === linkList[2].locate ? "primary" : "secondary"} />
          </NavigationLink>
        </div>
      </div>
    </div>
  );
};
//className="ml-10"
export default AppHeader;
