import styled, { createGlobalStyle } from "styled-components";

/*
CONFIG FONT
FONT: 
- Family: [Kumbh Sans](https://fonts.google.com/specimen/Kumbh+Sans)
- Weights: 400, 700
TITLE: 50PX
SUBTITLE: 13PX
NAV ITEMS: 17PX

COLORS:
DARK: #191919
BACK: #434345
COMPLEMENT: #00d2da
TEXT: #e5e6e8
*/

export const ResetCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }
`;

export const GenericalDiv = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ProductTitle = styled.h1`
font-size: 5rem;
color: #191919;
`
export const NavItem = styled.p`
font-size: 1.7rem;
color: #e5e6e8;
`