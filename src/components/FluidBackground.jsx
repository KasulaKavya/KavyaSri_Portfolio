import React, { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function FluidMesh() {
  const meshRef = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(a / 2) * 0.1;
    meshRef.current.rotation.y = Math.sin(a / 1.5) * 0.1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[3, 32]} />
      <meshStandardMaterial
        color="#007bff"
        metalness={0.7}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
}

function FluidBackground() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh'
      }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <FluidMesh />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}

export default FluidBackground;
