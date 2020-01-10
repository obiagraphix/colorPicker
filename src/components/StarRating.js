import React, { Component } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = f => f }) => {
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => onRate(i + 1)}
        />
      ))}
      <p>
        <br />
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number
};
StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
