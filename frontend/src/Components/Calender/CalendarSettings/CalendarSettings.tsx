import Select from './Select/Select'
import {optionYyears, optionsDays, optionsMonth} from './options/options'
import { useCalendarStore } from '@/Stores/index';
import moment from 'moment';

import './CalendarSettings.scss'
import { useMonth } from '@/Utils/Hooks/useDate';


const CalendarSettings = () => {
  const {dayStore, monthStore, yearStore,  setDateStore, setMonthStore, setYearStore} = useCalendarStore()
  

  return (
    <div className='CalendarSettings'>
        <div className="CalendarSettings__title"></div>
        <Select onChange={setDateStore} value={dayStore} options={optionsDays}/>
        <Select onChange={setMonthStore} value={monthStore} options={optionsMonth} />
        <Select onChange={setYearStore} value={yearStore} options={optionYyears}/>

    </div>
  )
}

export {CalendarSettings}