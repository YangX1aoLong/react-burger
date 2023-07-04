import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import style from "./ingredient-details.module.css"
import PropTypes from 'prop-types'
import Modal from "../modal";
const IngredientDetails = props => {
    return (
        <>
            <Modal onClose={props.onClose}>
                <div className={style.ingredientDetailsBox}>
                    <div className={`${style.title} pt-10 pl-10 pr-10`}>
                        <p className="textGrey text text_type_main-large">Детали ингредиента</p>
                        <div className={style.closeIconBox}
                            onClick={() => props.onClose()}>
                            <CloseIcon />
                        </div>
                    </div>
                    <img className={style.image} src={props.parameters ? props.parameters.image_large : null}></img>
                    <p className="textCenter textGrey text text_type_main-medium">{props.parameters ? props.parameters.name : null}</p>
                    <div className={`${style.natritionBox} pt-8`}>
                        {[{ name: 'Калории,ккал', value: props.parameters ? (props.parameters.calories / 10).toString().replace('.', ',') : null },
                        { name: 'Белки, г', value: props.parameters ? (props.parameters.proteins / 10).toString().replace('.', ',') : null },
                        { name: 'Жиры, г', value: props.parameters ? (props.parameters.fat / 10).toString().replace('.', ',') : null },
                        { name: 'Углеводы, г', value: props.parameters ? (props.parameters.carbohydrates / 10).toString().replace('.', ',') : null }].map(index => {
                            return (
                                <div key={index.name} className={`${style.natrition} pl-5`}>
                                    <p className="textCenter textDarkGrey text text_type_main-default">{index.name}</p>
                                    <p className="textCenter textDarkGrey text text_type_digits-default pt-4">
                                        {index.value}
                                    </p>
                                </div>
                            )
                        })}



                    </div>
                </div>

            </Modal>
        </>
    )
};
IngredientDetails.propTypes = {
    onClose:PropTypes.func.isRequired
};
export default IngredientDetails;