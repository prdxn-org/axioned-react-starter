import React, { useEffect, useState } from 'react';

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const showTime = time.toLocaleTimeString();

  return <h2>{`Time:- ${showTime}`}</h2>;
}

export default Time;
