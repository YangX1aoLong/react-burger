import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredient-box.module.css";
import { shallowEqual } from "react-redux";
import { selectIngredient } from "../../services/actions/selected-ingredient";
import { useDrag } from "react-dnd/dist/hooks";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { TIngredient } from "../../types/ingredient";
type Props = {
  ingredient: TIngredient;
  count: number;
}
const IngredientBox = (props: Props) => {
  const dispatch = useAppDispatch();
  const { constructor } = useAppSelector(
    (store) => ({ constructor: store.burgerConstructor }),
    shallowEqual
  );

  const countIngredient = (ingredient: TIngredient) => {
    let count = 0;
    if (constructor.bun._id === ingredient._id) count += 2;
    for (let i = 0; i < constructor.mains.length; i++)
      if (constructor.mains[i]._id === ingredient._id) ++count;
    return count;
  };
  const onSelectIngredient = (ingredient: TIngredient) =>
    dispatch(selectIngredient(ingredient));
  const countOfIngredient = countIngredient(props.ingredient);
  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { ingredient: props.ingredient },
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

        onSelectIngredient(props.ingredient);
      }}
    >
      <Counter
        extraClass={`${style.counterIngredientCell} ${countOfIngredient === 0 ? style.counterIngredientCellHide : "null"
          }`}
        count={countOfIngredient}
      />
      <img
        className={`ml-4 ${countOfIngredient === 0 ? style.imageIngredient : "null"
          }`}
        src={props.ingredient.image}
        alt="description"
      />
      <div className={`${style.priceBox} mt-1 mb-1`}>
        <p className="textGrey text text_type_digits-default">
          {props.ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p
        className={`${style.nameIngredient} textGrey text text_type_main-default`}
      >
        {props.ingredient.name.trim()}
      </p>
    </div>
  );
};

export default IngredientBox;
