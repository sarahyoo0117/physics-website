import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Spaceship = ({ position } : { position: Vector3}) => {
  const gltf = useLoader(GLTFLoader, '/src/assets/space_shuttle.glb');
  const spaceshipRef = useRef<Mesh>(null);
  return (
    <mesh ref={spaceshipRef} position={position}>
      <primitive object={gltf.scene}/>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial color="gray" />

      <mesh position={[0, 0, 1.1]}>
        <cylinderGeometry args={[0.8, 0.8, 1, 32]} />
        <meshStandardMaterial color="skyblue" transparent opacity={0.5} />
      </mesh>
    </mesh>
  );
};

export default Spaceship;