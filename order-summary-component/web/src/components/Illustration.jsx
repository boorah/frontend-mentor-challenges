import React from "react";
import styled from "styled-components";

const IllustrationContainer = styled.div`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export default function Illustration() {
  return (
    <IllustrationContainer>
      <StyledImage src="illustration.svg" alt="illustration-svg" />
    </IllustrationContainer>
  );
}
