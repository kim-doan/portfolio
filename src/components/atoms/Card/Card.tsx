import { PropsWithChildren } from "react";
import { Container } from "./Card.style";

const Card = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Card;
