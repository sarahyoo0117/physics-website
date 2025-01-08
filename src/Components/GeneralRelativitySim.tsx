import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import * as THREE from "three";
import GravitationalField from "./GravitationalField";
import { calculateTimeDilationByGravity } from "../utils";

function GeneralRelativitySim() {
  const [orbitRadius, setOrbitRadius] = useState(50);
  const [mass, setMass] = useState(100); //central mass
  const [time, setTime] = useState(0); 
  const [dilatedTime, setDilatedTime] = useState(0);

  function reset_timer() {
    setTime(0);
    setDilatedTime(0);
  }

  return (
    <section className="h-[80vh]">
      <div className="flex gap-6 items-center">
        <p>Central mass: {mass}</p>
        <input
          type="range"
          min="0"
          step="1"
          value={mass}
          onChange={(e) => setMass(parseFloat(e.target.value))}
          />
      </div>
      <div className="flex gap-6 items-center">
        <p>Orbit radius: {orbitRadius}</p>
        <input
          type="range"
          min="0"
          step="1"
          value={orbitRadius}
          onChange={(e) => setOrbitRadius(parseFloat(e.target.value))}
          />
      </div>
      <p>original time: {time.toFixed(3)} s</p>
      <p>dilated time: {dilatedTime.toFixed(3)} s</p>
      <button onClick={reset_timer} className="bg-white text-black px-1">reset timer</button>

      <Canvas>
        <PerspectiveCamera position={[0, 0, 200]} makeDefault />
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <CentralMass position={new THREE.Vector3(0, - mass * 0.3, 0)} />
        <GravitationalField size={200}  mass={mass} />
        <OrbitingObject 
           mass={mass} 
           orbitRadius={orbitRadius} 
           time={time} setTime={setTime} 
           dilatedTime={dilatedTime} 
           setDilatedTime={setDilatedTime}
        />
      </Canvas>
    </section>
  );
}

export default GeneralRelativitySim

function CentralMass({ position = new THREE.Vector3(0, 0, 0) } : { position : THREE.Vector3}) {
  return (
    <Sphere args={[10, 32, 32]} position={position}>
      <meshStandardMaterial color="white" />
    </Sphere>
  );
}

function OrbitingObject({ orbitRadius, time, setTime, dilatedTime, setDilatedTime, mass } : { orbitRadius: number, time:number, setTime: Dispatch<SetStateAction<number>>, dilatedTime: number, setDilatedTime: Dispatch<SetStateAction<number>>, mass: number}) {
  const ref = useRef<THREE.Mesh>(null);
  const visualFactor = 100000000000000000000000000;
  useFrame((state, delta) => {
    setTime((prev) => prev + delta); 
    setDilatedTime(calculateTimeDilationByGravity(mass * visualFactor, orbitRadius, time));
    const angle = dilatedTime + delta * 0.5; // Orbital speed
    ref.current!.position.set(
      orbitRadius * Math.cos(angle),
      0,
      orbitRadius * Math.sin(angle),
    );
  });
  
  return (
    <Sphere ref={ref} args={[5, 32, 32]} position={[50, 0, 0]}>
      <meshStandardMaterial color="lightblue" />
    </Sphere>
  );
}