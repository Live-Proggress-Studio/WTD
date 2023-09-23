import React, { useState, ChangeEvent } from 'react'
import './CalendarSettings.scss'
import Select from 'react-select'
import {optionYyears, optionsDays, optionsMonth} from './options/options'
import { useCalendarStore } from '@/Stores/CalendarStore/calendarStore';

interface Option {
    value: string;
  }


const CalendarSettings = () => {

    const [day, setDay] = useState<string>('');
    const [month, setMounth] = useState<string>('');
    const [years, setYear] = useState<string>('');

    const {setDateStore, setMonthStore, setYearStore} = useCalendarStore()

    const getday = (selected: Option | null) =>  {
        const {value} = selected as Option
        setDay(value);
        setDateStore(value)
    }

    const getmonth = (selected: Option | null) =>  {
        const {value} = selected as Option
        setMounth(value);
        setMonthStore(value)
    }
    const getyear = (selected: Option | null) =>  {
        const {value} = selected as Option
        setYear(value);
        setYearStore(value)
    }

  return (
    <div className='CalendarSettings'>
        
        <div className="CalendarSettings__title"></div>
        <Select placeholder="День" onChange={getday} options={optionsDays} className="CalendarSettings__range"/>
        <Select placeholder="Месяц" onChange={getmonth} options={optionsMonth} className="CalendarSettings__range"/>
        <Select placeholder="Год" onChange={getyear} options={optionYyears} className="CalendarSettings__range"/>

    </div>
  )
}

export {CalendarSettings}