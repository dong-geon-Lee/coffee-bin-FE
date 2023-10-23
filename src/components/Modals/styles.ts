import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;

export const ModalBox = styled.div`
  width: 46rem;
  height: 46rem;
  border-radius: 1rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 3.2rem 4.4rem;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 3rem 0 auto 0;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  background-color: #00c73a;
  color: #fff;
  padding: 1.2rem;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  margin: 1.6rem 0 1.6rem 0;
`;

export const ChargeBox = styled.div`
  position: relative;
  border-bottom: 1px solid #000;
  padding-bottom: 0.4rem;
`;

export const Price = styled.p`
  font-size: 2rem;
  user-select: none;
  letter-spacing: 1px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.4rem;
`;

export const Button = styled.button`
  padding: 1.4rem 4rem;
  background-color: #ffedb6;
  display: inline-block;

  &.pay__btn {
    background-color: ${(props) => (props.disabled ? "#868e96" : "#00c73a")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    color: #fff;
    padding: 1.6rem 1.2rem;
    margin-top: auto;
    font-size: 1.6rem;
    border: 1px solid transparent;
    flex: 1;

    &:hover {
      filter: brightness(105%);
    }
  }

  &.reset__btn {
    position: absolute;
    top: -35%;
    right: 0;
    transform: translate(0, 20%);
    font-size: 3.2rem;
    font-weight: 400;
    padding: 0;
    margin: 0;
    background-color: inherit;
  }

  &.cash__btn:hover {
    filter: brightness(105%);
  }

  &.cash__btn {
    border: 1px solid #868e96;
    padding: 1.4rem 2.6rem;
    font-size: 1.6rem;
    font-weight: 600;
    letter-spacing: 1.5px;
  }

  &.close__btn {
    background-color: #212529;
    color: #fff;
    padding: 1.6rem 1.2rem;
    margin-top: auto;
    font-size: 1.6rem;
    border: 1px solid transparent;
    flex: 1;

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const Select = styled.select`
  padding: 1.2rem;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 1px;
  cursor: pointer;
  margin: auto 0 auto 0;
  outline: none;
  border-color: #868e96;
`;

export const Option = styled.option``;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto 0 2.6rem 0;
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const Span = styled.span`
  font-size: 2rem;
  font-weight: 800;
`;
