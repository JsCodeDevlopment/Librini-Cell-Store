import styled, { createGlobalStyle, css } from "styled-components";

/*
CONFIG FONT
TITLE: 50PX
SUBTITLE: 13PX
NAV ITEMS: 17PX

*/

export const ResetCSS = createGlobalStyle`
  :root {
    --cor-dark: #191919;
    --cor-back: #434345;
    --cor-complement: #00d2da;
    --cor-text: #e5e6e8;
  }
  
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    color: var(--cor-text);
    font-family: Kumbh Sans;
    text-decoration: none;
  }
`;
export const Logo = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const GenericalDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;
export const ProductTitle = styled.h1`
  font-size: 3rem;
  color: var(--cor-dark);
`;
export const NavItem = styled.p`
a {
  font-size: 1.7rem;
  color: var(--cor-text);
}
  font-size: 1.7rem;
  color: var(--cor-text);
`;
