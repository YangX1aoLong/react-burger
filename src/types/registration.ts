import { TTokenResponse } from "./socket";

export type TRegistrationAction = {
  type: string;
  payload: TTokenResponse;
};
export type TRegistrationState = {
  data: TTokenResponse | null;
  error: any;
  isLoading: boolean;
};
