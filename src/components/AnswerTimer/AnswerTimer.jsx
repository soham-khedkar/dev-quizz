import './AnswerTimer.scss';
import { useEffect, useState, useRef } from 'react';

function AnswerTimer({ duration, onTimeUp }) {
  const [counter, setCounter] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter((cur) => cur + 0.1);
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    const newProgress = (100 * (counter / duration)).toFixed(1);
    setProgressLoaded(newProgress);

    if (counter >= duration) {
      clearInterval(intervalRef.current);
      onTimeUp();
    }
  }, [counter, duration, onTimeUp]);

  return (
    <div className='answer-timer-container'>
      <div
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${
            progressLoaded < 40
              ? 'lightgreen'
              : progressLoaded < 70
              ? 'orange'
              : 'red'
          }`,
        }}
        className='progress'
      ></div>
    </div>
  );
}

export default AnswerTimer;
