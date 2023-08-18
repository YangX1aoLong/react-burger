import { Navigate, useLocation } from "react-router-dom";
import { getStorageAccessToken } from "../utils/local-storage";
import { ReactNode } from "react";
interface Props {
  children?: ReactNode;
}
export const ProtectedRouteElement = (props: Props) => {
  const location = useLocation().pathname;
  const accessToken = getStorageAccessToken();
  if (accessToken === null && location === "/profile")
    return <Navigate to="/login" replace />;
  else if (accessToken !== null && (location === "/login" ||
    location === "/register" ||
    location === "/forgot-password" ||
    location === "/reset-password"))
    return <Navigate to="/" replace />;
  else return <div>{props.children}</div>;
};

