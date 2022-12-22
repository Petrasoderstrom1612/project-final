import React from 'react'
import { useEffect, useState } from "react";

const Counter = () => {
    const calculateTimeLeft = () => {
    const difference = +new Date("2023-01-13T17:46:30+01:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <div>
      <h2>Time left</h2>
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <span>{timeLeft.days}d</span>
          <span> </span>
          <span>{timeLeft.hours}h</span>
          <span> </span>
          <span>{timeLeft.minutes}m</span>
          <span> </span>
          <span>{timeLeft.seconds}s</span>
        </p>
      ) : (
        <p>The time has come! 💍</p>
      )}
    </div>
  )
}

export default Counter