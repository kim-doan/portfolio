import { styled } from "styled-components";

const Box = styled.div<{
  $backgroundColor: string;
  $margin?: string;
  $isDarkText: boolean;
}>`
  display: inline-block;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 4px;
  padding: 4px 8px;
  margin: ${(props) => props.$margin};
  color: ${(props) => (props.$isDarkText ? "#fff" : "#000")};
  font-size: 0.8rem;
`;

export { Box };
