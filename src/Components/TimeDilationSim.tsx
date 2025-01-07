import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { ChangeEvent, useState } from 'react';
import { math_jx_config } from '../configs';

const TimeDilationSim = () => {
  const [velocity, setVelocity] = useState(0); // Speed as a fraction of the speed of light
  const [duration, setDuration] = useState(1); // Duration in hours
  const [timeEarth, setTimeEarth] = useState(duration); // Time passed on Earth

  const speedOfLight = 299792458; // m/s

  const calculateTimeDilation = (v: number, t: number) => {
    const velocity = v * speedOfLight; // Convert to m/s
    const time_dilated = t * Math.sqrt(1 - (velocity * velocity) / (speedOfLight * speedOfLight));
    return time_dilated;
  };

  const handleVelocityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newVelocity = parseFloat(event.target.value);
    setVelocity(newVelocity);
    setTimeEarth(calculateTimeDilation(newVelocity, duration));
  };

  const handleDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newDuration = parseFloat(event.target.value);
    setDuration(newDuration);
    setTimeEarth(calculateTimeDilation(velocity, newDuration));
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

      <div className=''>
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
