import { useEffect } from 'react';
import AppHeader from '../app-header';
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const dispatch = useDispatch()<any>;
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <div className='container'>
        <DndProvider backend={HTML5Backend}>
          <div className='burgerIngredientsBox'>
            <BurgerIngredients />
          </div>
          <div className='ml-10'>
            <BurgerConstructor />
          </div>
        </DndProvider>
      </div>
    </>
  );
}

export default App;
