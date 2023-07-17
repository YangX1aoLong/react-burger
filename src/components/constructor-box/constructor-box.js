import { useDrag } from "react-dnd/dist/hooks";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./constructor-box.module.css";
import {
  deleteIngredient,
  sortIngredient,
} from "../../services/actions/burger-constructor";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd/dist/hooks";
import { useRef } from "react";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
const ConstructorBox = (props) => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: "consturctorElement",
    item: { ingredient: props.element },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: "consturctorElement",
    hover: (item, monitor) => {
      const ingredient = item.ingredient;
      const hoverIngredient = props.element;
      if (ingredient === hoverIngredient) return;
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (ingredient < hoverIngredient && hoverClientY < hoverMiddleY) return;
      if (ingredient > hoverIngredient && hoverClientY > hoverMiddleY) return;
      dispatch(sortIngredient(ingredient, hoverIngredient));
     },
  });
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className={`${style.elementBoxBurgerConstructor} ${props.interval}`}
      style={{ ...style, opacity: isDragging ? 0 : 1 }}
    >
      <div className={`${style.dragIcon} pt-7`}>
        <DragIcon />
      </div>
      <div className={`${style.elemetBurgerConstructor} pl-6`}>
        <ConstructorElement
          text={props.element.name}
          price={props.element.price}
          thumbnail={props.element.image}
          handleClose={() => {
            dispatch(deleteIngredient(props.element.id));
          }}
        />
      </div>
    </div>
  );
};
ConstructorBox.propTypes = {
  interval: PropTypes.string.isRequired,
  element: ingredientPropType,  
};

export default ConstructorBox;
