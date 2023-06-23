import { useState } from "react";
import DateRangePicker from "tw-daterange";
import "./styles/Schedule.css";

export default function Calendar() {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  })

  return (
    <div className="calendar" >

      <DateRangePicker
        initialRange={range}
        onUpdate={(dateRange) => {
          setRange(dateRange)
        }}
      />
    </div>
  )
}