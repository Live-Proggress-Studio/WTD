import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useAuth } from "@Hooks/useAuth";
import useApi from "@Hooks/useAPI";
import { userModel } from "@/Shared/Models/userModel";

const UserProfile = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      useApi(`users/${userModel.id}`, "GET", null, true).catch((error) => {
        console.error("Ошибка при получении данных пользователя", error);
      });
    }
  }, [isAuthenticated]);

  console.log(userModel);

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="user-profile container">
            {isAuthenticated ? (
              <div className="container">
                <p>User ID: {userModel?.email}</p>
                <p>User name: {userModel?.name || `User${userModel?.id}`}</p>
                <p>Email: {userModel?.email}</p>
                <p>CreatedAt: {userModel?.createdAt}</p>
              </div>
            ) : (
              <p>Пользователь не авторизован</p>
            )}
          </div>
        </>
      ) : (
        <>{(window.location.href = "/login")}</>
      )}
    </>
  );
};

export default UserProfile;
