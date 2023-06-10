import React from "react";
import ReviewListItem from "./ReviewListItem";
import useAppData from "../hooks/useAppData";
import "./Reviews.css";

export default function ReviewList() {

  
  const {reviews} = useAppData();
  const reviewObjArr = reviews;

  const reviewsArray = reviewObjArr.map(eachReview => {
    return (
      <ReviewListItem
        key={eachReview.id}
        review={eachReview.review}
        reviewer={eachReview.reviewer}
      />
    )
  });

  return (
    <div className="reviews">
      <h2 className="title">Testimonials</h2>
      <div className="underline">
      </div>
      <p>
          {reviewsArray}
      </p>
    </div>
  );
}