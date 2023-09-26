import { Plane } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

export const Ground = () => {
    const texture = useLoader(THREE.TextureLoader, './assets/images/textures/Grass_Ground.jpg')
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(5, 5);
    texture.anisotropy = 1;

    return (
        <Plane args={[1000, 1000, 1000, 1000]} rotation={[ Math.PI/2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <meshPhongMaterial map={texture} side={ THREE.DoubleSide }></meshPhongMaterial>
        </Plane>
    )
}

export default Ground