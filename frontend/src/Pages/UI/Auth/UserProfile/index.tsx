import React from "react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";

const UserProfile = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [userData, setUserData] = useState({ name: "", email: "" });

  const cookies = new Cookies();

  useEffect(() => {
    cookies.get("Authorization");
  }, [isAuthenticated]);

  return (
    <div className="user-profile container">
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
