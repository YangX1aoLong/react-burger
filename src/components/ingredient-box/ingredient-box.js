import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredient-box.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIngredient } from "../../services/actions/selected-ingredient";
import { useDrag } from "react-dnd/dist/hooks";
import PropTypes from "prop-types";
const IngredientBox = (props) => {
  const dispatch = useDispatch();
  const constructor = useSelector((store) => store.burgerConstructor);

  const countIngredient = (ingredient) => {
    let count = 0;
    if (constructor.bun._id === ingredient._id) count += 2;
    for (let i = 0; i < constructor.mains.length; i++)
      if (constructor.mains[i]._id === ingredient._id) ++count;
    return count;
  };
  const onSelectIngredient = (ingredient) =>
    dispatch(selectIngredient(ingredient));
  const countOfIngredient = countIngredient(props.ingredient);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: {ingredient:props.ingredient},
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef}
      key={props.ingredient._id}
      className={`${props.count % 2 === 1 ? "ml-6" : "ml-4"}`}
      onClick={() => {
        props.onOpen(true);
        onSelectIngredient(props.ingredient);
      }}
    >
      <Counter
        extraClass={`${style.counterIngredientCell} ${
          countOfIngredient === 0 ? style.counterIngredientCellHide : "null"
        }`}
        count={countOfIngredient}
      />
      <img
        className={`ml-4 ${
          countOfIngredient === 0 ? style.imageIngredient : "null"
        }`}
        src={props.ingredient.image}
        alt="description"
      />
      <div className={`${style.priceBox} mt-1 mb-1`}>
        <p className="textGrey text text_type_digits-default">
          {props.ingredient.price}
        </p>
        <CurrencyIcon />
      </div>
      <p
        className={`${style.nameIngredient} textGrey text text_type_main-default`}
      >
        {props.ingredient.name.trim()}
      </p>
    </div>
  );
};
IngredientBox.propTypes = {
  ingredient: PropTypes.shape({
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
    count: PropTypes.number,
  }).isRequired,
  count: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired
};
export default IngredientBox;


