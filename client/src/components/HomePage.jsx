import React from "react";
import useAppData from "../hooks/useAppData";
import ReviewList from "./ReviewList";

export default function HomePage() {

  const { reviews } = useAppData();
  console.log(reviews.data);

  return (
    <div>
      {/* <ReviewList
        key={reviews.data.id}
        review={reviews.data.review}
        reviewer={reviews.data.reviewer}
      /> */}
    </div>
  )
}