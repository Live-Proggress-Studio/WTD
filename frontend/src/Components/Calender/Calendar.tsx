import React, { useMemo, useEffect, useState, useRef } from "react";
import { CalenderRow } from "..";
import { useDate } from "@/Utils/Hooks/useDate";
import CalendarRowItem from "./CalendatRowItem/CalendarRowItem";

interface DataObject {
  date: Date;
  isActive: boolean;
}

const Calendar = () => {
  const { myDate, fillDataArrays } = useDate();
  const [calendarData, setCalendarData] = useState<DataObject[][]>([]);

  useEffect(() => {
    const data = fillDataArrays()
    setCalendarData(data)
    console.log(myDate);
    
    console.log(calendarData);
  }, []);

  const ref = useRef(null)


  return (
    <div ref={ref} className="Calendar">
        {calendarData.map((data, i) => (
          <CalenderRow cellData={data} index={i + 1} key={i}/>
        ))} 
    </div>

  );
};

export { Calendar };
