import styled from "styled-components";
import { svgProps } from "../../@types/types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f9e9db;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 1.4rem 3rem;
  height: 70rem;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &.main {
    border: 3px solid #ddd;
    margin: 2rem 0 3.6rem 0;
  }

  &.flex {
    flex-direction: column;
    align-items: center;
    padding: 2rem 2rem;

    &:hover {
      background-color: #e6ccb2;
      color: black;
    }
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 8rem;
  height: 8rem;

  &.content {
    width: 14rem;
    height: 14rem;
    cursor: pointer;
  }

  &.icon__box {
    flex: 1;
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #e6ccb2;
    }
  }

  & .icons {
    margin: auto;
    width: 3.6rem;
    height: 3.6rem;
    transform: translateX(125%);
  }
`;

export const Img = styled.img<svgProps>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Button = styled.button`
  padding: 1.6rem 2rem;
  font-size: 4rem;
  background-color: inherit;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 2px;
  user-select: none;
  margin-top: 1.4rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  padding: 1rem 0;
  user-select: none;
  cursor: pointer;
`;

export const Section = styled.section``;

export const Input = styled.input`
  width: 2rem;
  height: 2rem;
`;

export const ContentBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: baseline;
  align-items: baseline;
  gap: 1.6rem 4.8rem;
`;

export const Contents = styled.div``;

export const MenuIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: #f9e9db;
  padding: 0 3rem;
`;

export const IconsBox = styled.div``;

export const IconsText = styled.h1`
  position: absolute;
  top: 20%;
  left: 60%;
  padding: 0.2rem 0.6rem;
  background-color: #f8f9fa;
  border-radius: 50%;
  color: #000;
  font-size: 1.6rem;
`;
