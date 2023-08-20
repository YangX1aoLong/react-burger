import { TIngredient } from "../types";

const urlData = "https://norma.nomoreparties.space/api";

type TServerResopnse<T> = {
  success: boolean;
} & T;

type TIngredientsResponse = TServerResopnse<{ data: TIngredient[] }>;
type TAuthResponse = TServerResopnse<{ user: { email: string; name: string } }>;
type TMessageResponse = TServerResopnse<{ message: string }>;
type TTokenResponse = TServerResopnse<{
  accessToken: string;
  refreshToken: string;
}>;
type TLoginResponse = TTokenResponse & TAuthResponse;
type TOrderResponse = TServerResopnse<{
  name: string;
  order: {
    number: number;
  };
}>;

const checkReponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchIngredients = async (): Promise<TIngredientsResponse> => {
  const res = await fetch(`${urlData}/ingredients`);
  const data = await checkReponse(res);
  if (data?.success) return data.data;
  return Promise.reject(data);
};

export const fetchGetAuth = async (token: string): Promise<TAuthResponse> => {
  const res = await fetch(`${urlData}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchUpdateAuth = async (
  token: string,
  name: string | null,
  email: string | null,
  passowrd: string | null
): Promise<TAuthResponse> => {
  const res = await fetch(`${urlData}/auth/user?authorization=${token}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: token,
    },
    body: JSON.stringify({
      name: name,
      email: email,
      passowrd: passowrd,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchForgotPassword = async (
  email: string
): Promise<TMessageResponse> => {
  const res = await fetch(`${urlData}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchResetPassword = async (
  password: string,
  token: string
): Promise<TMessageResponse> => {
  const res = await fetch(`${urlData}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchRegistration = async (
  email: string,
  password: string,
  name: string
): Promise<TLoginResponse> => {
  const res = await fetch(`${urlData}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchLogin = async (
  email: string,
  password: string
): Promise<TLoginResponse> => {
  const res = await fetch(`${urlData}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchLogout = async (
  refreshToken: string
): Promise<TMessageResponse> => {
  const res = await fetch(`${urlData}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchRefreshToken = async (
  refreshToken: string
): Promise<TTokenResponse> => {
  const res = await fetch(`${urlData}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  });
  const data = await checkReponse(res);
  if (data?.success) return data;
  return Promise.reject(data);
};

export const fetchOrder = async (data: string): Promise<TOrderResponse> => {
  const res = await fetch(`${urlData}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  });
  const data_1 = await checkReponse(res);
  console.log(data_1);
  if (data_1?.success) return data_1;
  return Promise.reject(data_1);
};
