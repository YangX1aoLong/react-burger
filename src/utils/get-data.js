const urlData = "https://norma.nomoreparties.space/api";
export const fetchIngredients = () => {
  return fetch(`${urlData}/ingredients`)
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
};

export const fetchGetAuth = (token) => {
  return fetch(`${urlData}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchUpdateAuth = (token,name,email,passowrd) => {
  return fetch(`${urlData}/auth/user?authorization=${token}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: token,
    },
    body: JSON.stringify({
      name:name,
      email:email,
      passowrd:passowrd,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const fetchForgotPassword = (email) => {
  return fetch(`${urlData}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchResetPassword = (password, token) => {
  return fetch(`${urlData}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      password: password,
      token: token,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchRegistration = (email, password, name) => {
  return fetch(`${urlData}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchLogin = (email, password) => {
  return fetch(`${urlData}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchLogout = (refreshToken) => {
  return fetch(`${urlData}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchRefreshToken = (refreshToken) => {
  return fetch(`${urlData}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: refreshToken,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const fetchOrder = (data) => {
  return fetch(`${urlData}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      ingredients: data,
    }),
  })
    .then(checkReponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};
