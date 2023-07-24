import BurgerConstructor from "../components/burger-constructor";
import BurgerIngredients from "../components/burger-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
export const MainPage = () => {
  return (
    <div className="container">
      <DndProvider backend={HTML5Backend}>
        <div className="burgerIngredientsBox">
          <BurgerIngredients />
        </div>
        <div className="ml-10">
          <BurgerConstructor />
        </div>
      </DndProvider>
    </div>
  );
};

