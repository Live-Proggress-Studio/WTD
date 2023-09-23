import React, { FC, useMemo, memo } from 'react'
import CalendarRowItem from '../CalendatRowItem/CalendarRowItem'
import './CalendatRow.scss'

interface IProps {
    index: number
}

const CalenderRow: FC<IProps> = memo(({index}) => {
    
    const renderItems = useMemo(() => {
        const items: JSX.Element[] = []
        for (let i = 0; i <= 52; i++) {
            items.push(
                <CalendarRowItem key={i} index={i}/>
            )
        }
        return items
    }, [])  


  return (
    <div className='CalenderRow'>
        <span className='CalenderRow__count'>{index}</span>
        <div className="CalenderRow__items">
            {renderItems}
        </div>
    </div>
  )
})

export {CalenderRow};