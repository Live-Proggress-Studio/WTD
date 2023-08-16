import React from "react";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";
import "./main.scss";

const Main = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [userData, setUserData] = useState({ name: "", email: "" });

  const cookies = new Cookies();

  useEffect(() => {}, [isAuthenticated, cookies.get("Authorization")]);

  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <h2>Вы авторизованы как:</h2>
          <h3>{userData.email}</h3>
        </div>
      ) : (
        (window.location.href = "/login")
      )}
    </div>
  );
};

export default Main;
