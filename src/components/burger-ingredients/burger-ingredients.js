import { Fragment, useState, useEffect } from "react";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"
import PropTypes from 'prop-types'
import IngredientDetails from "../ingredient-details";
import { standartSelectedIngredients } from "../../utils/standartSelectedIngredients";

const BurgerIngredients = props => {
    const ingredientsTypes = [
        { name: 'Булки', type: 'bun' },
        { name: 'Соусы', type: 'sauce' },
        { name: 'Начинки', type: 'main' }];
    const [current, setCurrent] = useState(ingredientsTypes[0].type);
    const [ingredientDetails, setIngredientDetails] = useState({ visible: false, parameters: null });
    const setVisibleIngredientDetails = value => setIngredientDetails({ visible: value, parameters: ingredientDetails.parameters });
    const [selectedIngredients, setSelectedIngredients] = useState(standartSelectedIngredients);
    useEffect(() => {
        props.setSelectedIngredients(selectedIngredients);
    }, []);
    return (
        <>
            <IngredientDetails
                visible={ingredientDetails.visible}
                parameters={ingredientDetails.parameters}
                setVisible={setVisibleIngredientDetails}
            ></IngredientDetails>
            <div className="burgerIngredients mt-10">

                <p className="textGrey text text_type_main-large"> Соберите бургер</p>
                <div className="tabsBox mt-5">
                    {
                        ingredientsTypes.map(index => {
                            return (
                                <Tab key={index.type} value={index.type} active={current === index.type} onClick={setCurrent}>
                                    {index.name}
                                </Tab>
                            )
                        })
                    }
                </div>
                {ingredientsTypes.map((index, i) => {
                    return (
                        <Fragment key={i}>
                            <p className="textGrey text text_type_main-medium mt-10">{index.name}</p>
                            <div className="ingredientCell mt-6">
                                {props.ingredientsList.filter(ingredient => ingredient.type === index.type).map((i, count) => {
                                    const countOfIngredient = selectedIngredients.filter(j => j.id === i._id).length;
                                    return (
                                        <div key={i._id} className={`${count % 2 === 1 ? 'ml-6' : 'ml-4'}`}
                                            onClick={() => {
                                                setIngredientDetails({ visible: true, parameters: i });
                                            }}>
                                            <Counter extraClass={
                                                `counterIngredientCell ${countOfIngredient === 0 ? 'counterIngredientCellHide' : 'null'}`
                                            } count={countOfIngredient}
                                            ></Counter>
                                            <img className={
                                                `ml-4 ${countOfIngredient === 0? 'imageIngredient':'null'}`} src={i.image} />
                                            <div className="priceBox mt-1 mb-1">
                                                <p className="textGrey text text_type_digits-default">{i.price}</p>
                                                <CurrencyIcon></CurrencyIcon>
                                            </div>
                                            <p className="textGrey nameIngredient text text_type_main-default">{i.name.trim()}</p>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </Fragment>
                    )
                })}
            </div>
        </>
    );
};
BurgerIngredients.propTypes = {
    ingredientsList: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired
    })).isRequired,
    setSelectedIngredients: PropTypes.func
};
export default BurgerIngredients;
