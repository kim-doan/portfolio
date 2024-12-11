import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 70px 10px 0px 10px;

  @media (min-width: 768px) {
    max-width: 760px;
  }
`;

export { Wrapper, Contents };
