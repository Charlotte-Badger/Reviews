import React from 'react';

const Feedback = (props) => {
  // console.log('Props in Feedback:', props);
  if (props.ratings === undefined) {
    return null;
  } else if (props.ratings.totalRatings === 0) {
    return (
      <div>
        <h2>Student feedback</h2>
        <div>This course does not have any ratings yet.</div>
      </div>
    );
  } else {
    const getPercentage = (tier) => {
      let percentage = tier / props.ratings.totalRatings * 100;
      if (percentage < 1) {
        return '< 1%';
      }
      return Math.round(percentage) + '%';
    };
    return (
      <div>
        <h2>Student feedback</h2>
        <div>{Number.isInteger(props.ratings.overallRating) ? props.ratings.overallRating : props.ratings.overallRating.toFixed(1)} Course Rating</div> {/* average of all ratings */}
        <div>5 stars: {getPercentage(props.ratings.fiveStars)}</div>
        <div>4 stars: {getPercentage(props.ratings.fourStars)}</div>
        <div>3 stars: {getPercentage(props.ratings.threeStars)}</div>
        <div>2 stars: {getPercentage(props.ratings.twoStars)}</div>
        <div>1 star: {getPercentage(props.ratings.oneStar)}</div>
      </div>
    );
  }
};

export default Feedback;