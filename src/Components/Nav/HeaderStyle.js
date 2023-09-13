import styled, { css } from "styled-components";

export const HeaderDiv = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    background-color: var(--cor-dark);
    min-height: 10rem;
    padding: 0 20rem;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 720px) {
      padding: 10rem;
    }
  `}
`;
export const Div1 = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const Div2 = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  position: relative;
  justify-content: end;
`;
export const CartLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;
export const ProductQnt = styled.span`
  ${() => css`
    position: absolute;
    width: 2rem;
    left: 16%;
    top: 1.2rem;
    font-size: 0.9rem;
    text-align: center;
    background-color: var(--cor-complement);
    color: var(--cor-dark);
    border-radius: 8rem;
  `}
`;

export const ProfileImg = styled.img`
  ${() => css`
    border: solid 0.2rem transparent;
    border-radius: 100%;
    transition: ease-in-out 0.3s;
    &:hover {
      border-color: var(--cor-complement);
      cursor: pointer;
    }
  `}
`;
