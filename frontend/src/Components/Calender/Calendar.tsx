
import React, {useMemo}  from 'react'
import { CalenderRow } from '..'
import { useCalendarStore } from '@/Stores'
import { useDate } from '@/Utils/Hooks/useDate'

const Calendar = () => {

    const {difference} = useDate()
    console.log(difference);

    const newDef = Math.floor(difference / 52)
    console.log(newDef);
    

    const renderRows = useMemo(() => {
        const items: JSX.Element[] = []
        for (let i = 0; i <= 80; i++) {
            items.push(<CalenderRow index={i + 1} key={i}/>)
        }
        return items
      }, [])

  return (
    <div className="Calendar">
        {renderRows}
    </div>
  )
}

export {Calendar}