import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import App from './App/App';
import './main.scss';
import { ThemeProvider } from './App/Providers/ThemeProvider';
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CookiesProvider>
  </React.StrictMode>
);
