import { useState, useRef, useEffect, Dispatch, SetStateAction } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import Spaceship from '../meshes/Spaceship';

const Globe = () => {
  return (
    <mesh position={[0, -3, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const TravelingTwin = ({ travelingSpeed, setTravelingTime }: {travelingSpeed: number, setTravelingTime: Dispatch<SetStateAction<number>>}) => {
  const travelingTwinRef = useRef<Mesh>(null);
  const spaceshipPosition = useRef<Vector3>(new Vector3(0, 0, 0));
  let elapsedTime = 0;

  useFrame((state, delta) => {
    // Update time based on speed and calculate time dilation effect
    elapsedTime += delta * travelingSpeed;
    console.log(elapsedTime);
    spaceshipPosition.current.x += travelingSpeed;
    travelingTwinRef.current!.position.x = spaceshipPosition.current.x;

    // Update traveling time based on speed
    elapsedTime += delta * travelingSpeed;
    setTravelingTime((prev) => prev + delta * travelingSpeed);

    // Reset spaceship position after a certain distance (for loop effect)
    if (spaceshipPosition.current.x > 5) {
      spaceshipPosition.current.x = -5;
    }
  });

  return (
    <mesh ref={travelingTwinRef} position={spaceshipPosition.current}>
      <Spaceship position={new Vector3(0, 0, 0)} />
    </mesh>
  );
};

const TwinParadoxSim = () => {
  const [earthTime, setEarthTime] = useState(0);
  const [travelingTime, setTravelingTime] = useState(0);

  const travelingSpeed = 0.05; 
  const maxTime = 60;  // Duration of the simulation in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setEarthTime((prev) => Math.min(prev + 0.1, maxTime));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p>Twin Paradox Simulation:</p>
      <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <Globe />
          <TravelingTwin travelingSpeed={travelingSpeed} setTravelingTime={setTravelingTime} />
      </Canvas>

      <div>
        <p>Earth Twin's Time: {earthTime.toFixed(2)} seconds</p>
        <p>Traveling Twin's Time: {travelingTime.toFixed(2)} seconds</p>
      </div>
    </div>
  );
};

export default TwinParadoxSim;
