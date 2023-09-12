import { TLoginResponse } from "./socket";

export type TLoginState = {
  data: TLoginResponse | null;
  error: any;
  isLoading: boolean;
};
export type TLoginAction = {
  type: string;
  payload: TLoginResponse;
};
