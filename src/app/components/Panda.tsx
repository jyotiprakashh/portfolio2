"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function MeshComponent() {
  const fileUrl = "/panda/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Panda() {
  return (
    <div className="flex justify-center z-10 absolute top-10 sm:w-60 sm:h-40 lg:w-80 lg:h-52">
      <Canvas  shadows camera={{ position: [0, 2, 7], fov: 50 }}>
        <OrbitControls />

        <directionalLight
          position={[-15, 10, -3]}
          intensity={2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        <pointLight position={[-10, -10, -10]} intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={10} />
        <ambientLight intensity={0.6} />

        <group position={[0, -1, 0]}> {/* Adjust position to center the Panda */}
          <mesh>
            <planeGeometry args={[20, 20]} /> {/* Use larger geometry for padding */}
            <meshBasicMaterial color="white" transparent opacity={0} /> {/* Make the padding invisible */}
          </mesh>
          <MeshComponent />
        </group>
      </Canvas>
    </div>
  );
}
