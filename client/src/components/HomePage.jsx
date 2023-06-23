import React from "react";
import useAppData from "../hooks/useAppData";
import Slideshow from "./Slideshow";

export default function HomePage() {

  const { reviews } = useAppData();
  console.log(reviews.data);

  return (
    <Slideshow />
  )
}