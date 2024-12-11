import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  box-sizing: border-box;
  padding: 10px 0px;

  &:empty {
    padding: 0px;
  }
`;

export { Wrapper, Header };
