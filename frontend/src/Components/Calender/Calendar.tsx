
import React from 'react'
import { CalenderRow } from '..'

const Calendar = () => {

    const renderRows = () => {
        const items: JSX.Element[] = []
        for (let i = 0; i <= 80; i++) {
          items.push(<CalenderRow index={i + 1} key={i}/>)
        }
        return items
      }

  return (
    <div className="Calendar">
        {renderRows()}
    </div>
  )
}

export {Calendar}