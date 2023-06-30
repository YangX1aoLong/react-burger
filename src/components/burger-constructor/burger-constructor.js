import { useEffect, useState } from "react";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import OrderDetails from "../order-details";
import style from "./burger-constructor.module.css"
import PropTypes from 'prop-types'
const BurgerConstructor = props => {
  const [order, setOrder] = useState({ visible: false, parameters: null })
  const [bun, setBun] = useState(
    props.selectedIngredients.length ===0?
    {}:props.ingredientsList.find(id => id._id === props.selectedIngredients[0].id));
  const [mains, setMains] = useState([{}])
  const setVisible = value => setOrder({ visible: value, parameters: order.parameters })
  useEffect(() => {
    if (props.selectedIngredients.length !== 0 && props.ingredientsList.length !== 0) {
      setBun(props.ingredientsList.find(id => id._id === props.selectedIngredients[0].id));
      setMains(props.ingredientsList.filter((id, counter) => props.selectedIngredients.find(i => i === id._id) !== -1 && counter !== 0));
    }
  }, [props])
  const summPrice = () => {
    if (mains.length > 1) {
      let price = 0;
      mains.map(index => { price += index.price });
      return bun.price+price;
    }
    return '0';
  };
  return (
    <div className={`${style.burgerConstructor} pt-25 pl-4`}>
      <OrderDetails visible={order.visible} setVisible={setVisible} />
      <div className={`${style.elementBoxEndBurgerConstructor} pt-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={`${style.mainBoxBurgerConstructor} mt-4`}>
        {mains.map((index, counter) => {
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
          text={bun.name}
          price={bun.price}
          thumbnail={bun.image}
        />
      </div>
      <div className={`${style.orderBox} pt-10`}>
        <p className="pt-5 textGrey text text_type_digits-medium">{summPrice()}</p>
        <div className="pt-7 pl-2">
          <CurrencyIcon />
        </div>
        <div className="pl-10">
          <Button htmlType="button" size="large" onClick={() => {
            setOrder({ visible: true, parameters: null });
          }}>Оформить заказ</Button>
        </div>

      </div>
    </div>
  );
};
BurgerConstructor.propTypes = {
  ingredientsList: PropTypes.arrayOf(PropTypes.shape({
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
    __v: PropTypes.number.isRequired
  })).isRequired,
  selectedIngredients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired
};
export default BurgerConstructor;