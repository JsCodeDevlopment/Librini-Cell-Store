import styled, { css } from "styled-components";

export const HeaderDiv = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    background-color: var(--cor-dark);
    min-height: 10rem;
    padding: 1rem 20rem;
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
  justify-content: end;
`;
export const CartLogo = styled.img`
  width: 3rem;
  height: 3rem;
`;
