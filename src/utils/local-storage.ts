export const saveStorageAccessToken = (token: string) => {
  localStorage.setItem("accessToken", token.toString());
};
export const saveStorageRefreshToken = (token: string) => {
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