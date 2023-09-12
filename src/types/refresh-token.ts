import { TTokenResponse } from "./socket";

export type TRefreshTokenState = {
  data: TTokenResponse | null;
  error: any;
  isLoading: boolean;
};

export type TRefreshTokenAction = {
  type: string;
  payload: TTokenResponse;
};
