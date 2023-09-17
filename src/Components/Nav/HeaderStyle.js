import styled, { css } from "styled-components";

export const HeaderDiv = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    
    transition: all 0.5s ease-in-out 0s;
    background-color: var(--cor-dark);
    min-height: 10rem;
    padding: 0 20rem;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 720px) {
      height: 5rem;
      padding: 0 5rem;
    }
  `}
`;
export const Div1 = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 982px) {
    display: none;
  }
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
  aspect-ratio: 1;
  cursor: pointer;
  @media (max-width: 720px) {
    width: 1.5rem;
  }
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
    display: block;
    opacity: 1;
    @media (max-width: 720px) {
      top: 0.2rem;
      width: 1.2rem;
    }
  `}
`;

export const ProfileImg = styled.img`
  ${() => css`
    border: solid 0.2rem transparent;
    border-radius: 100%;
    aspect-ratio: 1;
    transition: ease-in-out 0.3s;
    &:hover {
      border-color: var(--cor-complement);
      cursor: pointer;
    }
    @media (max-width: 720px) {
    width: 3rem;
  }
  `}
`;
