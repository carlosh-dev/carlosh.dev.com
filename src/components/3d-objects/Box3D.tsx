'use client'
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { Controls } from "./Controls";

export default function Box3D() {
  return (
    <div className="w-4 h-4">
      <Canvas>
        <Controls />
        <ambientLight />
        <directionalLight castShadow position={[5, 8, 5]} shadow-mapSize={[1024, 1024]}>
          <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
        </directionalLight>
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>
    </div>
  )
}