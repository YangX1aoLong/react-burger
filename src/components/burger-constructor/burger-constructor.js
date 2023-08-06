import { useState } from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../order-details";
import style from "./burger-constructor.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd/dist/hooks";
import { addIngredient } from "../../services/actions/burger-constructor";

import ConstructorBox from "../constructor-box";
import {
  getStorageAccessToken,
  getStorageRefreshToken,
} from "../../utils/local-storage";
import { useNavigate } from "react-router-dom";
import { getAuth } from "../../services/actions/get-auth";
import { getRefreshToken } from "../../services/actions/refresh-token";
const BurgerConstructor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [order, setOrder] = useState(false);
  const { selectedIngredients } = useSelector(
    (store) => ({ selectedIngredients: store.burgerConstructor }),
    shallowEqual
  );
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
  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      dispatch(addIngredient(item.ingredient));
    },
  });

  return (
    <div ref={dropRef} className={`${style.burgerConstructor} pt-25 pl-4`}>
      {order && <OrderDetails onClose={orderClose} />}
      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={selectedIngredients.bun.name}
          price={selectedIngredients.bun.price}
          thumbnail={selectedIngredients.bun.image}
        />
      </div>

      <div className={`${style.mainBoxBurgerConstructor} mt-4`}>
        {selectedIngredients.mains.map((index, counter) => {
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
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={selectedIngredients.bun.name}
          price={selectedIngredients.bun.price}
          thumbnail={selectedIngredients.bun.image}
        />
      </div>
      <div className={`${style.orderBox} pt-10`}>
        <p className="pt-5 textGrey text text_type_digits-medium">
          {summPrice()}
        </p>
        <div className="pt-7 pl-2">
          <CurrencyIcon />
        </div>
        <div className="pl-10">
          <Button
            htmlType="button"
            size="large"
            onClick={() => {
              if (selectedIngredients.bun?._id)
                dispatch(getAuth(getStorageAccessToken())).then((e) => {
                  if (e.payload?.success) {
                    orderOpen();
                  } else if (e.payload?.message === "jwt expired") {
                    dispatch(getRefreshToken(getStorageRefreshToken())).then(
                      (e) => {
                        if (e.payload?.success) orderOpen();
                        else alert(e.payload?.message);
                      }
                    );
                  } else navigate("/login");
                });
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
