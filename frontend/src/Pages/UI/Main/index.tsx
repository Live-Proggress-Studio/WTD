import React from "react";
import { useEffect, useState } from "react";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";
import "./main.scss";

const Main = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [userData, setUserData] = useState({ name: "", email: "" });
  

  useEffect(() => {}, [isAuthenticated]);

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
