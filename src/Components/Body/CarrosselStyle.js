import styled, { css } from "styled-components";

export const Images = styled.img`
  ${() => css`
    border-radius: 1rem;
  `}
`;
const isActive = () => css`
  border: 2px solid #00d2da;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    z-index: 0;
    background-color: #fff;
    opacity: 0.75;
  }
  &:hover {
    opacity: 1;
    cursor: not-allowed;
  }
`;
const setlightBoxVisible = () => css`
  opacity: 1;
  visibility: visible;
`;

const shadowLightbox = () => css`
  &::after {
    content: '';
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.75);
  }
`

export const Container = styled.div`
  ${({ theme, lightBoxVisible }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${theme.media.laptop} {
    ${lightBoxVisible && shadowLightbox()}
      border-radius: 2rem;
      max-width: 44.5rem;
      > ${ArrowPrevious}, > ${ArrowNext} {
        display: none;
      }
    }
    @media ${theme.media.largeDesktop} {
      max-width: 55.5rem;
    }
  `}
`;

export const DisplayImage = styled.img`
  ${() => css`
    width: 90%;
    border-radius: inherit;
    cursor: pointer;
    user-select: none;
  `}
`;
export const ArrowPrevious = styled.img`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: var(--cor-text);
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    padding: 1.3rem 1.6rem;
  `}
`;
export const ArrowNext = styled.img`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: var(--cor-text);
    position: absolute;
    z-index: 1;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    padding: 1.3rem 1.6rem;
  `}
`;

export const Trumbnails = styled.div`
  ${({ theme }) => css`
    display: none;
    @media ${theme.media.laptop} {
      margin-top: 3rem;
      max-width: 44.5rem;
      display: grid;
      place-items: center;
      gap: 2.8rem;
      grid-template-columns: repeat(auto-fill, 9rem);
    }

    @media ${theme.media.largeDesktop} {
      max-width: 55.5rem;
      grid-template-columns: repeat(auto-fill, 10rem);
    }
  `}
`;
export const Trumbnail = styled.div`
  ${({ theme, backgroundImage, active }) => css`
    @media ${theme.media.laptop} {
      border-radius: 0.8rem;
      width: 100%;
      height: 9rem;
      cursor: pointer;
      user-select: none;
      position: relative;
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
      background-color: ${theme.colors.neutral.lightGrayingBlue};

      &:hover {
        opacity: 0.5;
      }
      ${active && isActive()}
    }

    @media ${theme.media.largeDesktop} {
      height: 10rem;
    }
  `}
`;

export const LightBoxContainer = styled.div`
  ${({ theme, lightBoxVisible }) => css`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 45rem;
    width: 100%;
    max-height: 100vh;

    display: none;
    flex-direction: column;
    align-items: center;
    z-index: 2;

    opacity: 0;
    visibility: hidden;

    @media ${theme.media.laptop} {
      ${lightBoxVisible && setlightBoxVisible()}
      display:flex;

      & > ${ArrowPrevious}, > ${ArrowNext} {
        display: block;
        cursor: pointer;
        top: 45%;
        z-index: 3;
        user-select: none;
      }
      > ${ArrowPrevious} {
        left: 0;
        transform: translate(-50%, -50%);
      }
      > ${ArrowNext} {
        right: 0;
        transform: translate(50%, -50%);
      }
    }
    ${Trumbnail} {
      z-index: 3;
    }
  `}
`;
export const CloseLightBox = styled.img`
  align-self: flex-end;
  width: 2rem;
  height: 2rem;
  margin-bottom: 2.5rem;
  user-select: none;
  cursor: pointer;
  z-index: 2;
`;

export const LightBoxImg = styled.img`
  width: 100%;
  border-radius: 1.5rem;
  user-select: none;
  z-index: 2;
`;
