import React from "react";
import styled from "styled-components";

const StyledPlanCard = styled.div`
  display: flex;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 1.5em 1em 1.5em 1em;
  padding: 1em;
  background-color: hsl(225, 100%, 98%);
`;

const Link = styled.a``;

const Text = styled.p`
  font-weight: ${(props) => props.fontWeight || "normal"};
  color: ${(props) => props.color};
`;

const Wrapper = styled.div`
  display: flex;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1em;
`;

const StyledImage = styled.img``;

export default function PlanCard() {
  return (
    <StyledPlanCard>
      <Wrapper>
        <StyledImage src="icon-music.svg" alt="music-icon" />
        <InfoWrapper>
          <Text fontWeight={700}>Annual Plan</Text>
          <Text color="gray" fontWeight={500}>
            $59.99/year
          </Text>
        </InfoWrapper>
      </Wrapper>
      <Link href="#">Change</Link>
    </StyledPlanCard>
  );
}
