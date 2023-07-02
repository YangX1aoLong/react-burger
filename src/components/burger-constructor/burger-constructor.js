import { useEffect, useState } from "react";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import OrderDetails from "../order-details";
import style from "./burger-constructor.module.css"
import PropTypes, { number } from 'prop-types'

const BurgerConstructor = props => {
  const [order, setOrder] = useState(false)
  const summPrice = () => {
    let summ = 0;
    for (let i = 0; i < props.selectedIngredients.length; i++)
      summ += props.selectedIngredients[i].price;
    return summ;
  };
  const orderClose = () => {
    setOrder(false);
  }
  const orderOpen = () => {
    setOrder(true);
  }
  return (
    <div className={`${style.burgerConstructor} pt-25 pl-4`}>
      {order && (<OrderDetails onClose={orderClose} />)}
      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={props.selectedIngredients[0] && props.selectedIngredients[0].name}
          price={props.selectedIngredients[0] && props.selectedIngredients[0].price}
          thumbnail={props.selectedIngredients[0] && props.selectedIngredients[0].image}
        />
      </div>

      <div className={`${style.mainBoxBurgerConstructor} mt-4`}>
        {props.selectedIngredients.map((index, counter) => {
          if (counter !== 0) {
            let interval = 'pt-4'
            if (counter === 1) interval = 'pt-0'
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
          }
        })}
      </div>

      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={props.selectedIngredients[0] && props.selectedIngredients[0].name}
          price={props.selectedIngredients[0] && props.selectedIngredients[0].price}
          thumbnail={props.selectedIngredients[0] && props.selectedIngredients[0].image}
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
BurgerConstructor.propTypes = {
  selectedIngredients: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
    count: PropTypes.number
  })).isRequired,

};
export default BurgerConstructor;