import { Card } from "@/components/atoms/Card";
import { PropsWithChildren, ReactNode } from "react";
import { Header, Wrapper } from "./CardSection.style";
import { Title } from "@/components/atoms/Title";

interface CardSectionProps extends PropsWithChildren {
  title?: string;
  children?: ReactNode;
}

const CardSection = ({ title, children }: CardSectionProps) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Card>{children}</Card>
    </Wrapper>
  );
};

export default CardSection;
