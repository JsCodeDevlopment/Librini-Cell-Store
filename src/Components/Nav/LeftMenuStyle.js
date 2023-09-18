import styled, { css } from "styled-components";

export const LeftMenuUl = styled.ul`
  ${() => css`
    opacity: 1;
    visibility: visible;
    position: absolute;
    transition: opacity 0.5s ease-in-out 0s;
    left: 0px;
    top: 0px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 9rem 3.5rem;
    width: 25rem;
    height: 100vh;
    z-index: 3;
    background-color: var(--cor-dark);
  `}
`;

export const Links = styled.li`
  ${() => css`
    position: relative;
    transition: all 0.5s ease-in-out 0s;
    list-style-type: none;
    &:hover {
      &:before {
        content: "";
        position: absolute;
        top: -0.5rem;
        left: 20.98rem;
        width: 0.5rem;
        height: 3rem;
        background-color: var(--cor-complement);
      }
    }
  `}
`;
export const A = styled.a`
  ${() => css`
    font-size: 1.8rem;
    color: var(--cor-base);
    text-decoration: none;
  `}
`;
export const MnHamburguerImg = styled.img`
  ${() => css`
    display: none;
    left: 20px;
    top: 40px;
    position: absolute;
    z-index: 4;
    @media (max-width: 982px) {
      display: block;
    }
  `}
`;
