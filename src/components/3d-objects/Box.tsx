'use client'

import { ThreeElements } from "@react-three/fiber"
import { useRef, useState } from "react"
import { Mesh } from "three"

export default function Box(props: ThreeElements['mesh']) {
  // This reference will give us direct access to the mesh (pt-br: malha)
  const mesh = useRef<Mesh>(null!)
  // States for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   (mesh.current.rotation.x += delta)
  // })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1 : 1}
      onClick={(event) => setActive(!active)
      }
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <icosahedronGeometry
        args={[3.5, 0]}
      />
      <directionalLight castShadow position={[1, 8, 5]} shadow-mapSize={[0, 1024]}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </directionalLight>
      <meshStandardMaterial
        color={hovered ? 'orange' : 'purple'}

      />
    </mesh >
  )
}
