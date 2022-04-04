import { Canvas } from "@react-three/fiber";
import React, { FC, ReactElement } from "react";
import Box from "../components/Box";
const Canvas1: FC = (): ReactElement => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 1]} />
    <Box position={[3.2, 0, 1]} />
  </Canvas>
);
export default Canvas1;
