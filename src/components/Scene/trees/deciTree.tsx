import { useLoader } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import * as THREE from 'three'

export const DeciTree = () => {
    const texture = useLoader(THREE.TextureLoader, './assets/images/textures/trees/deci.png')

    return (
         <Plane args={[80, 80 * 1.2, 50, 50]} position={[0, 0, 0]}>
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
         </Plane>
    )
}

export default DeciTree