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
  overflow: hidden;
  position: relative;
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
    width: 4.6rem;
    height: 4.6rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
`;

export const ImgBox = styled.div`
  width: 18.6rem;
  height: 18.6rem;
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
  border-radius: 50%;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.4rem;
`;

export const UserInfo = styled.div`
  margin-top: 1.2rem;
  text-align: center;
  border: 1px solid #000;
  width: 48rem;
  height: 27.27rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: baseline;
  gap: 2.6rem;
  background-color: #ffd8a8;
  padding: 1.2rem;
  justify-items: left;
  align-items: center;
  border-bottom: 1px solid #000;

  &:last-child {
    border-bottom: none;
  }
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  display: block;
  height: 100%;
`;

export const Span = styled.span`
  font-size: 1.8rem;
  font-weight: 800;
  display: block;

  &.choice__bank {
    font-size: 1.6rem;
    color: #000;
    letter-spacing: 1px;
  }
`;

export const Select = styled.select`
  padding: 1rem;
  cursor: pointer;
  outline: none;
`;

export const Option = styled.option``;

export const SubBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const BtnBox = styled.div`
  display: flex;
  width: 100%;
  gap: 1.6rem;
  margin: 1rem 0 0 0;
`;

export const Button = styled.button`
  width: 100%;
  display: inline-block;
  padding: 1.6rem;
  background-color: ${(props) => (props.disabled ? "#868e96" : "#03c73c")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 1.6rem;

  &:hover {
    filter: brightness(110%);
  }

  &.pay__recorded {
    background-color: #df4b4b;
  }
`;
