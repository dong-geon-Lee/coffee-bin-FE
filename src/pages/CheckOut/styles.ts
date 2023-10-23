import styled from "styled-components";

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
  }

  &.heart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    transition: all 0.3s ease;
  }

  &.checked {
    width: 6.4rem;
    height: 6.4rem;
    object-fit: cover;
  }
`;

export const OrderBox = styled.div`
  position: relative;
  width: 90%;
  height: 50%;
  margin: auto;
  background-color: #fff;
`;

export const Div = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  &.btn__group {
    top: 75%;
    flex-direction: row;
    justify-content: center;
    gap: 2.4rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;

  &.order__completed {
    font-size: 2.4rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin: 2rem 0 1.2rem 0;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

export const Button = styled.button`
  padding: 1.2rem;
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;

  &:hover {
    filter: brightness(110%);
  }

  &.home__btn {
    background-color: #df4b4b;
  }

  &.checkout__btn {
    background-color: #03c73c;
  }
`;
