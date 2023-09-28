import React, { FC, useMemo, memo } from 'react'
import CalendarRowItem from '../CalendatRowItem/CalendarRowItem'
import './CalendatRow.scss'


// interface IProps {
//     index: number
//     // dateNow: Date
//     // myDate: Date
//     date: Date
//     isActive: boolean
//     rowData: { date: Date; isActive: boolean }[]
// }

const CalenderRow: FC<{ cellData: { date: Date; isActive: boolean }[]; index: number }> = memo(({index, cellData}) => {

    // const renderItems = useMemo(() => {
    //     const items: JSX.Element[] = []
    //     for (let i = 0; i <= 52; i++) {

    //         items.push(
    //             <CalendarRowItem isActive={isActive} key={i} index={i} date={date}/>
    //         )
    //     }
    //     return items
    // }, [])  


  return (
    <div className='CalenderRow'>
        <span className='CalenderRow__count'>{index}</span>
        <div className="CalenderRow__items">
            {cellData.map((cellDate, cellIndex) => {
                return (
                    <CalendarRowItem cellData={cellDate} key={cellIndex}  />
                )
            })}
        </div>
    </div>
  )
})

export {CalenderRow};