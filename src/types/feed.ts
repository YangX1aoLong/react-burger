import { TFeed } from "./socket";

export type TFeedState = {
  status: string;
  connectionError: string;
  data: TFeed;
};
export type TFeedAction = {
  type: string;
  payload: TFeed;
};

export const nullTFeed = {
  success: false,
  orders: [
    {
      ingredients: [],
      _id: "",
      status: "",
      number: 0,
      createdAt: "",
      updateAt: "",
      name:"",
    },
  ],
  total: 0,
  totalToday: 0,
};
export const nullTFeedOrder = {
  ingredients: [],
  _id: "",
  status: "",
  number: 0,
  createdAt: "",
  updateAt: "",
  name:"",
};
