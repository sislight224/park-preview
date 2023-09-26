import { useLoader } from '@react-three/fiber'
import { Plane } from '@react-three/drei'
import * as THREE from 'three'

export const LiveOakTree = () => {
    const texture = useLoader(THREE.TextureLoader, './assets/images/textures/trees/live_oak.png')

    return (
         <Plane args={[100, 100, 50, 50]} position={[0, 0, 0]}>
            <meshStandardMaterial map={texture} side={THREE.DoubleSide} transparent />
         </Plane>
    )
}

export default LiveOakTree