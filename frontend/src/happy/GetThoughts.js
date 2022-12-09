/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const GetThoughts = ({ getThoughts, handleLikeButtonOnClick }) => {
  return (
    <section className="thoughts wrapper">
      {getThoughts.map((thought) => (
        <div
          className="thoughts card"
          key={thought._id}>
          <div className="thoughts-text">
            <p>{thought.userName}:</p>
            <p>{thought.message}</p>
          </div>
          <div className="thoughts-likes">
            <button
              className="btn-like"
              type="button"
              onClick={() => handleLikeButtonOnClick(thought._id)}>
              <span className="heart">💗</span>
            </button>
            <p className="likes-counter">x {thought.hearts}</p>
            <p className="thoughts-time">{formatDistance(new Date(thought.createdAt), new Date())} ago</p>
          </div>
        </div>
      ))}

    </section>

  );
};

export default GetThoughts