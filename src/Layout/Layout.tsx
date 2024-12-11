import { PropsWithChildren } from "react";
import NavigationBar from "@/components/organism/NavigationBar/NavigationBar";
import { Contents, Wrapper } from "./Layout.style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <NavigationBar />
      <Contents>{children}</Contents>
    </Wrapper>
  );
};

export default Layout;
