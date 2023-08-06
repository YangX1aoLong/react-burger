import { useParams } from "react-router-dom";
import Ingredient from "../components/ingredient";

export const IngredientFullPage = () => {
  const { id } = useParams();
  return <Ingredient id={id} />;
};
