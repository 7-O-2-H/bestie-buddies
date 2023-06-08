import React from "react";
import useAppData from "../hooks/useAppData";

export default function HomePage() {

  const { reviews } = useAppData();
  console.log(reviews);

  return (
    <div>
      <h1>working?</h1>
    </div>
  )
}