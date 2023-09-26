import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { useLoader } from '@react-three/fiber'

export const DeckModel = () => {
    const materials = useLoader(MTLLoader, './assets/models/outdoor/deck.mtl')
    const obj = useLoader(OBJLoader, './assets/models/outdoor/deck.obj',  (loader: any) => {
        materials.preload()
        loader.setMaterials(materials)
    })

    obj.traverse((n: any) => { if ( n.isMesh ) {
        n.castShadow = true; 
        n.receiveShadow = true;
        if(n.material.map) n.material.map.anisotropy = 16; 
    }});

    return (
        <mesh position={[0, -10, 100]} scale={[0.25, 0.25, 0.25]}>
            <primitive object={obj}/>
        </mesh>
    )
}

export default DeckModel