
const Plane = () => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <planeBufferGeometry attach="geometry" args={[500, 500]}/>
        <meshLambertMaterial attach="material" opacity={0.2}/>
    </mesh>
  )
}

export default Plane