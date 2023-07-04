import { useEffect, useState } from 'react';
import AppHeader from '../app-header';
import BurgerConstructor from '../burger-constructor';
import BurgerIngredients from '../burger-ingredients';
import { getData } from '../../utils/get-data';
import { IngredientsContext } from '../../context/ingredients-context';
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
  interface SelectedIngredients {
    bun: Ingredients,
    mains: Array<Ingredients>
  }
  interface Status {
    isLoading: boolean,
    error: string
  };

  const [getIngredientsList, setIngredientsList] = useState<Ingredients[]>([]);
  const [getSelectedIngredients, setSelectedIngredients] = useState<SelectedIngredients>();
  const [getStatusData, setStatusData] = useState({ isLoading: false, error: "no error" });
  const statusData = (value: Status) => setStatusData(value);
  useEffect(() => {
    getData(setIngredientsList, setSelectedIngredients, getStatusData, setStatusData);
  }, []);
  return (
    <>
      <AppHeader />
      <div className='container'>
        <div className='burgerIngredientsBox'>
          <BurgerIngredients ingredientsList={getIngredientsList} setSelectedIngredients={setSelectedIngredients} selectedIngredients={getSelectedIngredients} />
        </div>
        <div className='ml-10'>
          <IngredientsContext.Provider value={ getSelectedIngredients}>
            <BurgerConstructor />
          </IngredientsContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
