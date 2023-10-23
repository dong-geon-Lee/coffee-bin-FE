import styled from "styled-components";
import { ButtonProps } from "../../@types/types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f9e9db;
  overflow: hidden;
`;

export const Section = styled.div`
  padding: 2rem 6rem;
  height: 70rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2.6rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;

  &.content__title {
    margin-right: auto;
    margin-top: 0.4rem;
  }
`;

export const Logo = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
  object-fit: cover;
  display: block;
  user-select: none;

  &.logo {
    width: 4.6rem;
    height: 4.6rem;
    cursor: default;
  }

  &.stars {
    width: 3rem;
    height: 3rem;
  }
`;

export const ImgBox = styled.div`
  width: 46rem;
  height: 20rem;
  position: relative;
  border-radius: 3.6rem;
  overflow: hidden;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const LogoBox = styled.div`
  display: flex;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
  color: #9d9d9d;
  margin: 1rem auto 3.2rem auto;
  width: 100%;
`;

export const SizeBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const Div = styled.div``;

export const Button = styled.button<ButtonProps>`
  padding: 1rem 2rem;
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: ${(props) => (props.active ? "#2f9e44" : "#ffd196")};
  border-radius: 2rem;
  border: 1px solid #eee;
  font-size: 1.4rem;
  font-weight: 800;

  &:hover {
    filter: brightness(90%);
  }
`;

export const PriceBox = styled.div`
  margin: 3rem 0 1.6rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

export const PriceText = styled.label`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
`;

export const BtnBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  gap: 1.6rem;
  margin-top: 3rem;
`;

export const Buttons = styled.button`
  padding: 1.4rem 2rem;
  background-color: #03c73c;
  font-size: 2rem;
  color: #fff;
  width: 100%;

  &:hover {
    filter: brightness(110%);
  }

  &.minus {
    background-color: #e9b17c;
    padding: 1rem 1.4rem;
    background-color: ${(props) => (props.disabled ? "#adb5bd" : "#e9b17c")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  &.plus {
    background-color: #e98d38;
    padding: 1rem 1.4rem;
    background-color: ${(props) => (props.disabled ? "#adb5bd" : "#e9b17c")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  &.likes {
    background-color: ${(props: ButtonProps) =>
      props.disabled ? "#868e96" : "#df4b4b"};
    cursor: ${(props: ButtonProps) => props.disabled && "not-allowed"};
  }

  &.carts {
    background-color: ${(props) => (props.disabled ? "#868e96" : "#03c73c")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
