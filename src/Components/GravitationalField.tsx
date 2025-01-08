import { useSpring } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { BufferGeometry, DoubleSide, Mesh } from "three";

interface props {
    size: number;
    mass: number;
}

function GravitationalField({ size, mass } : props) {
  const meshRef = useRef<Mesh>(null);

  const { animatedMass } = useSpring({
    animatedMass: mass,
    config: {mass: 1, tension: 170, friction: 26}
  });

  function modify_vertices (geometry: BufferGeometry) {
    const { position } = geometry.attributes;
    let totalZ = 0;
    
    for (let i = 0; i < position.count; ++i) {
      const x = position.getX(i);
      const y = position.getY(i);
      const distance = Math.sqrt(x*x + y*y);
      const maxDistance = size / 6; 
      const normalizedDistance = Math.min(distance / maxDistance, 1); 
      const falloffFactor = Math.cos(normalizedDistance * Math.PI) * 0.25; 
      const dip = mass * falloffFactor; // Scale dip based on
     
      position.setZ(i, dip);
      totalZ += dip;
    }

    const avgZ = totalZ / position.count;

    for (let i = 0; i < position.count; ++i) {
      const currentZ = position.getZ(i);
      position.setZ(i, currentZ - avgZ);
    }

    position.needsUpdate = true;
  }

  useFrame(() => {
    const geometry = meshRef.current!.geometry;
    animatedMass.to(() => modify_vertices(geometry));
  })
  return (
    <mesh 
      ref={meshRef}
      rotation={[Math.PI / 2, 0, 0]} 
      position={[0, 0, 0]} 
      scale={[1 ,1, 1]}
    >
      <planeGeometry args={[size, size, 100, 100]} />
      <meshBasicMaterial color="green" side={DoubleSide} opacity={0.2} transparent={true} wireframe/>
    </mesh>
  );
}

export default GravitationalField;