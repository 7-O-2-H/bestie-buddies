import { useState } from "react";
import Schedule from "./Schedule";
// import "./styles/Schedule.css";

export default function Calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="play">
      <Schedule/>
    </div>
  )

}