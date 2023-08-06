import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { getStorageAccessToken } from "../utils/localStorage";
export const ProtectedRouteElement = (props) => {
    const nameElement = props.children?.type?.name;
    const accessToken = getStorageAccessToken();
    if (accessToken === null && nameElement === "ProfilePage")
    return <Navigate to="/login" replace />;
    else if (accessToken !== null && (nameElement === "LoginPage" || 
    nameElement === "RegisterPage" || 
    nameElement === "ForgotPasswordPage" || 
    nameElement === "ResetPasswordPage" ))
    return <Navigate to="/" replace />; 
    else return props.children;
};
ProtectedRouteElement.propTypes = {
  children: PropTypes.object.isRequired,
};
