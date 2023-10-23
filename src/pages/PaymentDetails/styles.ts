import styled from "styled-components";
import { imageProps } from "../../@types/types";

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

export const Logo = styled.img`
  width: 3.6rem;
  height: 3.6rem;
  position: relative;
  object-fit: cover;
  display: block;
  cursor: pointer;
  user-select: none;

  &.logo {
    cursor: default;
    width: 5.6rem;
    height: 5.6rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  letter-spacing: 1px;
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.4rem;
`;

export const Card = styled.div`
  background-color: beige;
  padding: 1.4rem 2rem;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;

  &.title {
    font-size: 1.4rem;
  }

  &.dates {
    font-size: 1.4rem;
  }
`;

export const EmptyBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Background = styled.div<imageProps>`
  background-image: url(${(props) => props.img});
  width: 20rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
`;

export const LogoText = styled.h1`
  margin-top: 3rem;
  letter-spacing: 1px;
  font-size: 2.4rem;
`;
