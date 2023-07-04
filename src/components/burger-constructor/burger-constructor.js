import { useEffect, useState, useContext } from "react";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import OrderDetails from "../order-details";
import style from "./burger-constructor.module.css";
import PropTypes, { number } from 'prop-types';
import { IngredientsContext } from "../../context/ingredients-context";

const BurgerConstructor = props => {
  const [order, setOrder] = useState(false);
  const selectedIngredients = useContext(IngredientsContext);
  const summPrice = () => {
    let summ = 0;
    if (selectedIngredients) {
      for (let i = 0; i < selectedIngredients.mains.length; i++)
        summ += selectedIngredients.mains[i].price;
      summ += (selectedIngredients.bun.price * 2);
    }
    return summ;
  };
  const orderClose = () => {
    setOrder(false);
  };
  const orderOpen = () => {
    setOrder(true);
  };
  return (
    <div className={`${style.burgerConstructor} pt-25 pl-4`}>
      {order && (<OrderDetails onClose={orderClose} />)}
      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={selectedIngredients && selectedIngredients.bun.name}
          price={selectedIngredients && selectedIngredients.bun.price}
          thumbnail={selectedIngredients && selectedIngredients.bun.image}
        />
      </div>

      <div className={`${style.mainBoxBurgerConstructor} mt-4`}>
        {selectedIngredients && selectedIngredients.mains.map((index, counter) => {
          let interval = 'pt-4'
          if (counter === 0) interval = 'pt-0'
          return (<div key={counter} className={`${style.elementBoxBurgerConstructor} ${interval}`}>
            <div className="pt-7">
              <DragIcon></DragIcon>
            </div>
            <div className={`${style.elemetBurgerConstructor} pl-6`}>
              <ConstructorElement
                text={index.name}
                price={index.price}
                thumbnail={index.image}
              />
            </div>
          </div>
          )
        })}
      </div>

      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={selectedIngredients && selectedIngredients.bun.name}
          price={selectedIngredients && selectedIngredients.bun.price}
          thumbnail={selectedIngredients && selectedIngredients.bun.image}
        />
      </div>
      <div className={`${style.orderBox} pt-10`}>
        <p className="pt-5 textGrey text text_type_digits-medium">{summPrice()}</p>
        <div className="pt-7 pl-2">
          <CurrencyIcon />
        </div>
        <div className="pl-10">
          <Button htmlType="button" size="large" onClick={() => {
            orderOpen();
          }}>Оформить заказ</Button>
        </div>

      </div>

    </div>
  );
};



export default BurgerConstructor;