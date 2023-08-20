import { useState, useEffect, Suspense } from "react";
// import { Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import Header from "@/Shared/UI/Header";
import Sidebar from "@/Widgets/UI/Sidebar";
import { useAuth } from "@Hooks/useAuth";

//? Layout Component - содержит компоненты виджетов по-умолчанию, которые необходимо отображать на каждой странице
//* Components: header, sidebar

const Layout = () => {
  // @cookies
  const cookies = new Cookies();
  //@ Authorization
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  //@ Sidebar
  const savedSidebarState = JSON.parse(localStorage.getItem("sidebarVisible"));
  const [isSidebarVisible, setIsSidebarVisible] = useState(
    savedSidebarState !== null ? savedSidebarState : true
  );
  // const location = useLocation();

  useEffect(() => {
    localStorage.setItem("sidebarVisible", JSON.stringify(isSidebarVisible));
  }, [isSidebarVisible, isAuthenticated, cookies.get("Authorization")]);
  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };

  //@ Search shortcuts
  const handleSearchShortcut = () => {
    console.log("Search shortcut pressed");
  };

  return (
    <>
      <Header
        onBurgerMenuClick={toggleSidebar}
        onSearchShortcut={handleSearchShortcut}
      />
      <Sidebar
        isSidebarVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
      />

      {
      //! <Outlet /> работает только с дочерними элементами.
      //* Т.к наш роутинг не состоит из дочерних элементов в силу архитектуры - данный метод рендеринга компонентов не представляется возможным...
      /* <section className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section> */}
    </>
  );
};

export default Layout;
