import { useState } from "react";
import Profile from "../profile";
import style from "./account.module.css";
import { useNavigate } from "react-router-dom";
import { getLogout } from "../../services/actions/logout";
import {
  clearStorage,  
  getStorageRefreshToken,
} from "../../utils/local-storage";
import { useDispatch } from "react-redux";

const points = ["Профиль", "История заказов", "Выход"];
const Account = () => {
  const [selectedPoint, setSelectedPoint] = useState(points[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectProfile = () => {
    setSelectedPoint(points[0]);
  };
  const selectHistory = () => {
    setSelectedPoint(points[1]);
  };
  const selectExit = () => {
    setSelectedPoint(points[2]);
    dispatch(getLogout(getStorageRefreshToken()));
    clearStorage();
    navigate("/");
  };

  return (
    <div className={`${style.accountBox}`}>
      <div>
        <div className={style.navigation} onClick={selectProfile}>
          <p
            className={`${
              selectedPoint === points[0] ? "textGrey" : "textDarkGrey"
            } text text_type_main-medium pt-4`}
          >
            {points[0]}
          </p>
        </div>

        <div className={style.navigation} onClick={selectHistory}>
          <p
            className={`${
              selectedPoint === points[1] ? "textGrey" : "textDarkGrey"
            } text text_type_main-medium pt-4`}
          >
            {points[1]}
          </p>
        </div>

        <div className={style.navigation} onClick={selectExit}>
          <p
            className={`${
              selectedPoint === points[2] ? "textGrey" : "textDarkGrey"
            } text text_type_main-medium pt-4`}
          >
            {points[2]}
          </p>
        </div>      

        <div className={`${style.about} mt-20`}>
          <p className="textDarkGrey text text_type_main-default pt-2">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
      </div>
      <div className="pl-15">
        <Profile />
      </div>
    </div>
  );
};
export default Account;
