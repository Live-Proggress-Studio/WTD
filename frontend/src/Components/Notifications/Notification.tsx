import { FC } from 'react';
import {
  ToastContainer,
  toast,
  ToastOptions,
  ToastPosition,
} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const currTheme = localStorage.getItem('selectedTheme');

const defaultToastOptions: ToastOptions<{}> = {
  position: 'bottom-right' as ToastPosition,
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  //@ts-ignore
  theme: currTheme,
};

type ToastType = 'success' | 'info' | 'warn' | 'error';

const notify = (message: string, type: ToastType) =>
  toast[type](message, defaultToastOptions);

export const notification = {
  success: (message: string) => notify(message, 'success'),
  info: (message: string) => notify(message, 'info'),
  warn: (message: string) => notify(message, 'warn'),
  error: (message: string) => notify(message, 'error'),
};

const Notification: FC = () => {
  const handleClick = () => {
    notification.success('Успешное уведомление');
  };

  return (
    <div style={{ marginTop: '100px', marginLeft: '100px' }}>
      <button onClick={handleClick}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export { Notification };
