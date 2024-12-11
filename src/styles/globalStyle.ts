import { createGlobalStyle } from "styled-components";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const GlobalStyle = createGlobalStyle`
    *, input, button, select, textarea {
    -webkit-font-smoothing: antialiased;
    --Pretendard: ${pretendard.style.fontFamily}, sans-serif;

    font-family: var(--Pretendard);
  }


  body {
    margin: 0;
    padding: 0;
    background-color: #383c43;
    color: #fff;
  }
`;
