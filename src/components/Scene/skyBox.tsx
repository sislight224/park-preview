import { useThree, useLoader } from '@react-three/fiber'
import { CubeTextureLoader, DoubleSide, TextureLoader } from "three";
import { Box } from '@react-three/drei'

export const SkyBox = () => {
    const textures = useLoader(TextureLoader, [
        './assets/images/textures/tour_px.jpg',
        './assets/images/textures/tour_nx.jpg',
        './assets/images/textures/tour_py.jpg',
        './assets/images/textures/tour_ny.jpg',
        './assets/images/textures/tour_pz.jpg',
        './assets/images/textures/tour_nz.jpg',
    ])
    
    return (
        <Box position={[0, 30, 0]} args={[1000, 1000, 1000]}>
            <meshStandardMaterial attach={'material-0'} map={textures[0]} side={DoubleSide} />
            <meshStandardMaterial attach={'material-1'} map={textures[1]} side={DoubleSide} />
            <meshStandardMaterial attach={'material-2'} map={textures[2]} side={DoubleSide} />
            <meshStandardMaterial attach={'material-3'} map={textures[3]} side={DoubleSide} />
            <meshStandardMaterial attach={'material-4'} map={textures[4]} side={DoubleSide} />
            <meshStandardMaterial attach={'material-5'} map={textures[5]} side={DoubleSide} />
        </Box>
    )
}

export default SkyBox