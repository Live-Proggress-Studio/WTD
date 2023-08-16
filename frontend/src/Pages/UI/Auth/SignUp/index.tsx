import React, { FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@Hooks/useForm";
import useApi from "@Hooks/useAPI";
import "../auth.scss";

const SignUP: FC = () => {
  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null); // Добавляем состояние для ошибки

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();
  
    //@ Валидация полей
    if (!values.email || !values.password) {
      setError("Пожалуйста, заполните все поля");
      return;
    }
  
    try {
      const response = await useApi("signup", "POST", values);
      console.log("Успешная регистрация!", response);
      resetForm();
      setError(null);
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      if (error.message === "Пользователь с таким email уже существует") {
        setError("Пользователь с таким email уже существует");
      } else {
        setError("Ошибка регистрации: " + error.message);
      }
    }
  };

  return (
    <div className="auth-form__wrapper">
      <form className="auth-form" onSubmit={handleRegister}>
        <div className="auth-form__title">
          <h1>Регистрация</h1>
        </div>
        <div className="auth-form__box">
          <div className="auth-form__input">
            <input
              type="text"
              className="auth-form__input"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Введитие ваш Email"
            />
          </div>
          <div className="auth-form__input">
            <input
              type="password"
              className="auth-form__input"
              name="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Введитие ваш пароль"
            />
          </div>
        </div>
        <button type="submit" className="btn auth-btn">
          Зарегистрироваться
        </button>

        <div className="auth-form__subtext">
          <span>Уже есть аккаунт? </span>
          <Link to="/login">Войдите!</Link>
        </div>
        {error && <div className="auth-form__error">{error}</div>}

      </form>
    </div>
  );
};

export { SignUP };
