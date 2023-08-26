import { useAuth } from "@Hooks/useAuth";
import "./main.scss";

const Main = () => {
  const isAuthenticated = useAuth();

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h5>Вы авторизованы</h5>
        </div>
      ) : (
        (window.location.href = "/login")
      )}
    </div>
  );
};

export default Main;
