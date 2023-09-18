// import { default as Layout } from "../Layouts/Layout";
import { default as Routing } from './Routing/Router';
import 'normalize.css';
import './App.scss';
import { RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={Routing()} />;
}

export default App;
