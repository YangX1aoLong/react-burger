import { useEffect, useState } from 'react';
import AppHeader from './components/app-header';
import BurgerConstructor from './components/burger-constructor';
import BurgerIngredients from './components/burger-ingredients';

const urlData = "https://norma.nomoreparties.space/api/ingredients";
function App() {
  interface IngredientIdCount {
    id: string,
    count:number
  };
  const [ingredientsList, setIngredientsList] = useState([]);
  const [getSelectedIngredients, setSelectedIngredients] = useState<IngredientIdCount[]>([]);
  const selectedIngredients = (value: Array<IngredientIdCount>) => setSelectedIngredients(value)
  const getData = () => {
    fetch(urlData)
      .then(res => res.json())
      .then(data => setIngredientsList(data.data))
      .catch(e => alert('Cant download ingredients data'))
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <AppHeader></AppHeader>
      <div className='container'>
        <div className='burgerIngredientsBox'>
          <BurgerIngredients ingredientsList={ingredientsList} setSelectedIngredients={selectedIngredients}></BurgerIngredients>
        </div>
        <div className='ml-10'>
          <BurgerConstructor ingredientsList={ingredientsList} selectedIngredients={getSelectedIngredients} ></BurgerConstructor>
        </div>
      </div>
    </>
  );
}

export default App;
