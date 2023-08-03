import Profile from "../profile";
import style from "./account.module.css";
const Account = () => {
  return (
    <div className={`${style.accountBox}`}>
      <div>
        <div className={style.navigation}>
          <p className="textGrey text text_type_main-medium pt-4">Профиль</p>
        </div>
        <div className={style.navigation}>
          <p className="textDarkGrey text text_type_main-medium pt-4">
            История заказов
          </p>
        </div>
        <div className={style.navigation}>
          <p className="textDarkGrey text text_type_main-medium pt-4">Выход</p>
        </div>
        <div className={`${style.navigation} mt-20`}>
          <p className="textDarkGrey text text_type_main-default pt-2">
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
      </div>
      <div className="pl-15">
        <Profile/>
      </div>
    </div>
  );
};
export default Account;
