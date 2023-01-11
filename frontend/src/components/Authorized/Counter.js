import React from 'react'
import { useEffect, useState } from "react";
import { StyledHeading, StyledSubHeading } from 'styles/GlobalStyles';

const Counter = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-01-13T16:00:00+01:00") /*wedding date*/ - +new Date();
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
    <>
      {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <StyledHeading>
          <span>{timeLeft.days}d</span>
          <span> </span>
          <span>{timeLeft.hours}h</span>
          <span> </span>
          <span>{timeLeft.minutes}m</span>
          <span> </span>
          <span>{timeLeft.seconds}s</span>
        </StyledHeading>
      ) : (
        <StyledSubHeading>The time has come! 💍</StyledSubHeading>
      )}
    </>
  )
}

export default Counter