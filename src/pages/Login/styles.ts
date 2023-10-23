import styled from "styled-components";
import { ButtonProps, openProps } from "../../@types/types";

export const Container = styled.div<openProps>`
  width: 60rem;
  height: 80rem;
  position: relative;
`;

export const Form = styled.form<openProps>`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 1.4rem 0;
`;

export const Label = styled.label`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.4rem;
`;

export const Input = styled.input`
  padding: 1.4rem 2rem;
  font-size: 2.6rem;
  font-weight: 500;
  background-color: #f3d5b5;
  border-radius: 2.4rem;

  &::placeholder {
    font-size: 1.6rem;
  }
`;

export const Button = styled.button<ButtonProps>`
  padding: 1.6rem 1.6rem;
  background-color: #7f553a;
  color: #fff;
  border: none;
  border-radius: 2rem;
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
  right: 5%;
`;
