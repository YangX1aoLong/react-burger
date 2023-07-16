import Modal from "../modal";
import PropTypes from "prop-types";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import acceptIcon from "../../image/accept.png";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../services/actions/order-detail";
import { useEffect } from "react";
const OrderDetails = (props) => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector((store) => store.burgerConstructor);
  useEffect(() => {
    let buns = [];
    if (selectedIngredients.bun._id)
      buns = [selectedIngredients.bun._id, selectedIngredients.bun._id];
    dispatch(
      getOrder([
        ...selectedIngredients.mains.map((i) => {
          return i._id;
        }),
        ...buns,
      ])
    );
  }, []);

  const orderDetails = useSelector((store) => store.orderDetail);
    useEffect(()=>{
      console.log(orderDetails.data);
    })
  return (
    <>
      <Modal onClose={props.onClose}>
        <div className="orderDetailsBox">
          <div
            className="closeIconBoxOrderDetails mr-10 mt-15"
            onClick={() => props.onClose()}
          >
            <CloseIcon />
          </div>
          <p className="numberOrderDetails textCenter textGrey text text_type_digits-large">
            {orderDetails?.data?.order?.number}
          </p>
          <p className="textCenter textGrey text text_type_main-medium pt-8">
            идентификатор заказа
          </p>
          <div className="doneBoxOrderDetails pt-15">
            <img src={acceptIcon} alt="" />
          </div>
          <p className="textGrey textCenter text text_type_main-default pt-15">
            Ваш заказ начали готовить
          </p>
          <p className="textDarkGrey textCenter text text_type_main-default pt-2">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </Modal>
    </>
  );
};
OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default OrderDetails;
