import { useParams } from "react-router-dom";
import Ingredient from "../components/ingredient";
import { shallowEqual, useSelector } from "react-redux";
import IngredientDetails from "../components/ingredient-details";
import BurgerConstructor from "../components/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const IngredientFullPage = () => {
  const { selectedIngredient } = useSelector(
    (store) => ({ selectedIngredient: store.selectedIngredient }),
    shallowEqual
  );
  const { id } = useParams();
  if (selectedIngredient._id === undefined) return <Ingredient id={id} />;
  else return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <div className="burgerIngredientsBox">
          <BurgerIngredients />
        </div>
        <div className="ml-10">
          <BurgerConstructor />
        </div>
      </DndProvider>
      <IngredientDetails />
    </div>
  );
  
};
