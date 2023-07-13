import { useState } from "react";
import Calendar from "react-calendar";

export default function Schedule() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="wtf">
      <Calendar />
    </div>
  )

}