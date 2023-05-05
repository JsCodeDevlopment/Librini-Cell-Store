import styled from "styled-components";

export const BodyDiv = styled.div`
  width: 100%;
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--cor-back);
`;

export const CarrosselDiv = styled.div`
  display: flex;
  width: 40%;
  height: 80%;
`;

export const ProductInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.5rem;
  width: 30%;
  height: 30%;
`;
export const MiniTitle = styled.span`
  font-size: 0.9rem;
  color: var(--cor-complement);
`;
export const Paragraph = styled.p`
  font-size: 1rem;
`;
export const ValuesDiv = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ProductValue = styled.h1`
  font-size: 2rem;
  color: var(--cor-dark);
`;
export const ProductDescount = styled.span`
  padding: 0.5rem;
  color: var(--cor-dark);
  font-size: 1rem;
  background-color: var(--cor-complement);
  border-radius: 1rem;
`;
export const OriginalValue = styled.p`
  font-size: 1rem;
  text-decoration: line-through;
  color: var(--cor-text);
`;
export const AddToCartText = styled.p`
  font-size: 1rem;
  color: var(--cor-text);
`;
export const CartImgOfButton = styled.img`
width: 2rem;
height: 2rem;
`
export const AddButton = styled.div`
  display: flex;
  width: 15rem;
  height: 4.5rem;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
  background-color: var(--cor-text);
`;
export const MaxAndMinButton = styled.h1`
font-size: 3rem;
color: var(--cor-complement);
`
export const AddToCartButton = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  width: 21rem;
  height: 4.5rem;
  background-color: var(--cor-complement);
`;
