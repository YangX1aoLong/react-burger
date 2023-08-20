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
import { TIngredientConstructor, TItemIngredient } from "../../types";
import { XYCoord } from "react-dnd";

type Props = {
  interval: string;
  element: TIngredientConstructor
}
const ConstructorBox = (props: Props) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: "consturctorElement",
    item: { ingredient: props.element },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "consturctorElement",
    hover: (item: TItemIngredient, monitor) => {
      const ingredient = item.ingredient;
      const hoverIngredient = props.element;
      if (ingredient === hoverIngredient) return;
      const hoverBoundingRect: DOMRect | undefined = ref.current?.getBoundingClientRect();
      if (hoverBoundingRect !== undefined) {
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset: XYCoord | null = monitor.getClientOffset();
        const hoverClientY = Number(clientOffset?.y) - hoverBoundingRect.top;
        if (ingredient < hoverIngredient && hoverClientY < hoverMiddleY) return;
        if (ingredient > hoverIngredient && hoverClientY > hoverMiddleY) return;
        dispatch(sortIngredient(ingredient, hoverIngredient));
      }
    }
  });
  drag(drop(ref));
  return (
    <div
      ref={ref}
      className={`${style.elementBoxBurgerConstructor} ${props.interval}`}
      style={{ ...style, opacity: isDragging ? 0 : 1 }}
    >
      <div className={`${style.dragIcon} pt-7`}>
        <DragIcon type="primary" />
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


export default ConstructorBox;
