import { TIngredient } from "./ingredient";

export type TOrderDetail = {
  name: string;
  order: {
    createdAt: string;
    ingredietns: TIngredient[];
    name: string;
    number: number;
    owner: {
      createdAt: string;
      email: string;
      name: string;
      updatedAt: string;
    };
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
  };
  success: boolean;
};
export type TOrderDetailAction = {
  type: string;
  payload: TOrderDetail;
};
export type TOrderDetailState = {
  data: TOrderDetail | null;
  error: any;
  isLoading: boolean;
};
