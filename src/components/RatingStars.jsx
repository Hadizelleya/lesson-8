import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
export default function RatingStars({ rating }) {
  const stars = [];
  const rateOutOfFive = rating / 2;

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rateOutOfFive)) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i - rateOutOfFive < 1 && rateOutOfFive % 1 !== 0) {
      stars.push(<FaStarHalf key={i} className="text-yellow-400" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-400" />);
    }
  }

  return <div className="flex items-center gap-2">{stars}</div>;
}
