import { TAuthResponse } from "./socket";

export type TAuthAction = {
  type: string;
  payload: TAuthResponse;
}
export type TAuthState = {
  data: TAuthResponse | null;
  error: any;
  isLoading: boolean;
};