import styled, { css } from "styled-components";

export const CartDiv = styled.div`
  ${() => css`
    display: none;
    position: absolute;
    flex-direction: column;
    width: 32.5rem;
    right: -1.5rem;
    top: 6rem;
    z-index: 5;
    border-radius: 0.8rem;
    visibility: visible;
    opacity: 1;
    background-color: var(--cor-text);
    gap: 1rem;
    opacity: 0;
  `}
`;
export const CartTitle = styled.h1`
  ${() => css`
    font-size: 2.6rem;
    color: var(--cor-dark);
    padding: 1rem;
  `}
`;
export const ProductDiv = styled.div`
  ${() => css`
    display: flex;
    border-top: var(--cor-dark) 0.1rem solid;
    padding: 1rem;
    width: 32.5rem;
    align-items: center;
    justify-content: space-between;
  `}
`;
export const ProductBuyInfo = styled.p`
  ${() => css`
    font-size: 1.5rem;
    color: var(--cor-dark);
  `}
`;
export const ProductBuyPrice = styled.span`
  ${() => css`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--cor-dark);
  `}
`;
export const CartImg = styled.img`
  ${() => css`
    width: 5rem;
    border-radius: 0.5rem;
    border: var(--cor-complement) 0.1rem solid;
  `}
`;
export const BtnSellDiv = styled.div`
${()=>css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 1rem 0;
`}
`