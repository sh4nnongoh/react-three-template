import React, { FC, useRef, useState } from "react";
import { useFrame, Vector3 } from "@react-three/fiber";
import * as THREE from "three";
const Box: FC<{position:Vector3}> = ({ position }) => {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.1;
    }
  });
  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={clicked ? "red" : "orange"} />
    </mesh>
  );
};
export default Box;
