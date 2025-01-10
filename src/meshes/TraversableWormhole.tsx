import { Cylinder } from '@react-three/drei'
import { DoubleSide } from 'three'

const TraversableWormhole = () => {
  return (
  <mesh rotation={[0, 0, 0]}>
        <mesh position={[0, 0, 0]} >
            <planeGeometry args={[60, 30, 30, 30]} />
            <meshStandardMaterial color="#be2edc" side={DoubleSide} wireframe />
        </mesh>
        <Cylinder args={[6, 3, 15, 50, 20, true]} rotation={[80, 0, 0]} position={[0, -1.55, 8]}>
          <meshStandardMaterial color="#b324dc" side={DoubleSide} wireframe/> 
        </Cylinder>
        <Cylinder args={[3, 6, 15, 30, 30, true]} rotation={[80, 0, 0]} position={[0, 0, 23]}>
          <meshStandardMaterial color="#b324dc" side={DoubleSide} wireframe/> 
        </Cylinder>
        <Cylinder args={[15, 15, 30, 30, 50, true, 0, Math.PI]} position={[30, 0, 15]}> 
          <meshStandardMaterial color="#b325dc" side={DoubleSide} wireframe/> A
        </Cylinder>
        <mesh position={[0, 0, 30]} >
            <planeGeometry args={[60, 30, 30, 30]} />
            <meshStandardMaterial color="#be2edc" side={DoubleSide} wireframe/>
        </mesh>
    </mesh>
  )
}

export default TraversableWormhole