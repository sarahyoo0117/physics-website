import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh } from "three";

const Spaceship = ({ props } : { props?: GroupProps}) => {
  const { nodes, materials } = useGLTF('/space_shuttle/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube_Material_0 as Mesh).geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={100}
      />
    </group>
  )
};

useGLTF.preload('/the_space_shuttle/scene.gltf')

export default Spaceship;