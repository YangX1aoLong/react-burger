import { useEffect, useState } from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details";
import style from "./burger-constructor.module.css";
import { shallowEqual } from "react-redux";
import { useDrop } from "react-dnd/dist/hooks";
import { addIngredient } from "../../services/actions/burger-constructor";
import ConstructorBox from "../constructor-box";
import {
  getStorageAccessToken, getStorageRefreshToken,
} from "../../utils/local-storage";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../services/actions/get-auth";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { TItemIngredient } from "../../types/burger-constructor";
import { TIngredientWithCount } from "../../types/ingredient";
import { getRefreshToken } from "../../services/actions/refresh-token";
const BurgerConstructor = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [order, setOrder] = useState(false);
  const [orderFlag, setOrderFlag] = useState(false);
  const { selectedIngredients } = useAppSelector(
    (store) => ({ selectedIngredients: store.burgerConstructor }),
    shallowEqual
  );
  const auth = useAppSelector((store) => store.getAuth, shallowEqual);
  useEffect(() => {
    if (auth?.error?.message === 'jwt expired')
      dispatch(getRefreshToken(getStorageRefreshToken()));
    if (orderFlag === true) {
      setOrderFlag(false);
      orderOpen();
    }
  }, [auth])
  const summPrice = () => {
    let summ = 0;
    for (let i = 0; i < selectedIngredients.mains.length; i++)
      summ += selectedIngredients.mains[i].price;
    summ +=
      selectedIngredients.bun.price > 0 ? selectedIngredients.bun.price * 2 : 0;
    return summ;
  };
  const orderClose = () => {
    setOrder(false);
  };
  const orderOpen = () => {
    setOrder(true);
  };

  const [, dropRef] = useDrop<TItemIngredient>({
    accept: "ingredient",
    drop(item: TItemIngredient) {
      dispatch(addIngredient(item.ingredient));
    },
  });

  return (
    <div ref={dropRef} className={`${style.burgerConstructor} pt-25 pl-4`}>
      {order && <OrderDetails onClose={orderClose} />}
      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        {selectedIngredients.bun.image ?
          <ConstructorElement
            type="top"
            isLocked={true}
            text={selectedIngredients.bun.name}
            price={selectedIngredients.bun.price}
            thumbnail={selectedIngredients.bun.image}
          /> : <div>
            <p className="textGrey text text_type_main-medium"> Перетащите сюда ингредиенты для создания бургера</p>
          </div>

        }
      </div>
      <div className={`${style.mainBoxBurgerConstructor} mt-4`}>
        {selectedIngredients.mains.map((index: TIngredientWithCount, counter: number) => {
          let interval = "pt-4";
          if (counter === 0) interval = "pt-0";
          return (
            <ConstructorBox
              key={Math.random()}
              interval={interval}
              element={index}
            />
          );
        })}
      </div>

      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        {selectedIngredients.bun.image &&
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={selectedIngredients.bun.name}
            price={selectedIngredients.bun.price}
            thumbnail={selectedIngredients.bun.image}
          />
        }
      </div>
      <div className={`${style.orderBox} pt-10`}>
        <p className="pt-5 textGrey text text_type_digits-medium">
          {summPrice()}
        </p>
        <div className="pt-7 pl-2">
          <CurrencyIcon type="primary" />
        </div>
        <div className="pl-10">
          <Button
            htmlType="button"
            size="large"
            onClick={() => {
              const token = getStorageAccessToken();
              if (token === null) navigate("/login");
              else
                if (selectedIngredients.bun?._id) {
                  dispatch(getAuth(getStorageAccessToken()));
                  setOrderFlag(true);
                }
            }}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructor;
