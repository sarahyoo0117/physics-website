import { Canvas } from '@react-three/fiber';
import TraversableWormhole from '../meshes/TraversableWormhole';
import {  OrbitControls, PerspectiveCamera } from '@react-three/drei';

const WormholeSim = () => {
  return (
  <section className='h-[60vh]'>
    <Canvas >
      <PerspectiveCamera position={[0, 100, 20]} makeDefault/>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} />
      <TraversableWormhole /> 
      <OrbitControls enableZoom={false}/>
    </Canvas>
  </section>
  );
};

export default WormholeSim;
