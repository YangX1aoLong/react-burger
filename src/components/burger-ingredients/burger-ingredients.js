import { Fragment, useState, useEffect } from "react";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components"
import PropTypes from 'prop-types'
import IngredientDetails from "../ingredient-details";
import style from "./burger-ingredients.module.css";
const BurgerIngredients = props => {
    const ingredientsTypes = [
        { name: 'Булки', type: 'bun' },
        { name: 'Соусы', type: 'sauce' },
        { name: 'Начинки', type: 'main' }];
    const [current, setCurrent] = useState(ingredientsTypes[0].type);
    const [details, setDetails] = useState({ visible: false, data: null });
    const setDetailsOpen = () => {
        setDetails({ ...details, visible: true });
    };
    const setDetailsClose = () => {
        setDetails({ ...details, visible: false });
    };
    return (
        <>
            {details.visible && (<IngredientDetails
                onClose={setDetailsClose}
                parameters={details.data}
            />)}
            <div className={`${style.burgerIngredients} mt-10`}>

                <p className="textGrey text text_type_main-large"> Соберите бургер</p>
                <div className={`${style.tabs} mt-5`}>
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
                            <div className={`${style.ingredientCell} mt-6`}>
                                {props.ingredientsList.filter(ingredient => ingredient.type === index.type).map((i, count) => {
                                    const select = props.selectedIngredients.find(j => j._id === i._id);
                                    const countOfIngredient = select !== undefined && select.hasOwnProperty('count') ? select.count : 0;
                                    return (
                                        <div key={i._id} className={`${count % 2 === 1 ? 'ml-6' : 'ml-4'}`}
                                            onClick={() => {
                                                setDetails({ visible: true, data: i });
                                            }}>
                                            <Counter extraClass={
                                                `${style.counterIngredientCell} ${countOfIngredient === 0 ? style.counterIngredientCellHide : 'null'}`
                                            } count={countOfIngredient}
                                            />
                                            <img className={
                                                `ml-4 ${countOfIngredient === 0 ? style.imageIngredient : 'null'}`} src={i.image} />
                                            <div className={`${style.priceBox} mt-1 mb-1`}>
                                                <p className="textGrey text text_type_digits-default">{i.price}</p>
                                                <CurrencyIcon />
                                            </div>
                                            <p className={`${style.nameIngredient} textGrey text text_type_main-default`}>{i.name.trim()}</p>
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
    setSelectedIngredients: PropTypes.func.isRequired,
    selectedIngredients: PropTypes.arrayOf(PropTypes.shape({
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
        __v: PropTypes.number.isRequired,
        count: PropTypes.number
    })).isRequired
};
export default BurgerIngredients;
