export const saveAccessToken = (token) => {
  localStorage.setItem("accessToken", token.toString());
};
export const saveRefreshToken = (token) => {
  localStorage.setItem("refreshToken", token.toString());
};
export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};
export const getRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};
export const clearToken = () => {
  localStorage.clear();
};
