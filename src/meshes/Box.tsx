import { ThreeElements } from '@react-three/fiber';
import { RefObject } from 'react'
import * as three from 'three'

interface Props {
  geometryArgs?: ConstructorParameters<typeof three.BoxGeometry>;
  materialProps?: JSX.IntrinsicElements['meshBasicMaterial']
  threeElements?: ThreeElements['mesh'],
  meshRef: RefObject<three.Mesh>
  onClick?: () => void;
  onHover?: (hovered: boolean) => void;
}

const Box = ({ threeElements, meshRef, materialProps, geometryArgs} : Props) => {

  return (
    <mesh
      {...threeElements}
      ref={meshRef}
    >
      <boxGeometry args={geometryArgs} />
      <meshBasicMaterial
        attach="material"
        {...materialProps}
      />
    </mesh>
  )
}

export default Box