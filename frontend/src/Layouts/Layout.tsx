import { Sidebar } from '@/Layouts';
import { Outlet } from 'react-router-dom';
import './Layout.scss'
//? Layout Component - содержит компоненты виджетов по-умолчанию, которые необходимо отображать на каждой странице
//* Components: header, sidebar

const Layout = () => {
  return (
      <div className='flex__container'>
        <Sidebar/>
        <Outlet/>
      </div>
  );
};

export {Layout};
