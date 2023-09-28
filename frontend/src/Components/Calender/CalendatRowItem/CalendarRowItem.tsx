import React, { FC, memo } from 'react'
import './CalendatRowItem.scss'

// interface IProps {
//     index: number
//     // myDate: Date
//     // dateNow: Date
//     date: Date
//     isActive: boolean
//     cellData: { date: Date; isActive: boolean }
// }

interface IDates {
  cellData: { date: Date; isActive: boolean; }; key: number;
}

const CalendarRowItem: FC<IDates> = memo(({cellData,key}) => {

  return (
    <div className={cellData.isActive ? 'CalendarRowItem__item CalendarRowItem__active' : 'CalendarRowItem__item'}>
        <div className={'CalendarRowItem__item'} data-type={cellData.date}></div>
    </div>
  ) 
})

export default CalendarRowItem