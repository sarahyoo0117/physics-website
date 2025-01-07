import { useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef } from 'react'
import { Box } from '../meshes';
import * as three from 'three';
import { OrbitControls, ScrollControls} from '@react-three/drei';

const Test = () => {
  const box1 = useRef<three.Mesh>(null);
  const box2 = useRef<three.Mesh>(null);

  useLayoutEffect(() => {
   // tl.current = gsap.timeline();
    //tl.current.to
  })

  useFrame((state, dt) => {
    box1.current!.rotation.x += dt;
    box2.current!.rotation.y -= dt;
  })
  
  return (
      <group>
        <OrbitControls enableZoom={false}/>
        <ScrollControls>
          <Box 
            meshRef={box1}
            materialProps={{color: 'pink', wireframe: true}}
            geometryArgs={[1, 1, 1]}
            />  
          <Box 
            meshRef={box2}
            materialProps={{color: 'red'}}
            geometryArgs={[1, 1, 1]}
            threeElements={{position: [1, 1, 0]}}
            />  
        </ScrollControls>
      </group>
  )
}

export default Test