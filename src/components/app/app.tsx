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
        <Route path='/' element={<ProtectedRouteElement><MainPage /></ProtectedRouteElement>} />
        <Route path='/login' element={<ProtectedRouteElement><LoginPage /></ProtectedRouteElement>} />
        <Route path='/register' element={<ProtectedRouteElement><RegisterPage /></ProtectedRouteElement>} />
        <Route path='/forgot-password' element={<ProtectedRouteElement><ForgotPasswordPage /></ProtectedRouteElement>} />
        <Route path='/reset-password' element={<ProtectedRouteElement><ResetPasswordPage /></ProtectedRouteElement>} />
        <Route path='/ingredients/:id' element={<ProtectedRouteElement><IngredientFullPage /></ProtectedRouteElement>} />
        <Route path='/profile' element={<ProtectedRouteElement><ProfilePage /></ProtectedRouteElement>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {
        state?.backgroundLocation && (
          <Routes>
            <Route path="/ingredients/:id" element={<IngredientDetails />} />
          </Routes>
        )
      }

    </>
  );
}

export default App;
