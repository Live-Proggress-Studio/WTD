import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useApi"; // Обратите внимание на правильное название импорта

const UserProfile = () => {
  const { isAuthenticated } = useAuth();
  const [userData, setUserData] = useState({ name: "", email: "" });

  const cookies = new Cookies();

  const userID = localStorage.getItem("ID")

  useEffect(() => {
    if (isAuthenticated) {
      useApi(`users/${userID}`, "GET", null, true) 
        .then((response) => {
          setUserData(response.user);
        })
        .catch((error) => {
          console.error("Ошибка при получении данных пользователя", error);
        });
    }
  }, [isAuthenticated]);

  return (
    <div className="user-profile container">
      {isAuthenticated ? (
        <div className="container">
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <p>Пользователь не авторизован</p>
      )}
    </div>
  );
};

export default UserProfile;
