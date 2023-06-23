import { useState } from "react";
import Calendar from "react-calendar";
// import "./styles/Schedule.css";

export default function Schedule() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="wtf">
      <Calendar onChange={onChange} value={value}/>
    </div>
  )

}