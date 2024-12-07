const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (rating >= index + 1) {
      //Fully filled star
      return (
        <svg key={index} fill="gold" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"/>
        </svg>
      );
    } else if (rating > index && rating < index + 1) {
      //% filled star
      return (
        <svg key={index} width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id={`halfFill-${index}`}>
              <stop offset={`${(rating - index) * 100}%`} stopColor="gold" />
              <stop offset={`${(rating - index) * 100}%`} stopColor="lightgray" />
            </linearGradient>
          </defs>
          <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z" fill={`url(#halfFill-${index})`} />
        </svg>
      );
    } else {
      //Empty star
      return (
        <svg key={index} fill="lightgray" width="22px" height="22px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4.588l2.833 8.719H28l-7.416 5.387 2.832 8.719L16 22.023l-7.417 5.389 2.833-8.719L4 13.307h9.167L16 4.588z"/>
        </svg>
      );
    }
  });

  return (
    <div className="flex">
      {stars}
    </div>
  );
};

export default StarRating;
