import React, { FC, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "@Hooks/useForm";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";
import "../auth.scss";

const Login = () => {
  const { setIsAuthenticated } = useAuth();

  const { values, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await useApi("login", "POST", values, true);
      console.log("Успешная авторизация!", response);
      resetForm();
      setTimeout(() => {
        window.location.href = "/";
      }, 0);
      setSuccessMessage("Вы успешно авторизовались!");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Ошибка авторизации:", error);
    }
  };

  return (
    <div className="auth-form__wrapper">
      <form className="auth-form" onSubmit={handleLogin}>
        <div className="auth-form__title">
          <h1>Вход</h1>
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
          Войти
        </button>

        <div className="auth-form__subtext">
          <span>Ещё нет аккаунта? </span>
          <Link to="/signup">Зарегистрируйтесь!</Link>
        </div>
      </form>

      {successMessage && (
        <div className="auth-form__success">{successMessage}</div>
      )}
    </div>
  );
};

export { Login };
