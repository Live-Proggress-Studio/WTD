import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import { notification } from "..";
import { request } from "@/Services/userApi/useApi";
import { Paths } from "@App/Routing";
import { APP } from "@Utils/Constants/variables";
import "./LoginForm.scss";
import { IInputs } from "./Interface/IInputs";
import Cookies from 'universal-cookie';
import { months } from "moment";
// import { useUserStore } from '@/Stores';



const LoginForm = () => {
  // const { request } = useHttp();
  const local = useLocation();
  const { t } = useTranslation();

  const isSignUp = local.pathname === Paths.Signup;

  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>({ mode: "onBlur" });

  const onRegister: SubmitHandler<IInputs> = async (data) => {
    try {
      const response = await request("signup", "POST", data, true);
      console.log("Успешная регистрация!", response);
      notification.success(t("main.auth.notifications.signupsuccess"));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Ошибка регистрации:", error);
        if (error.message === "Пользователь с таким email уже существует") {
          notification.warn(t("main.auth.notifications.gotemail"));
        } else {
          notification.error(`Ошибка регистрации: ${error.message}`);
        }
      }
    }
  };

  const onLogin: SubmitHandler<IInputs> = async (data) => {
    try {
      const response = await request("login", "POST", data, true);
      console.log(response);
      notification.success(t("main.auth.notifications.loginsuccess"));
    } catch (error) {
      notification.error(
        `${t("main.auth.notifications.loginerror")}\n${error}`
      );
    }
  };

  return (
    <div className="LoginForm-wrapper">
      <div className="LoginForm-title">{APP.FULLNAME}</div>
      <form
        className="LoginForm"
        onSubmit={handleSubmit(isSignUp ? onRegister : onLogin)}
      >
        {isSignUp && (
          <>
            <input
              className="LoginForm-email"
              placeholder={t("main.auth.name")}
              {...register("name", {
                min: 2,
              })}
            />
            <div className="Form-error">
              {errors?.name && (
                <p>{errors?.name?.message || t("main.auth.errors.error")}</p>
              )}
            </div>
          </>
        )}
        <input
          className="LoginForm-email"
          placeholder={t("main.auth.email")}
          {...register("email", {
            required: t('main.auth.validate.email'),
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
        />
        <div className="Form-error">
          {errors?.email && (
            <p>{errors?.email?.message || t("main.errors.error")}</p>
          )}
        </div>
        <input
          {...register("password", { min: 2 })}
          className="LoginForm-password"
          placeholder={t("main.auth.password")}
          type="password"
        />
        <div className="LoginForm-subtext">
          {isSignUp ? (
            <>
              <span>{t("main.auth.whanttologin")} </span>
              <Link to={Paths.Login}>{t("main.auth.login")}</Link>
            </>
          ) : (
            <>
              <span>{t("main.auth.whanttoreg")} </span>
              <Link to={Paths.Signup}>{t("main.auth.register")}</Link>
            </>
          )}
        </div>
        <button className="LoginForm-submit" type="submit">
          {isSignUp ? t("main.buttons.signup") : t("main.buttons.login")}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export { LoginForm };
