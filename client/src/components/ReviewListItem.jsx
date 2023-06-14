import React from "react";
import "./Reviews.css";

export default function ReviewListItem(props) {


  const { review, reviewer } = props;
  //console.log(review, reviewer);
  return (

    <div className="reviews">
      <p>"{review}"</p>
      <h3>- {reviewer}</h3>
      <div className="break">
      </div>
    </div>
  )
};