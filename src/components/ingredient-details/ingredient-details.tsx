import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredient-details.module.css";
import Modal from "../modal";
import { shallowEqual, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const IngredientDetails = () => {
  const ingredient = useSelector(
    (store: any) => store.selectedIngredient,
    shallowEqual
  );
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };
  return (
    <>
      <Modal onClose={onClose}>
        <div className={style.ingredientDetailsBox}>
          <div className={`${style.title} pt-10 pl-10 pr-10`}>
            <p className="textGrey text text_type_main-large">
              Детали ингредиента
            </p>
            <div
              className={style.closeIconBox}
              onClick={() => {
                onClose();
              }}
            >
              <CloseIcon type="primary" />
            </div>
          </div>
          <img
            className={style.image}
            src={ingredient ? ingredient.image_large : null}
            alt={ingredient.name}
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
      </Modal>
    </>
  );
};

export default IngredientDetails;
