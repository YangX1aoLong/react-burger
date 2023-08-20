import style from "./ingredient.module.css";
import { shallowEqual, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { TIngredient } from "../../types";
type Props = {
  id: string
}
const Ingredient = (props: Props) => {
  const [ingredient, setIngredient] = useState<TIngredient>();
  const ingredients = useSelector(
    (store: any) => store.ingredients?.data,
    shallowEqual
  );
  const getIngredient = () => {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i]._id === props.id) setIngredient(ingredients[i]);
    }
  };
  useEffect(() => {
    getIngredient();
  }, [ingredients]);

  return (
    <div className={style.ingredientBox}>
      <div className={style.title}>
        <p className="textCenter textGrey text text_type_main-large pt-3">
          Детали ингредиента
        </p>
      </div>
      <img
        className={style.image}
        src={ingredient ? ingredient?.image_large : undefined}
        alt={ingredient?.name}
      ></img>
      <p className="textCenter textGrey text text_type_main-medium">
        {ingredient ? ingredient.name : null}
      </p>
      <div className={`${style.natritionBox} pt-8`}>
        {[
          {
            name: "Калории,ккал",
            value: ingredient
              ? (ingredient.calories / 10).toString().replace(".", ",")
              : null,
          },
          {
            name: "Белки, г",
            value: ingredient
              ? (ingredient.proteins / 10).toString().replace(".", ",")
              : null,
          },
          {
            name: "Жиры, г",
            value: ingredient
              ? (ingredient.fat / 10).toString().replace(".", ",")
              : null,
          },
          {
            name: "Углеводы, г",
            value: ingredient
              ? (ingredient.carbohydrates / 10).toString().replace(".", ",")
              : null,
          },
        ].map((index) => {
          return (
            <div key={index.name} className={`${style.natrition} pl-5`}>
              <p className="textCenter textDarkGrey text text_type_main-default">
                {index.name}
              </p>
              <p className="textCenter textDarkGrey text text_type_digits-default pt-4">
                {index.value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ingredient;
