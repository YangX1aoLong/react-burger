import { TMessageResponse } from "./socket";

export type TResetPasswordState = {
  data: TMessageResponse | null;
  error: any;
  isLoading: boolean;
};
export type TResetPasswordAction = {
  type: string;
  payload: TMessageResponse;
};
