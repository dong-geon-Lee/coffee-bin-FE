import styled from "styled-components";
import { imageProps, itemLengthProps, itemProps } from "../../@types/types";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  background-color: #f9e9db;
  overflow: hidden;
`;

export const Section = styled.div<itemProps>`
  padding: 2rem 6rem;
  height: 70rem;
  overflow-y: ${(props) => (props.items.length === 0 ? "none" : "scroll")};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Center = styled.div<itemLengthProps>`
  overflow-y: scroll;
  height: 38rem;
  margin: 4rem 0 0rem 0;

  & div:last-child {
    margin: ${(props) => (props.items <= 1 ? "0" : "4rem 0 0 0")};
  }

  &::-webkit-scrollbar {
    display: none;
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
    width: 4.6rem;
    height: 4.6rem;
  }

  &.xBtn {
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(0, 0);
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;

  &.qty {
    text-align: center;
    width: 100%;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.3fr 1fr;
  margin: 0 0 3.2rem 0;
  position: relative;
  height: 12rem;
`;

export const ImgBox = styled.div`
  width: 12rem;
  height: 12rem;
  position: relative;
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
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const Text = styled.p<itemLengthProps>`
  font-size: 1.8rem;
  font-weight: 800;

  &.qty {
    margin: ${(props) => props.items === 1 && "4rem 0 0 0"};
    color: #fa5252;
    font-size: 1.8rem;
  }

  &.size {
    color: #495057;
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export const SubText = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const Price = styled.p`
  font-size: 1.8rem;
  color: #03c73c;
  font-weight: 600;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: right;
`;

export const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2.4rem;
  width: 100%;
`;

export const Button = styled.button`
  padding: 1.6rem;
  background-color: #03c73c;
  font-size: 2rem;
  color: #fff;

  &.checkout__btn {
    width: 100%;
  }

  &:hover {
    filter: brightness(110%);
  }

  &.minus {
    background-color: #e9b17c;
  }

  &.plus {
    background-color: #e98d38;
  }
`;

export const Bottom = styled.div``;

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000;
  padding: 1rem 0;

  &:nth-child(3) {
    border-bottom: none;
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const EmptyBox = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 6rem;
`;

export const Background = styled.div<imageProps>`
  background-image: url(${(props) => props.img});
  width: 20rem;
  height: 20rem;
  background-size: cover;
  background-position: center;
`;

export const EmptyText = styled.h1`
  margin-top: 3.4rem;
  letter-spacing: 1px;
  font-size: 2.4rem;
`;
