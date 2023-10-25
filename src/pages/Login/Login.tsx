import { useState } from "react";
import { useRecoilState } from "recoil";
import { authActiveState } from "../../recoils/userAuthState";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { userProps } from "../../@types/types";
import axios from "axios";

import * as S from "./styles";
import * as C from "../../constants/constants";
import * as A from "../../assets";

const Login = () => {
  const [, setAuthActive] = useRecoilState(authActiveState);

  const [authInput, setAuthInput] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = authInput;
  const navigate = useNavigate();

  const onChange = (e: userProps) => {
    setAuthInput({
      ...authInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || !password) {
      alert(C.EMPTY__INPUT__MESSAGE);
      return;
    }

    const response = await axios.post("/auth/signin", {
      email: userId,
      password,
    });

    const token = response.data;
    if (!token) {
      setAuthActive(false);
      alert(C.ERROR__INPUT__MESSAGE);
      return;
    }
    setAuthActive(true);
    navigate("/home");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftSide>
          <S.DarkOverlay />
          <S.BackImg image={A.leftLanding} />
        </S.LeftSide>

        <S.RightSide image={A.design2}>
          <S.Form onSubmit={handleAuth}>
            <S.Box>
              <S.Title>Welcome! 커피빈에 오신 것을 환영합니다.</S.Title>
            </S.Box>
            <S.Div>
              <S.Label>아이디</S.Label>
              <S.Input
                type="text"
                placeholder="아이디를 입력해 주세요"
                onChange={onChange}
                value={userId}
                name="userId"
              />
            </S.Div>
            <S.Div>
              <S.Label>비밀번호</S.Label>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                onChange={onChange}
                value={password}
                name="password"
              />
            </S.Div>
            <S.Button type="submit">로그인</S.Button>
            <S.Div>
              <S.Text>
                계정이 필요한가요? <Link to="/register">가입하기</Link>
              </S.Text>
            </S.Div>
          </S.Form>
        </S.RightSide>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
