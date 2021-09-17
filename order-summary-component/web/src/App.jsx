import React from "react";
import styled from "styled-components";

import Card from "./components/Card";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(225, 100%, 94%);
`;

export default function App() {
  return (
    <Container>
      <Card />
    </Container>
  );
}
