import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #282c35;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 8px;
`;

const Contents = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;

  @media (min-width: 768px) {
    max-width: 760px;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
`;

const MenuBox = styled.div`
  display: flex;
  gap: 10px;
`;

const MenuLink = styled(Link)`
  display: block;
  width: 32px;
  height: 31px;
  background-color: #fff;
  border-radius: 50%;
`;

export { Container, Contents, Logo, MenuBox, MenuLink };
