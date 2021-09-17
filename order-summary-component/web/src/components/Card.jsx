import React from "react";
import styled, { css } from "styled-components";

import Illustration from "./Illustration";
import PlanCard from "./PlanCard";

const Wrapper = styled.div``;

const StyledCard = styled.div`
  max-width: 475px;
  width: 100%;
  margin: 1.5em;
  border-radius: 20px;
  background-color: white;
`;

const StyledHeading = styled.h2`
  margin-top: 1em;
  text-align: center;
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
  color: hsl(224, 23%, 55%);
  letter-spacing: 1px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-left: 1em;
  padding-right: 1em;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5em 1em 1.5em 1em;
`;

const Button = styled.button`
  margin-top: 0.5em;
  font-family: inherit;
  font-size: 1em;
  font-weight: 700;
  box-sizing: border-box;
  width: 100%;
  border: none;
  background: transparent;
  padding: 0.75em;
  color: gray;

  ${(props) =>
    props.primary &&
    css`
      background-color: hsl(245, 75%, 52%);
      color: white;
      border-radius: 10px;
    `}
`;

export default function Card() {
  return (
    <StyledCard>
      <Illustration />
      <Wrapper>
        <Wrapper>
          <StyledHeading>Order Summary</StyledHeading>
          <StyledParagraph>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </StyledParagraph>
        </Wrapper>
        <PlanCard />
        <ButtonContainer>
          <Button primary>Proceed to Payment</Button>
          <Button>Cancel Order</Button>
        </ButtonContainer>
      </Wrapper>
    </StyledCard>
  );
}
