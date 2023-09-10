import { useEffect } from 'react';
import AppHeader from '../app-header';
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { Route, Routes, useLocation, } from 'react-router-dom';
import { MainPage } from '../../pages/main-page';
import { NotFoundPage } from '../../pages/not-found-page';
import { LoginPage } from '../../pages/login-page';
import { RegisterPage } from '../../pages/register-page';
import { ForgotPasswordPage } from '../../pages/forgot-passoword-page';
import { ResetPasswordPage } from '../../pages/reset-password-page';
import { ProfilePage } from '../../pages/profile-page';
import { IngredientFullPage } from '../../pages/ingrediet-full-page';
import { ProtectedRouteElement } from '../../pages/protected-route-element';
import IngredientDetails from '../ingredient-details';
import { FeedPage } from '../../pages/feed-page';
import { FeedOrderPage } from '../../pages/feed-order-page';
import { feedIdPath, feedPath, forgotPassowrdPath, ingredietnsPath, loginPath, otherPath, profilePath, registerPath, resetPasswordPath, rootPath } from '../../utils/routes';
import { FeedOrderPageModal } from '../../pages/feed-order-page-modal';

function App() {
  const dispatch = useDispatch()<any>;
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])
  let location = useLocation();


  const state = location.state as { backgroundLocation?: Location };
  return (
    <>
      <AppHeader />
      <Routes location={state?.backgroundLocation || location}>
        <Route path={rootPath} element={<ProtectedRouteElement><MainPage /></ProtectedRouteElement>} />
        <Route path={loginPath} element={<ProtectedRouteElement><LoginPage /></ProtectedRouteElement>} />
        <Route path={registerPath} element={<ProtectedRouteElement><RegisterPage /></ProtectedRouteElement>} />
        <Route path={forgotPassowrdPath} element={<ProtectedRouteElement><ForgotPasswordPage /></ProtectedRouteElement>} />
        <Route path={resetPasswordPath} element={<ProtectedRouteElement><ResetPasswordPage /></ProtectedRouteElement>} />
        <Route path={ingredietnsPath} element={<ProtectedRouteElement><IngredientFullPage /></ProtectedRouteElement>} />
        <Route path={profilePath} element={<ProtectedRouteElement><ProfilePage /></ProtectedRouteElement>} />
        <Route path={feedIdPath} element={<ProtectedRouteElement><FeedOrderPage /></ProtectedRouteElement>} />
        <Route path={feedPath} element={<ProtectedRouteElement><FeedPage /></ProtectedRouteElement>} />
        <Route path={otherPath} element={<NotFoundPage />} />
      </Routes>
      {
        state?.backgroundLocation && (
          <Routes>
            <Route path={ingredietnsPath} element={<IngredientDetails />} />
            <Route path={feedIdPath} element={<FeedOrderPageModal/>}/>
          </Routes>
        )
      }

    </>
  );
}

export default App;
