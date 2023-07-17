import { Fragment, useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details";
import style from "./burger-ingredients.module.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
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
  const { ingredients } = useSelector(
    (store) => ({ ingredients: store.ingredients }),
    shallowEqual
  );
  const closeDetails = () => {
    dispatch(unselectIngredient());
    setDetails(false);
  };

  const openDetails = () => {
    setDetails(true);
  };

  const containerRef = useRef();
  const refs = useRef([]);

  const handleScroll = () => {
    const typesMap = [0, 1, 2];
    const containerPosition = containerRef.current.getBoundingClientRect().top;
    const categoriesPositions = {};
    Object.keys(typesMap).map(
      (type) =>
        (categoriesPositions[type] = Math.abs(
          containerPosition - refs.current[type].getBoundingClientRect().top
        ))
    );

    const minCategoryPosition = Math.min(...Object.values(categoriesPositions));
    const currentTab = Object.keys(categoriesPositions).find(
      (key) => minCategoryPosition === categoriesPositions[key]
    );
    setCurrent(ingredientsTypes[currentTab].type);
  };

  const chooseTab = (e) => {
    refs.current[
      ingredientsTypes.findIndex((i) => i.type === e)
    ].scrollIntoView();
  };

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
                onClick={(e) => {
                  setCurrent(index.type);
                  chooseTab(e);
                }}
              >
                {index.name}
              </Tab>
            );
          })}
        </div>
        <div
          className={`${style.ingredientsWindow}`}
          onScroll={handleScroll}
          ref={containerRef}
        >
          {ingredientsTypes.map((index, i) => {
            return (
              <div
                key={index.type}
                ref={(ref) => {
                  if (refs.current.length < ingredientsTypes.length)
                    refs.current.push(ref);
                }}
              >
                <p className="textGrey text text_type_main-medium mt-10">
                  {index.name}
                </p>
                <div className={`${style.ingredientCell} mt-6`}>
                  {ingredients?.data
                    .filter((ingredient) => ingredient.type === index.type)
                    .map((i, count) => {
                      return (
                        <IngredientBox
                          key={i._id}
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
