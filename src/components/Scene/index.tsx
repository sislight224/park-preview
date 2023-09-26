import { OrbitControls, Billboard, OrthographicCamera, Plane, Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ambientLightProps, cameraProps, orbitControlProps, pointLightProps } from '../../constants/scene'
import * as THREE from 'three'
import DeckModel from './deck'
import Fence from './fence'
import Ground from './ground'
import SkyBox from './skyBox'
import Deci2Tree from './trees/deci2Tree'
import DeciTree from './trees/deciTree'
import LiveOakTree from './trees/liveOakTree'
import { treePosInfo } from '../../constants'

export const Scene = () => {
    return (
        <Canvas
            camera={{ fov: cameraProps.fov, position: [ cameraProps.position.x, cameraProps.position.y, cameraProps.position.z ] }}
            shadows
        >
            <SkyBox />

            {/* <OrthographicCamera makeDefault={true} /> */}

            <OrbitControls
                maxPolarAngle={orbitControlProps.maxPolarAngle}
                maxDistance={orbitControlProps.maxDistance}
                minDistance={orbitControlProps.minDistance}
                target={[orbitControlProps.target[0], orbitControlProps.target[1], orbitControlProps.target[2]]}
                enablePan={false}
            />

            <hemisphereLight
                intensity={ 0.5 }
            />

            <pointLight
                position={[pointLightProps.position[0], pointLightProps.position[1], pointLightProps.position[2]]}
                castShadow
                decay={pointLightProps.decay}
                shadow-mapSize-height={pointLightProps.shadowMapSize}
                shadow-mapSize-width={pointLightProps.shadowMapSize}
                intensity={0.7}
            />

            <Ground />

            <Fence />

            <DeckModel />

            <group position={[-180, 45, -120]}>
                <Billboard
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <DeciTree />
                </Billboard>
            </group>

            <group position={[140, 55, -120]}>
                <Billboard
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Deci2Tree />
                </Billboard>
            </group>

            { treePosInfo.map((item: any, index: number) => (
                <group position={[item.x, item.y, item.z]} key={'tree' + index}>
                    <Billboard
                        follow={true}
                        lockX={false}
                        lockY={false}
                        lockZ={false}
                    >
                        <LiveOakTree />
                    </Billboard>
                </group>
            )) }
        </Canvas>
    )
}

export default Scene