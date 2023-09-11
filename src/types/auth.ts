import { TAuthResponse } from "./socket";

export type TAuthAction = {
  type: string;
  payload: TAuthResponse;
}
