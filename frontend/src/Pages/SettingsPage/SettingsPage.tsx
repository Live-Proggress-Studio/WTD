import { Link } from 'react-router-dom';
import { CheckBoxToggler } from '@/Components';
import './settingsPage.scss';

const Settings = () => {
  const logout = () => {
    console.log('Logged out!');
  };

  return (
    <>
      <>
        <div className='settings'>
          <div className='settings__title'>
            <h1>Настройки</h1>
          </div>
          <div className='settings__section'>
            <div className='setion__item'>
              <div className='item__title'>
                <h2>Тема</h2>
                <div className='togglers-box'>
                  <CheckBoxToggler />
                </div>
              </div>
            </div>
            {/* <div className="setion__item">
                <div className="item__title">
                  <h2>Сочитания клавишь</h2>
                  <div className="item-box">
                    <div className="p-20">
                      <Link to={Paths.KBMap}>Keyboard Map</Link>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className='setion__item'>
              <div className='item__title'>
                <h2>Аккаунт</h2>
                <div className='item-box'>
                  <div className='p-20'>
                    <Link to='/profile'>Настройки аккаунта</Link>
                  </div>
                  <button type='button' className='button' onClick={logout}>
                    Выйти
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* <div className="settings">{(window.location.href = "/login")}</div> */}
    </>
  );
};

export default Settings;
