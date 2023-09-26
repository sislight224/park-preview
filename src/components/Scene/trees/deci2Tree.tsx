import { useLoader } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import * as THREE from 'three'

export const Deci2Tree = () => {
    const texture = useLoader(THREE.TextureLoader, './assets/images/textures/trees/deci2.png')

    return (
        <Plane args={[80, 80 * 1.4, 50, 50]} position={[0, 0, 0]}>
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
     </Plane>
    )
}

export default Deci2Tree