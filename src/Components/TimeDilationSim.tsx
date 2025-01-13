import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { ChangeEvent, useState } from 'react';
import { math_jx_config } from '../configs';
import { c, timeDilatedOfTravelerBySpeed } from '../utils';

const TimeDilationSim = () => {
  const [velocity, setVelocity] = useState(0); // Speed as a fraction of the speed of light
  const [duration, setDuration] = useState(1); // Duration in hours
  const [timeEarth, setTimeEarth] = useState(duration); // Time passed on Earth

  const handleVelocityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVelocity = parseFloat(event.target.value);
    setVelocity(newVelocity);
    setTimeEarth(timeDilatedOfTravelerBySpeed(duration, newVelocity * c));
  };

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDuration = parseFloat(event.target.value);
    setDuration(newDuration);
    setTimeEarth(timeDilatedOfTravelerBySpeed(newDuration, velocity * c));
  };

  return (
    <div className='bg-slate-100 text-black rounded-lg p-4 flex flex-col gap-4'>
      <div>
        <h2 className='font-dm_serif text-lg'>Interactive Time Dilation Calculator</h2>
        <MathJaxContext version={3} config={math_jx_config}>
          <MathJax>{"$t_\\text{dilated} = t_\\text{earth} \\times \\sqrt{1- \\frac{v^2}{c^2}}$"}</MathJax>
        </MathJaxContext>
        <div>
          <label>Enter Duration (in seconds):</label>
          <input type="number" value={duration} onChange={handleDurationChange} />
        </div>
      </div>

      <div>
        <input
          type="range"
          min="0"
          max="0.99"
          step="0.01"
          value={velocity}
          onChange={handleVelocityChange}
          />
        <p>Speed of Traveler: {Math.round(velocity * 100)}% of light speed</p>
      </div>

      <div>
        <p>Time on Earth: {duration} seconds</p>
        <p>Time for traveler: {timeEarth.toFixed(2)} seconds</p>
      </div>
    </div>
  );
};

export default TimeDilationSim;
