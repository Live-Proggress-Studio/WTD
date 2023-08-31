import { FC, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '@App/Routing';
import { useForm } from '@Hooks/useForm';
import useApi from '@Hooks/useAPI';
import { ToastContainer } from 'react-toastify';
import { notification } from '@/Features';
import '../auth.scss';

const SignUP: FC = () => {
  const { values, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();

    //@ Валидация полей
    if (!values.email || !values.password) {
      notification.warn('Пожалуйста, заполните все поля!');
      return;
    }

    try {
      const response = await useApi('signup', 'POST', values, true);
      console.log('Успешная регистрация!', response);
      notification.success('Успешная регистрация!');
      resetForm();
      setTimeout(() => {
        window.location.href = `${Paths.Login}`;
      }, 1000);
    } catch (error: any) {
      console.error('Ошибка регистрации:', error);
      if (error.message === 'Пользователь с таким email уже существует') {
        notification.warn('Пользователь с таким email уже существует!');
      } else {
        notification.error(`Ошибка регистрации: ${error.message}`);
      }
    }
  };

  return (
    <div className='auth-form__wrapper'>
      <form className='auth-form' onSubmit={handleRegister}>
        <div className='auth-form__title'>
          <h1>Регистрация</h1>
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
        <button className='btn auth-btn'>Зарегистрироваться</button>

        <div className='auth-form__subtext'>
          <span>Уже есть аккаунт? </span>
          <Link to={Paths.Login}>Войдите!</Link>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default SignUP;
