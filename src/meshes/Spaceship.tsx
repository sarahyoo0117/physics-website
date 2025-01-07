import { useRef } from "react";
import { Mesh, Vector3 } from "three";

const Spaceship = ({ position } : { position: Vector3}) => {
  const spaceshipRef = useRef<Mesh>(null);
  return (
    <mesh ref={spaceshipRef} position={position}>
      {/* Spaceship body */}
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color="gray" />
      {/* Transparent window */}

      <mesh position={[0, 0, 1.1]}>
        <cylinderGeometry args={[0.8, 0.8, 1, 32]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.5} />
      </mesh>
    </mesh>
  );
};

export default Spaceship;