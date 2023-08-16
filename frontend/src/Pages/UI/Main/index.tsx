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
          <h5>Вы авторизованы</h5>
          <h5>{userData.email}</h5>
        </div>
      ) : (
        (window.location.href = "/login")
      )}
    </div>
  );
};

export default Main;
