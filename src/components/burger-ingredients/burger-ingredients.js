import { Fragment, useState, useEffect } from "react";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details";
import style from "./burger-ingredients.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addIngredient } from "../../services/actions/burger-constructor";
import { selectIngredient, unselectIngredient } from "../../services/actions/selected-ingredient";

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

  const ingredients = useSelector((store) => store.ingredients);
  const constructor = useSelector((store) => store.burgerConstructor);

  const onAddIngredient = (ingredient) => dispatch(addIngredient(ingredient));
  const countIngredient = (ingredient) => {
    let count = 0;
    if (constructor.bun._id === ingredient._id) count += 2;
    for (let i = 0; i < constructor.mains.length; i++)
      if (constructor.mains[i]._id === ingredient._id) ++count;
    return count;
  };
  const onSelectIngredient = (ingredient) =>
    dispatch(selectIngredient(ingredient));
  return (
    <>
      {details && <IngredientDetails onClose={closeDetails} />}
      <div className={`${style.burgerIngredients} mt-10`}>
        <p className="textGrey text text_type_main-large"> Соберите бургер</p>
        <div className={`${style.tabs} mt-5`}>
          {ingredientsTypes.map((index) => {
            return (
              <Tab
                key={index.type}
                value={index.type}
                active={current === index.type}
                onClick={setCurrent}
              >
                {index.name}
              </Tab>
            );
          })}
        </div>
        {ingredientsTypes.map((index, i) => {
          return (
            <Fragment key={i}>
              <p className="textGrey text text_type_main-medium mt-10">
                {index.name}
              </p>
              <div className={`${style.ingredientCell} mt-6`}>
                {ingredients?.data
                  .filter((ingredient) => ingredient.type === index.type)
                  .map((i, count) => {
                    const countOfIngredient = countIngredient(i);
                    return (
                      <div
                        key={i._id}
                        className={`${count % 2 === 1 ? "ml-6" : "ml-4"}`}
                        onClick={() => {
                            onAddIngredient(i);
                          setDetails(true);
                          onSelectIngredient(i);
                          //setDetails({ visible: true, data: i });
                        }}
                      >
                        <Counter
                          extraClass={`${style.counterIngredientCell} ${
                            countOfIngredient === 0
                              ? style.counterIngredientCellHide
                              : "null"
                          }`}
                          count={countOfIngredient}
                        />
                        <img
                          className={`ml-4 ${
                            countOfIngredient === 0
                              ? style.imageIngredient
                              : "null"
                          }`}
                          src={i.image}
                          alt="description"
                        />
                        <div className={`${style.priceBox} mt-1 mb-1`}>
                          <p className="textGrey text text_type_digits-default">
                            {i.price}
                          </p>
                          <CurrencyIcon />
                        </div>
                        <p
                          className={`${style.nameIngredient} textGrey text text_type_main-default`}
                        >
                          {i.name.trim()}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default BurgerIngredients;
