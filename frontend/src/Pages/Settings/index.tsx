import { Link } from "react-router-dom";
import { useAuth } from "@Hooks/useAuth";
import { CheckBoxToggler } from "@/Components";
import useApi from "@Hooks/useAPI";
import Cookies from "universal-cookie";
import { Paths } from "@/App/Routing";
import "./settings.scss";

const Settings = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const cookies = new Cookies();

    //? рпробуем удалить cookie силами React
    try {
      cookies.remove("Authorization");
    } catch (error) {
      console.error("Ошибка удаления cookie:", error);
      //? Если же способ выше не сработал и cookie "Authorization" остались, то отправляем запрос на удаление cookie на сервер
      try {
        await useApi("logout", "POST", null, true);
        setIsAuthenticated(false);
      } catch (apiError) {
        console.error("Ошибка запроса на сервере:", apiError);
      }
    }
    //? Если cookie "Authorization" были удалены, то перенаправляем пользователя на страницу входа
    window.location.href = "/login";
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="settings">
            <div className="settings__title">
              <h1>Настройки</h1>
            </div>
            <div className="settings__section">
              <div className="setion__item">
                <div className="item__title">
                  <h2>Тема</h2>
                  <div className="togglers-box">
                    <CheckBoxToggler />
                  </div>
                </div>
              </div>
              <div className="setion__item">
                <div className="item__title">
                  <h2>Сочитания клавишь</h2>
                  <div className="item-box">
                    <div className="p-20">
                      <Link to={Paths.KBMap}>Keyboard Map</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="setion__item">
                <div className="item__title">
                  <h2>Аккаунт</h2>
                  <div className="item-box">
                    <div className="p-20">
                      <Link to="/profile">Настройки аккаунта</Link>
                    </div>
                    <button
                      type="button"
                      className="button"
                      onClick={handleLogout}
                    >
                      Выйти
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="settings">{(window.location.href = "/login")}</div>
      )}
    </>
  );
};

export default Settings;
