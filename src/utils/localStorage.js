export const saveStorageAccessToken = (token) => {
  localStorage.setItem("accessToken", token.toString());
};
export const saveStorageRefreshToken = (token) => {
  localStorage.setItem("refreshToken", token.toString());
};
export const getStorageAccessToken = () => {
  return localStorage.getItem("accessToken");
};
export const getStorageRefreshToken = () => {
  return localStorage.getItem("refreshToken");
};
export const clearStorage = () => {
  localStorage.clear();
};
