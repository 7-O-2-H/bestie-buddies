import { useState, useEffect } from "react";
import { getReviews } from "../helpers/reviewsHelpers";

export default function useAppData() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews()
    .then((data) => {
      setReviews(data)
    })
  }, []);
  
  return { reviews };
};
