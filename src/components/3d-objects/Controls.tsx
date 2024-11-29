import { useEffect, useState } from 'react'
// @ts-ignore
import { OrbitControls } from 'three-stdlib'
import { useThree } from '@react-three/fiber'

export const Controls = (): JSX.Element | null => {
  const { camera, gl, invalidate } = useThree()

  const [controls, setControls] = useState<OrbitControls>()

  useEffect(() => {
    setControls(new OrbitControls(camera, gl.domElement))
  }, [camera, gl])

  useEffect(() => {
    if (controls) {
      controls.addEventListener('change', () => { })
    }
    return (): void => {
      if (controls) {
        controls.removeEventListener('change', () => { })
      }
    }
  }, [controls, invalidate])

  controls.autoRotate = true

  return controls ? <primitive dispose={undefined} object={controls} enableDamping /> : null
}