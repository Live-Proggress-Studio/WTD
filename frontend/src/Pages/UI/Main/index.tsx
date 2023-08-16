import React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";
import "./main.scss";

const Main = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [cookies] = useCookies(["Authorization"]);
  const [userData, setUserData] = useState({ name: "", email: "" });

  useEffect(() => {
    console.log("Updated: isAuthenticated", isAuthenticated);
    console.log("Updated: cookies.Authorization", cookies.Authorization);
  }, [isAuthenticated, cookies.Authorization]);
  
  return (
    <div className="container">
      {isAuthenticated ? (
        <div>
          <p>ВСЕ ОК!!</p>
        </div>
      ) : (
        <>
          <p>Пользователь не авторизован</p>
          <a href="/login">LOGIN</a>
          <p>{cookies.Authorization}</p>
          {console.log(cookies.Authorization)}
          
        </>
      )}
    </div>
  );
};

export default Main;
