import React from 'react'
import './CalendatRowItem.scss'

interface IProps {
    index: number
}

const CalendarRowItem =(props: IProps) => {
  const {index} = props

  // console.log('render ITEM');
  

  return (
    <div className="CalendarRowItem">
        <div className='CalendarRowItem__item' data-type={index}></div>
    </div>
  )
}

export default CalendarRowItem