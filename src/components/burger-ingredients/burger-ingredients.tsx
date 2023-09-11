import { useEffect, useRef, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-ingredients.module.css";
import { shallowEqual } from "react-redux";
import IngredientBox from "../ingredient-box";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../utils/hooks";
import { TIngredient } from "../../types/ingredient";

const BurgerIngredients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const refs = useRef<HTMLDivElement[]>([]);
  const ingredientsTypes = [
    { name: "Булки", type: "bun" },
    { name: "Соусы", type: "sauce" },
    { name: "Начинки", type: "main" },
  ];
  const location = useLocation();
  const [current, setCurrent] = useState(ingredientsTypes[0].type);

  const ingredients = useAppSelector(
    (store) => (store.ingredients),
    shallowEqual
  );
  useEffect(() => {
    const position = sessionStorage.getItem("scroll");
    if (position !== null) setCurrent(position);
  }, []);

  const handleScroll = () => {
    const typesMap = [0, 1, 2];
    const containerPosition = containerRef.current?.getBoundingClientRect().top;
    const categoriesPositions: number[] = [];
    Object.keys(typesMap).map(
      (type) =>
        containerPosition && (categoriesPositions[Number(type)] = Math.abs(
          containerPosition - refs.current[Number(type)].getBoundingClientRect().top))
    );

    const minCategoryPosition = Math.min(...Object.values(categoriesPositions));
    const currentTab: string | undefined = Object.keys(categoriesPositions).find(
      (key) => minCategoryPosition === categoriesPositions[Number(key)]
    );
    currentTab && setCurrent(ingredientsTypes[Number(currentTab)].type);
  };

  const chooseTab = (e: string) => {
    refs.current[
      ingredientsTypes.findIndex((i) => i.type === e)
    ].scrollIntoView();
  };
  return (
    <>
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
                ref={(ref: HTMLDivElement) => {
                  if (refs.current.length < ingredientsTypes.length)
                    refs.current.push(ref);
                }}
              >
                <p className="textGrey text text_type_main-medium mt-10">
                  {index.name}
                </p>
                <div className={`${style.ingredientCell} mt-6`}>
                  {ingredients?.data
                    .filter((ingredient: TIngredient) => ingredient.type === index.type)
                    .map((i: TIngredient, count: number) => {
                      return (
                        <Link
                          className="textDecorationNone"
                          key={`${i._id}link`}
                          to={`/ingredients/${i._id}`}
                          state={{ backgroundLocation: location }}
                        >
                          <IngredientBox
                            key={i._id}
                            ingredient={i}
                            count={count}
                          />
                        </Link>
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
