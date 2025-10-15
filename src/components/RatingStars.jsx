import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function RatingStars({
  rating,
  maxRating = 10,
  showNumeric = true,
  size = "text-sm",
}) {
  const normalizedRating = (rating / maxRating) * 5;
  const fullStars = Math.floor(normalizedRating);
  const hasHalfStar = normalizedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FaStar
        key={`full-${i}`}
        className={`${size} text-yellow-400 transition-colors duration-200`}
        aria-label="Full star"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <FaStarHalfAlt
        key="half"
        className={`${size} text-yellow-400 transition-colors duration-200`}
        aria-label="Half star"
      />
    );
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <FaRegStar
        key={`empty-${i}`}
        className={`${size} text-gray-300 transition-colors duration-200`}
        aria-label="Empty star"
      />
    );
  }

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Rating: ${rating} out of ${maxRating}`}
    >
      <div className="flex items-center gap-0.5">{stars}</div>
      {showNumeric && (
        <span className={`${size} text-gray-600 ml-1 font-medium`}>
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
}
