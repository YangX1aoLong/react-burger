import { TMessageResponse } from "./socket";

export type TLogoutState = {
  data: TMessageResponse | null;
  error: any;
  isLoading: boolean;
};
export type TLogoutAction = {
  type: string;
  payload: TMessageResponse;
};
