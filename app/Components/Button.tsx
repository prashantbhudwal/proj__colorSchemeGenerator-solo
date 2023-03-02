import styled from "styled-components";

const StyledButton = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 10px;
  font-size: 20px;
`;

export default function Button({ children }: any) {
  return <StyledButton>{children}</StyledButton>;
}
