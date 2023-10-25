import styled from "styled-components";
import {
  ButtonProps,
  imageProps,
  landingImg,
  openProps,
} from "../../@types/types";

export const Container = styled.div<imageProps>`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div<openProps>`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Hr = styled.hr`
  width: 100%;
`;

export const LeftSide = styled.div<imageProps>`
  flex: 0.52;
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Text = styled.p`
  font-size: 1.4rem;
  width: 100%;
  margin-top: 1rem;
  color: #a4a6aa;
  font-weight: 700;

  & a {
    color: #02aff4;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const BackImg = styled.div<landingImg>`
  background-image: url(${(props) => props.image});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

export const RightSide = styled.div<landingImg>`
  flex: 1;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-image: url(${(props) => props.image});
  background-color: #f3d5b5;
  background-size: cover;
  background-position: center;
`;

export const Form = styled.form<openProps>`
  width: 100%;
  height: 100%;
  min-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem;
`;

export const Box = styled.div`
  margin-bottom: 3rem;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1.4rem 0;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  padding: 1.4rem 2rem;
  font-size: 2rem;
  font-weight: 500;
  background-color: #f3d5b5;
  border-radius: 0.2rem;
  width: 100%;

  &::placeholder {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 1.6rem 1.6rem;
  background-color: #7f553a;
  color: #fff;
  border: none;
  border-radius: 0.2rem;
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  user-select: none;
  margin-top: 3rem;

  &:hover {
    background-color: #855f46;
  }

  &.guest__btn {
    width: 100%;
  }
`;

export const GuestBox = styled.div`
  position: absolute;
  top: 1%;
  left: 5%;
`;
