import styled from "styled-components";
import { imageProps } from "../../@types/types";
import { openProps } from "../../@types/types";

export const ImageBox = styled.div<imageProps>`
  /* position: relative;
  width: 100%;
  height: 100%;
  transition: all 1s ease;
  transform-style: preserve-3d;
  background-color: #000; */
`;

export const Title = styled.h1`
  /* position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  color: #ffb167;
  font-size: 7.2rem;
  width: 100%;
  text-align: center;
  z-index: 1;
  letter-spacing: 1px; */
`;

export const Strong = styled.strong`
  color: #fff;
`;

export const Img = styled.div<imageProps>`
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.src});
  transform-style: preserve-3d;
  backface-visibility: hidden;

  & + .back__image {
    transform: rotateY(180deg);
    filter: brightness(200%);
    background-size: cover;
    background-position: left;
    z-index: 2;
  } */
`;

export const Div = styled.div<openProps>`
  /* position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 100%;
  opacity: 0;

  &.start {
    opacity: 1;
  } */
`;

export const Button = styled.div`
  /* padding: 1.4rem 2rem;
  background-color: #7f553a;
  color: #fff;
  border: none;
  border-radius: 2rem;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #855f46;
  } */
`;
