import { useEffect } from 'react';
import AppHeader from '../app-header';
import { useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/ingredients";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {MainPage} from '../../pages/main-page';
import {NotFoundPage} from '../../pages/not-found-page';
import {LoginPage} from '../../pages/login-page';
import {RegisterPage} from '../../pages/register-page';
import {ForgotPasswordPage} from '../../pages/forgot-passoword-page';
import {ResetPasswordPage} from '../../pages/reset-password-page';
import {ProfilePage} from '../../pages/profile-page';
import {IngredientFullPage} from '../../pages/ingrediet-full-page';

function App() {
  const dispatch = useDispatch()<any>;
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <>
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/ingredients/:id' element={<IngredientFullPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
