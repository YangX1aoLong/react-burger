import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAuth } from "../../services/actions/get-auth";
import {
  getStorageAccessToken,
  getStorageRefreshToken,
} from "../../utils/local-storage";
import { getRefreshToken } from "../../services/actions/refresh-token";
import { updateAuth } from "../../services/actions/update-auth";
const Profile = () => {
  const auth = useSelector((store: any) => store.getAuth, shallowEqual);
  const [name, setName] = useState(auth?.data?.user?.name);
  const [email, setEmail] = useState(auth?.data?.user?.email);
  const [password, setPassword] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const getDataAuth = () => {
    dispatch(getAuth(getStorageAccessToken()));
  };
  const saveDataAuth = () => {
    dispatch(updateAuth(getStorageAccessToken(), name, email, password));
  };
  useEffect(() => {
    getDataAuth();
  }, []);
  useEffect(() => {
    if (auth?.error?.message === 'jwt expired')
      dispatch(getRefreshToken(getStorageRefreshToken()));
    setName(auth?.data?.user?.name);
    setEmail(auth?.data?.user?.email);
  }, [auth]);
  const onSave = () => {
    saveDataAuth();
    setEdit(false);
  };
  const onCancel = () => {
    getDataAuth();
    setEdit(false);
  };

  return (
    <div>
      <div className="mt-6">
        <Input
          placeholder="Имя"
          icon="EditIcon"
          value={name !== undefined ? name : ""}
          onChange={(e) => {
            setName(e.target.value);
            setEdit(true);
          }}
        />
      </div>
      <form className="mt-6">
        <Input
          placeholder="Логин"
          icon="EditIcon"
          value={email !== undefined ? email : ""}
          onChange={(e) => {
            setEmail(e.target.value);
            setEdit(true);
          }}
        />
      </form>
      <form className="mt-6">
        <Input
          placeholder="Пароль"
          icon="EditIcon"
          value={password}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setEdit(true);
          }}
        />
      </form>
      {edit && (
        <div className="container">
          <div className="mt-5 ml-25">
            <Button htmlType="button" size="small" onClick={onSave}>
              Сохранить
            </Button>
          </div>
          <div className="mt-5 ml-5">
            <Button htmlType="button" size="small" onClick={onCancel}>
              Отмена
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
