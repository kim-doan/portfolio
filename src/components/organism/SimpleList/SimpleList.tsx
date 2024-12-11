import { Title } from "@/components/atoms/Title";
import {
  Header,
  Item,
  ItemTitle,
  ListWrapper,
  ItemRows,
  Wrapper,
} from "./SimpleList.style";
import { PropsWithChildren } from "react";

interface SimpleListProps extends PropsWithChildren {
  title?: string;
}

const SimpleList = ({ title, children }: SimpleListProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <ListWrapper>{children}</ListWrapper>
    </Wrapper>
  );
};

SimpleList.Item = Item;
SimpleList.ItemTitle = ItemTitle;
SimpleList.ItemRows = ItemRows;

export default SimpleList;
