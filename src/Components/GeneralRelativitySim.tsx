import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Sphere } from "@react-three/drei";
import * as THREE from "three";
import GravitationalField from "./GravitationalField";

function GeneralRelativitySim() {
  const [orbitRadius, setOrbitRadius] = useState(50);
  const [mass, setMass] = useState(100); //central mass
  
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

      <Canvas>
        <PerspectiveCamera position={[0, 0, 200]}  makeDefault />
        <ambientLight intensity={1}/>
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <CentralMass position={new THREE.Vector3(0, 0, 0)} />
        <GravitationalField size={200}  mass={mass} />
        <OrbitingObject mass={mass} centralMassPosition={new THREE.Vector3(0, 0, 0)} orbitRadius={orbitRadius}/>
        <OrbitControls />
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

function OrbitingObject({ mass, centralMassPosition, orbitRadius } : { mass: number, centralMassPosition : THREE.Vector3, orbitRadius: number}) {
  const ref = useRef<THREE.Mesh>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  
  useFrame((state, delta) => {
    const distance = ref.current!.position.distanceTo(
      new THREE.Vector3(...centralMassPosition)
    );
    const timeDilation = 1 / (1 + 0.01 * Math.max(10, 1 / distance)); // Simplified time dilation formula
    setElapsedTime((prev) => prev + delta * timeDilation);
    
    const angle = elapsedTime * 0.5; // Orbital speed
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