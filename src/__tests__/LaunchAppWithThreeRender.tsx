import React from "react";
import ReactThreeTestRenderer from "@react-three/test-renderer";
import { Renderer } from "@react-three/test-renderer/dist/declarations/src/types";
import Box from "../components/Box";
const userStory = `
Given no inital state,
When user renders Box,
Then user sees the static information
`;
describe(userStory, () => {
  let renderer: Renderer;
  beforeEach(async () => {
    renderer = await ReactThreeTestRenderer.create(<Box position={[-1.2, 0, 1]} />);
  });
  it("shows the static infomation", () => {
    const meshChildren = renderer.scene.children;
    expect(meshChildren.length).toBe(1);
  });
});
