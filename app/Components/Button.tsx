import styled from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const StyledButton = styled.button`
  background-color: white;
  border: 1px solid #d1d5d8;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0.2em 0.4em;
  font-size: 20px;
  font-family: ${inter};
  border-radius: 4px;
`;

export default function Button({ children }: any) {
  return <StyledButton>{children}</StyledButton>;
}
