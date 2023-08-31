import { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '@/App/Routing';
import { useForm } from '@Hooks/useForm';
import { useAuth } from '@Hooks/useAuth';
import useApi from '@Hooks/useAPI';
import { ResponseData } from '@/Shared/Interfaces';
import { ToastContainer } from 'react-toastify';
import { notification } from '@/Features';
import '../auth.scss';

const Login: FC = () => {
  const { setIsAuthenticated } = useAuth();

  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    //@ Валидация полей
    if (!values.email || !values.password) {
      notification.warn('Пожалуйста, заполните все поля!');
      return;
    }

    try {
      const response = (await useApi(
        'login',
        'POST',
        values,
        true
      )) as ResponseData;
      localStorage.setItem('userdata', JSON.stringify(response.message));

      // console.log(response.message);

      console.log('Успешная авторизация!', response);
      notification.success('Успешная авторизация!');
      resetForm();
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      notification.error(`Ошибка авторицации!\n${error}`);
    }
  };

  return (
    <div className='auth-form__wrapper'>
      <form className='auth-form' onSubmit={handleLogin}>
        <div className='auth-form__title'>
          <h1>Вход</h1>
        </div>
        <div className='auth-form__box'>
          <div className='auth-form__input'>
            <input
              type='text'
              className='auth-form__input'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Введитие ваш Email'
            />
          </div>
          <div className='auth-form__input'>
            <input
              type='password'
              className='auth-form__input'
              name='password'
              value={values.password}
              onChange={handleChange}
              placeholder='Введитие ваш пароль'
            />
          </div>
        </div>
        <button type='submit' className='btn auth-btn'>
          Войти
        </button>

        <div className='auth-form__subtext'>
          <span>Ещё нет аккаунта? </span>
          <Link to={Paths.Signup}>Зарегистрируйтесь!</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
