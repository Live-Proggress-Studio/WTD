import { Calendar, CalendarSettings } from '@/Components';

import "./CalendarPage.scss";
const CalendarPage = () => {

  return (
      <div className="CalendarPage">
        <div className="CalendarPage__wrapper">
          <CalendarSettings/>
          <Calendar/>
        </div>
      </div>
    
  )
}

export default CalendarPage;
