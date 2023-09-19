import { RouterProvider } from 'react-router-dom';
import { default as Routing } from './Routing/Router';
import './App.scss';
import 'normalize.css';

function App() {
  return <RouterProvider router={Routing()} />;
}

export default App;
