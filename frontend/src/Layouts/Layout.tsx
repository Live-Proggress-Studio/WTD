import { Header, Sidebar } from '@/Layouts';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './Layout.scss'
//? Layout Component - содержит компоненты виджетов по-умолчанию, которые необходимо отображать на каждой странице
//* Components: header, sidebar

const Layout = () => {



  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);


  const toggleSidebar = () => {
    setIsSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  };


  return (
    <>
      <Header
      onBurgerMenuClick={toggleSidebar}
      />
      <div className='flex__container'>
        <Sidebar
        isSidebarVisible={isSidebarVisible}
        />
        <Outlet/>
      </div>
    </>
  );
};

export {Layout};
