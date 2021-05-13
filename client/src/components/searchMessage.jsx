import React from 'react';

const SearchMessage = (props) => {
  console.log('Props in SearchMessage:', props);

  if (props.reviewsBySearchAndTier !== null) {

    if (props.reviewsBySearchAndTier.length > 0) {
      return (
        <div>{props.reviewsBySearchAndTier.length} reviews mentioning '<strong>{props.currentSearchTerm}</strong>'</div>
      );
    } else {
      return (
        <div>
          No reviews mentioning '<strong>{props.currentSearchTerm}</strong>'
          <br></br>
          <br></br>
          Your search returned no results with the selected rating. Try clearing your selection to see reviews matching your search.
        </div>
      );
    }

  } else if (props.reviewsBySearchAndTier === null && props.reviewsBySearch !== null && props.reviewsByTier === null) {

    if (props.reviewsBySearch.length > 0) {
      return (
        <div>{props.reviewsBySearch.length} reviews mentioning '<strong>{props.currentSearchTerm}</strong>'</div>
      );
    } else {
      return (
        <div>
          No reviews mentioning '<strong>{props.currentSearchTerm}</strong>'
          <br></br>
          <br></br>
          No reviews matched your search. Try searching with another term.
        </div>
      );
    }

  } else if (props.reviewsBySearchAndTier === null && props.reviewsBySearch === null && props.reviewsByTier !== null) {
    if (props.reviewsByTier.length === 0) {
      return (
        <div>
          There are no written comments for the rating you've selected. Please select another rating or clear your selection to view all written comments for this course.
        </div>
      );
    } else {
      return null;
    }
  }
};

export default SearchMessage;