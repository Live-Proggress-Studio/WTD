import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";


const UserProfile = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [cookies] = useCookies(["Authorization"]);
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    // Если куки истек, выход пользователя из аккаунта
    if (!cookies.Authorization) {
      setIsAuthenticated(false);
    }

    // Здесь можно загрузить данные пользователя из API и установить их в state
    // Например, с помощью useApi и useEffect
    // Пример: useApi("user-profile", "GET").then((data) => setUserData(data));
  }, [cookies.Authorization, setIsAuthenticated]);

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <p>Имя пользователя: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Пользователь не авторизован</p>
      )}
    </div>
  );
};

export default UserProfile;
