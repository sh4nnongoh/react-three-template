import { Canvas } from "@react-three/fiber";
import React, { FC, ReactElement } from "react";
import { Container } from "react-bulma-components";
import Box from "../components/Box";
const Home: FC = (): ReactElement => (
  <Container>
    <Container>
      Work In Progress
    </Container>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 1]} />
      <Box position={[3.2, 0, 1]} />
    </Canvas>
  </Container>
);
export default Home;
