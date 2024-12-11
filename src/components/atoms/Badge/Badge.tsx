import checkDarkColor from "@/utils/checkDarkColor";
import { PropsWithChildren } from "react";
import { Box } from "./Badge.style";

interface BadgeProps extends PropsWithChildren {
  backgroundColor: string;
}

const Badge = ({ backgroundColor, children }: BadgeProps) => {
  return (
    <Box
      $backgroundColor={backgroundColor}
      $isDarkText={checkDarkColor(backgroundColor)}
    >
      {children}
    </Box>
  );
};

export default Badge;
