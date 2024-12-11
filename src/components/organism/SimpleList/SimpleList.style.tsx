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

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  max-width: 600px;
  word-break: keep-all;
`;

const ItemTitle = styled.div`
  display: inline-block;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const ItemRows = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
`;

export { Header, Wrapper, ListWrapper, Item, ItemTitle, ItemRows };
