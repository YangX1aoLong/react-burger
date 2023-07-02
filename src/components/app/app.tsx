import { useEffect, useState } from 'react';
import AppHeader from '../app-header';
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import { getData } from '../../utils/get-data';

function App() {
  interface Ingredients {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    count?: number
  };
  interface Status {
    isLoading: boolean,
    error: string
  };

  const [getIngredientsList, setIngredientsList] = useState<Ingredients[]>([]);
  const [getSelectedIngredients, setSelectedIngredients] = useState<Ingredients[]>([]);
  const [getStatusData, setStatusData] = useState({ isLoading: false, error: "no error" });
  const ingredientsList = (value: Array<Ingredients>) => setIngredientsList(value);
  const selectedIngredients = (value: Array<Ingredients>) => setSelectedIngredients(value);
  const statusData = (value: Status) => setStatusData(value);

  useEffect(() => {
    getData(ingredientsList, selectedIngredients, getStatusData, statusData);
  }, []);
  return (
    <>
      <AppHeader />
      <div className='container'>
        <div className='burgerIngredientsBox'>
          <BurgerIngredients ingredientsList={getIngredientsList} setSelectedIngredients={selectedIngredients} selectedIngredients={getSelectedIngredients} />
        </div>
        <div className='ml-10'>
          <BurgerConstructor selectedIngredients={getSelectedIngredients} />
        </div>
      </div>
    </>
  );
}

export default App;
