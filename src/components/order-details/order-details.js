import Modal from "../modal";
import PropTypes from 'prop-types'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import acceptIcon from "../../image/accept.png"
const OrderDetails = props => {
    return (
        <>
            <Modal visible={props.visible}>
                <div className="orderDetailsBox">
                    <div className="closeIconBoxOrderDetails mr-10 mt-15"
                        onClick={() => props.setVisible(false)}>
                        <CloseIcon />
                    </div>
                    <p className="numberOrderDetails textCenter textGrey text text_type_digits-large">123456</p>
                    <p className="textCenter textGrey text text_type_main-medium pt-8">идентификатор заказа</p>
                    <div className="doneBoxOrderDetails pt-15">
                        <img src={acceptIcon}></img>
                    </div>
                    <p className="textGrey textCenter text text_type_main-default pt-15">Ваш заказ начали готовить</p>
                    <p className="textDarkGrey textCenter text text_type_main-default pt-2">Дождитесь готовности на орбитальной станции</p>
                </div>
            </Modal>
        </>
    )
}
OrderDetails.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func

};
export default OrderDetails;