import { imageProps, openProps } from "../@types/types";
import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  width: 144rem;
  height: 100rem;
`;

export const Wrapper = styled.div<openProps>`
  width: 100%;
  height: 100%;
  box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.25);
  position: relative;
  transition: all 1s ease;
  perspective: 60cm;
  transform-style: preserve-3d;
  transform: ${(props) => (props.open ? "translateX(50%)" : "translateX(0%)")};
  will-change: transition;
  z-index: 5;

  & .book {
    transform: ${(props) => props.open && "rotateY(-180deg)"};
    transform-origin: ${(props) => props.open && "left"};
  }
`;

export const LoginBox = styled.div<imageProps>`
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.loginImg});
  background-size: cover;
  background-position: right;
`;

export const Div = styled.div<openProps>`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -10%);
  width: 100%;
  opacity: 0;

  &.back {
    position: absolute;
    bottom: 30%;
    left: 50%;
    z-index: 0;
    opacity: ${(props) => (props.open ? 1 : 0)};
  }
`;

export const Button = styled.button`
  padding: 2rem 2rem;
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
  }

  &.back__btn {
    padding: 1.4rem 1.6rem;
    font-size: 1.8rem;
    width: 50%;
  }
`;
