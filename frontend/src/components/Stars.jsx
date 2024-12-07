import React, { useState, useEffect } from "react";

const Stars = ({ setReview, review }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleClick = (index) => {
    setReview(prevReview => ({...prevReview, rating: index + 1}))
  };

  return (
    <div className="flex">
      {
        Array.from({ length: 5 }, (_, index) => (
            <svg
                key={index}
                fill={ hoverIndex !== null ? index <= hoverIndex ? "gold" : "lightgray" 
                    : index < review.rating ? "gold" : "lightgray"}
                width="22px"
                height="22px"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                onClick={() => handleClick(index)}
            >
                <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z" />
            </svg>
      ))}
    </div>
  );
};

export default Stars
