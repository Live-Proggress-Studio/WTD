import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/Layouts';
import './Layout.scss';
//? Layout Component - содержит компоненты виджетов по-умолчанию, которые необходимо отображать на каждой странице

const Layout = () => {
  return (
    <div className='flex__container'>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export { Layout };
