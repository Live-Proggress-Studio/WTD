import { useState } from 'react';
import './CalendarSettings.scss';
import Select from 'react-select';
import { optionYyears, optionsDays, OptionsMonth } from './options/options';
import { useCalendarStore } from '@/Stores/CalendarStore/calendarStore';
import { useTranslation } from 'react-i18next';

interface Option {
  value: string;
}

const CalendarSettings = () => {
  const { t } = useTranslation();
  const optionsMonth = OptionsMonth();

  const [day, setDay] = useState<string>('');
  const [month, setMounth] = useState<string>('');
  const [years, setYear] = useState<string>('');

  const { setDateStore, setMonthStore, setYearStore } = useCalendarStore();

  const getday = (selected: Option | null) => {
    const { value } = selected as Option;
    setDay(value);
    setDateStore(value);
  };

  const getmonth = (selected: Option | null) => {
    const { value } = selected as Option;
    setMounth(value);
    setMonthStore(value);
  };

  const getyear = (selected: Option | null) => {
    const { value } = selected as Option;
    setYear(value);
    setYearStore(value);
  };

  return (
    <div className='CalendarSettings'>
      <div className='CalendarSettings__title'></div>
      <Select
        placeholder={t('calendar.day')}
        onChange={getday}
        options={optionsDays}
        className='CalendarSettings__range'
      />
      <Select
        placeholder={t('calendar.month')}
        onChange={getmonth}
        options={optionsMonth}
        className='CalendarSettings__range'
      />
      <Select
        placeholder={t('calendar.year')}
        onChange={getyear}
        options={optionYyears}
        className='CalendarSettings__range'
      />
    </div>
  );
};

export { CalendarSettings };
