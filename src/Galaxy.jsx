import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { Group } from 'three';

function Star({ angle, radius, depth, size, color }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.x = radius * Math.cos(angle + clock.getElapsedTime() * 0.1);
    ref.current.position.z = radius * Math.sin(angle + clock.getElapsedTime() * 0.1);
    ref.current.position.y = depth * Math.sin(angle + clock.getElapsedTime() * 0.2);
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <sphereBufferGeometry args={[size, 16, 16]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function StarField({ stars }) {
  const [group] = useState(() => new Group());

  useFrame(({ clock }) => {
    group.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group ref={group}>
      {stars.map(({ angle, radius, depth, size, color }, i) => (
        <Star key={i} angle={angle} radius={radius} depth={depth} size={size} color={color} />
      ))}
    </group>
  );
}

function Galaxy() {
  const starCount = 3000;
  const radius = 25;

  const stars = [...Array(starCount)].map((_, i) => {
    const angle = (i / starCount) * Math.PI * 8;
    const depth = Math.random() * 10 - 5;
    const size = Math.random() * 0.01 + 0.01;
    const color = ['green', 'darkgreen', 'pink', 'purple'][Math.floor(Math.random() * 4)];
    return {
      angle,
      radius: radius * Math.random(),
      depth,
      size,
      color,
    };
  });
//9400d3
  return (
    <Canvas style={{ position: 'fixed', width: '100vw', height: '100vh', background: 'black', zIndex: '-1' }} gl={{}}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <StarField stars={stars} />
    </Canvas>
  );
}

export default Galaxy;