"use client";
import styled from "styled-components";
import Button from "./Components/Button";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export default function Home() {
  return (
    <StyledApp>
      <Button>Get Color Scheme</Button>
    </StyledApp>
  );
}
