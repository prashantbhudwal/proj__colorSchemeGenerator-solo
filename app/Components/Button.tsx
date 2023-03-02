import styled from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const StyledButton = styled.button`
  font-size: 1.5rem;
  background-color: white;
  border: 1px solid #d1d5d8;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0.4em 1em;
  font-family: ${inter};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #f6f8fa;
    transform: translateY(1px);
  }
`;

export default function Button({ children, onClick }: any) {
  return <StyledButton onClick={() => onClick()}>{children}</StyledButton>;
}
