import {
  Container,
  Contents,
  Logo,
  MenuBox,
  MenuLink,
} from "./NavigationBar.style";
import GitHubLogo from "@/assets/icons/github_logo.svg";

const NavigationBar = () => {
  return (
    <Container>
      <Contents>
        <Logo>doan.kim</Logo>
        <MenuBox>
          <MenuLink href="https://github.com/kim-doan" target="_blank">
            <GitHubLogo />
          </MenuLink>
        </MenuBox>
      </Contents>
    </Container>
  );
};

export default NavigationBar;
