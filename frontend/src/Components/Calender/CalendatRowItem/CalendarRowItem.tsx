import React from 'react'
import './CalendatRowItem.scss'
import { useCalendarStore } from '@/Stores'

interface IProps {
    index: number
    currentWeek?: number
}

const CalendarRowItem =(props: IProps) => {
  const {index } = props

  return (
    <div className="CalendarRowItem">
        <div className='CalendarRowItem__item' data-type={index}></div>
    </div>
  )
}

export default CalendarRowItem