import styled from "styled-components";
import { imageProps, svgProps } from "../../@types/types";

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

export const ImgBox = styled.div`
  position: relative;
  width: 16rem;
  height: 20rem;
  cursor: pointer;

  &:hover .coffee__img {
    opacity: 0.5;
    cursor: default;
  }

  &:hover .heart {
    display: block;
    width: 5.2rem;
    height: 5.2rem;
  }
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
  }

  &.heart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    transition: all 0.3s ease;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
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

export const Text = styled.h1`
  margin-top: 3rem;
  letter-spacing: 1px;
  font-size: 2.4rem;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.3s ease;
  opacity: 1;
`;

export const StarImg = styled.img<svgProps>`
  width: 2.2rem;
  height: 2.2rem;
  object-fit: cover;
  display: inline-block;

  & svg {
    fill: blue;
  }
`;

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0.4rem 2rem;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20rem;
  overflow: hidden;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 2rem;
  position: relative;
`;

export const Stars = styled.div`
  margin-top: auto;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  font-weight: 400;
  letter-spacing: 1px;
  margin: auto 0 0 0;
`;
