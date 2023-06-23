import React from "react";
import "./styles/Reviews.css";

export default function ReviewListItem(props) {

  const { review, reviewer } = props;

  return (

    <div className="reviews">
      <h3>"{review}"</h3>
      <h3>- {reviewer}</h3>
      <div className="break">
      </div>
    </div>
  )
};