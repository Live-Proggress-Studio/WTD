import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { notification } from '..';
import { request } from '@Utils/Hooks/useApi';
import { Paths } from '@App/Routing';
import { APP } from '@Utils/Constants/variables';
import './LoginForm.scss';

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const LoginForm = () => {
  // const {request} = useHttp()
  const local = useLocation();
  const isLogin = local.pathname === Paths.Signup;
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onBlur' });

  const onRegister: SubmitHandler<Inputs> = async (data) => {
    //@ Валидация полей
    if (!data.email || !data.password) {
      notification.warn(t('main.auth.notifications.feelrows'));
      return;
    }

    try {
      const response = await request('signup', 'POST', data, true);
      console.log('Успешная регистрация!', response);
      notification.success(t('main.auth.notifications.signupsuccess'));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Ошибка регистрации:', error);
        if (error.message === 'Пользователь с таким email уже существует') {
          notification.warn(t('main.auth.notifications.gotemail'));
        } else {
          notification.error(`Ошибка регистрации: ${error.message}`);
        }
      }
    }
  };

  const onLogin: SubmitHandler<Inputs> = async (data) => {
    //@ Валидация полей
    if (!data.email || !data.password) {
      notification.warn(t('main.auth.notifications.signupsuccess'));
      return;
    }

    try {
      const response = await request('login', 'POST', data);
      // localStorage.setItem('userdata', JSON.stringify(response.message));
      console.log('Успешная авторизация!', response);
      notification.success(t('main.auth.notifications.loginsuccess'));
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      notification.error(
        `${t('main.auth.notifications.loginerror')}\n${error}`
      );
    }
  };

  return (
    <div className='LoginForm-wrapper'>
      <div className='LoginForm-title'>{APP.FULLNAME}</div>
      <form
        className='LoginForm'
        onSubmit={handleSubmit(isLogin ? onRegister : onLogin)}
      >
        {isLogin && (
          <>
            <input
              className='LoginForm-email'
              placeholder={t('main.auth.name')}
              {...register('name', {
                min: 2,
              })}
            />
            <div className='Form-error'>
              {errors?.name && (
                <p>{errors?.name?.message || t('main.auth.errors.error')}</p>
              )}
            </div>
          </>
        )}
        <input
          className='LoginForm-email'
          placeholder={t('main.auth.email')}
          {...register('email', {
            // required: t('main.auth.validate.email'),
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        <div className='Form-error'>
          {errors?.email && (
            <p>{errors?.email?.message || t('main.errors.error')}</p>
          )}
        </div>
        <input
          {...register('password', { min: 2 })}
          className='LoginForm-password'
          placeholder={t('main.auth.password')}
          type='password'
        />
        <div className='LoginForm-subtext'>
          {isLogin ? (
            <>
              <span>{t('main.auth.whanttologin')} </span>
              <Link to={Paths.Login}>{t('main.auth.login')}</Link>
            </>
          ) : (
            <>
              <span>{t('main.auth.whanttoreg')} </span>
              <Link to={Paths.Signup}>{t('main.auth.register')}</Link>
            </>
          )}
        </div>
        <button className='LoginForm-submit' type='submit'>
          {isLogin ? t('main.buttons.signup') : t('main.buttons.login')}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export { LoginForm };
