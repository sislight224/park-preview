import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useLoader } from '@react-three/fiber'

export const Fence = () => {
    const materials = useLoader(MTLLoader, './assets/models/outdoor/fence.mtl')
    const obj = useLoader(OBJLoader, './assets/models/outdoor/fence.obj', (loader: any) => {
        materials.preload()
        loader.setMaterials(materials)
    })

    return (
        <mesh position={[0, 0, -70]} scale={[0.25, 0.25, 0.25]}>
            <primitive object={obj}/>
        </mesh>
    )
}

export default Fence