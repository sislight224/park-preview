import { ang2Rad } from "../helper/math"

export const backgroundColor = 0xfcfcfc

export const cameraProps = {
    fov: 90,
    aspect: 1,
    near: 1,
    far: 10000,
    position: {
        x: 40,
        y: 60,
        z: 40,
    }
}

export const orbitControlProps = {
    target: [-50, 0, 8],
    minPolarAngle: ang2Rad(90),
    maxPolarAngle: ang2Rad(85),
    maxDistance: 100,
    minDistance: 10,
}

export const ambientLightProps = {
    color: 0xa0a0a0,
    intensity: 1
}

export const pointLightProps = { decay: 2, position: [30, 60, 40], shadowMapSize: 4096 };