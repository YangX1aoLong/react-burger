import { TMessageResponse } from "./socket";

export type TForgotPasswordAction = {
  type: string;
  payload: TMessageResponse;
};
export type TForgotPasswordState = {
  data: TMessageResponse | null;
  error: any;
  isLoading: boolean;
};
