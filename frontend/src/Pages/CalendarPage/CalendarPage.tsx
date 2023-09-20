import { useTranslation } from 'react-i18next';
import "./CalendarPage.scss";

const CalendarPage = () => {

  const { t } = useTranslation();
  
  const divs = Array.from({ length: 100 }, (_, index) => (
    <div className="CalendarPage__wrapper-box" key={index}> {t('calendar.day')} {index + 1}</div>
  ));

  return (
      <div className="CalendarPage">
        <div className="CalendarPage__wrapper">
            {divs}
        </div>
      </div>
    
  )
};

export default CalendarPage;
