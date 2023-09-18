import { Paths } from '@/App/Routing'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { Link, useLocation } from 'react-router-dom'
// import { useHttp } from '@/Utils/Hooks/http.hook'
// import ky from 'ky'
import { request } from '@/Utils/Hooks/useApi'


import './LoginForm.scss'
import { notification } from '..'
type Inputs = {
    name: string
    email: string
    password: string
}

const LoginForm = () => {

  // const {request} = useHttp()
  const local = useLocation()
  const isLogin = local.pathname === Paths.Signup

  const {
      register,
      handleSubmit,
      formState: {errors}
    } = useForm<Inputs>({mode: 'onBlur'})


    const onRegister:  SubmitHandler<Inputs> = async (data) => {
      try {
        const response = await request("signup", "POST", data, true )
        console.log('Успешная регистрация!', response);
        notification.success('Успешная регистрация!');
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error('Ошибка регистрации:', error);
          if (error.message === 'Пользователь с таким email уже существует') {
            notification.warn('Пользователь с таким email уже существует!');
          } else {
            notification.error(`Ошибка регистрации: ${error.message}`);
          }
        }
      }
    }
    
    const onLogin:  SubmitHandler<Inputs> = async (data) => {
      try {
        const response = await request('login','POST',data) ;
        // localStorage.setItem('userdata', JSON.stringify(response.message));
        console.log('Успешная авторизация!', response);
        notification.success('Успешная авторизация!');
      } catch (error) {
        console.error('Ошибка авторизации:', error);
        notification.error(`Ошибка авторицации!\n${error}`);
      }
    }
    



  return (
    <div className='LoginForm-wrapper'>
        <div className="LoginForm-title">Waht to Do?</div>
        <form className="LoginForm" onSubmit={handleSubmit(isLogin ? onRegister : onLogin)}>
        {isLogin && 
          <>
              <input className="LoginForm-emal" placeholder='Your name' {...register("name", {
              min: 2,
            })} />
            <div className="Form-error">
                  {errors?.name && (
                  <p>{errors?.name?.message || "Ошибка!"}</p>
                  )}
            </div>
          </>
        }
        <input className="LoginForm-emal" placeholder='Email'  
        {...register("email", {
          // required: "Введите ваш email!",
          pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        })} />
          <div className="Form-error">
              {errors?.email && (
              <p>{errors?.email?.message || "Ошибка!"}</p>
              )}
          </div>
        <input {...register("password", {min: 2,})} className="LoginForm-password" placeholder='Password' type='password' />
            <div className='LoginForm-subtext'>
                {isLogin ? 
                <>
                  <span>Хотите войти в аккаунт? </span>
                  <Link to={Paths.Login}>Войти!</Link>
                </>
                :
                <>
                  <span>Ещё нет аккаунта? </span>
                  <Link to={Paths.Signup}>Зарегистрируйтесь!</Link>
                </>
              }
              </div>
            <button className="LoginForm-submit" type="submit">{isLogin ? "Зарегестрироваться" : "Войти"}</button>
      </form>
    </div>
  )
}

export {LoginForm}