import { Fragment, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details";
import style from "./burger-ingredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import { unselectIngredient } from "../../services/actions/selected-ingredient";
import IngredientBox from "../ingredient-box";

const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const ingredientsTypes = [
    { name: "Булки", type: "bun" },
    { name: "Соусы", type: "sauce" },
    { name: "Начинки", type: "main" },
  ];
  const [current, setCurrent] = useState(ingredientsTypes[0].type);
  const [details, setDetails] = useState(false);
  const closeDetails = () => {
    dispatch(unselectIngredient());
    setDetails(false);
  };
  const openDetails = () => {
    setDetails(true);
  };

  const ingredients = useSelector((store) => store.ingredients);
  return (
    <>
      {details && <IngredientDetails onClose={closeDetails} />}
      <div className={`${style.burgerIngredients} mt-10`}>
        <p className="textGrey text text_type_main-large"> Соберите бургер</p>
        <div className={`${style.tabs} mt-5`}>
          {ingredientsTypes.map((index, count) => {
            return (
              <Tab
                key={index.type}
                value={index.type}
                active={current === index.type}
                onClick={() => {
                  setCurrent(index.type);
                }}
              >
                {index.name}
              </Tab>
            );
          })}
        </div>
        <div className={`${style.ingredientsWindow}`}>
          {ingredientsTypes.map((index, i) => {
            return (
              <div key={i}>
                <p className="textGrey text text_type_main-medium mt-10">
                  {index.name}
                </p>
                <div className={`${style.ingredientCell} mt-6`}>
                  {ingredients?.data
                    .filter((ingredient) => ingredient.type === index.type)
                    .map((i, count) => {
                      return (
                        <IngredientBox
                          key={Math.random()}
                          ingredient={i}
                          count={count}
                          onOpen={openDetails}
                        />
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BurgerIngredients;
