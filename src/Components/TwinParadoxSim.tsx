import { useState, useRef, useEffect, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import Spaceship from '../meshes/Spaceship';
import { timeDilatedOfTravelerBySpeed } from '../utils';

const Globe = () => {
  return (
    <mesh position={[0, -4, 0]}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const TravelingTwin = ({ travelingSpeed, setTravelingTime, earthTime }: {travelingSpeed: number, setTravelingTime: Dispatch<SetStateAction<number>>, earthTime: number}) => {
  const travelingTwinRef = useRef<Mesh>(null);
  const spaceshipPosition = useRef<Vector3>(new Vector3(0, 0, 0));

  const adjust_factor = 0.05; 
  useFrame(() => {
    spaceshipPosition.current.x += travelingSpeed * adjust_factor;
    travelingTwinRef.current!.position.x = spaceshipPosition.current.x;
    const visual_factor = 10000000;
    setTravelingTime(timeDilatedOfTravelerBySpeed(earthTime, travelingSpeed * visual_factor));

    if (spaceshipPosition.current.x > 10) {
      spaceshipPosition.current.x = -10;
    }
  });

  useEffect(() => {
    setTravelingTime(0);
    spaceshipPosition.current.x = 0;
  }, [travelingSpeed])

  return (
    <mesh ref={travelingTwinRef} position={spaceshipPosition.current}>
      <Spaceship props={{scale: 0.0025}}/>
    </mesh>
  );
};

const TwinParadoxSim = () => {
  const [earthTime, setEarthTime] = useState(0);
  const [travelingTime, setTravelingTime] = useState(0);
  const [travelingSpeed, setTravelingSpeed] = useState(1);

  const maxTime = 10; 

  useEffect(() => {
    const timer = setInterval(() => {
      setEarthTime((prev) => (prev + 0.1 >= maxTime ? 0 : prev + 0.1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setEarthTime(0);
  }, [travelingSpeed]);

  function onChangeSpeed(e : ChangeEvent<HTMLInputElement>) {
    setTravelingSpeed(parseFloat(e.target.value));
  }

  return (
    <div className='h-[50vh] flex flex-col'>
      <Canvas>
          <color attach="background" r={0} g={0} b={0}/>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <Globe />
          <TravelingTwin travelingSpeed={travelingSpeed} setTravelingTime={setTravelingTime} earthTime={earthTime}/>
      </Canvas>

      <div>
        <label>Traveling speed: </label>
        <input type='number' value={travelingSpeed} onChange={onChangeSpeed} className='text-black' max="30"/>
        <p>Earth Twin's Time: {earthTime.toFixed(2)} seconds <span className='px-4'>* after 30, time becomes so tiny that it displays NaN.</span></p>
        <p>Traveling Twin's Time: {travelingTime.toFixed(2)} seconds</p>
      </div>
    </div>
  );
};

export default TwinParadoxSim;
