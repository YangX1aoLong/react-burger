import { useEffect } from 'react';
import AppHeader from '../app-header';
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";

function App() {
  const dispatch = useDispatch()<any>;
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <div className='container'>
        <div className='burgerIngredientsBox'>
          <BurgerIngredients />
        </div>
        <div className='ml-10'>

          <BurgerConstructor />

        </div>
      </div>
    </>
  );
}

export default App;
