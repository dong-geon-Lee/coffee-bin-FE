import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { userProps } from "../../@types/types";
import axios from "axios";

import * as S from "./styles";
import * as C from "../../constants/constants";
import * as A from "../../assets";

const Register = () => {
  const [authInput, setAuthInput] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const { email, password, password2 } = authInput;
  const navigate = useNavigate();

  const onChange = (e: userProps) => {
    setAuthInput({
      ...authInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const condition = !email || !password || !password2;
      const condition2 = password !== password2;

      if (condition) {
        alert(C.EMPTY__INPUT__MESSAGE);
        return;
      }

      if (condition2) {
        alert("패스워드가 일치하지 않습니다");
        return;
      }

      await axios.post("/auth/signup", { email, password });
      alert("회원가입 완료되었습니다.");
      navigate("/login");
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftSide>
          <S.DarkOverlay />
          <S.BackImg image={A.leftLanding} />
        </S.LeftSide>

        <S.RightSide image={A.design2}>
          <S.Form onSubmit={handleSignup}>
            <S.Box>
              <S.Title>환영합니다!</S.Title>
              <S.Text>
                커피빈은 다양한 커피를 제공합니다. 지금 바로 시작해보세요!
              </S.Text>
            </S.Box>
            <S.Div>
              <S.Label>이메일</S.Label>
              <S.Input
                type="text"
                placeholder="이메일을 입력해 주세요"
                onChange={onChange}
                value={email}
                name="email"
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
            <S.Div>
              <S.Label>비밀번호 재확인</S.Label>
              <S.Input
                type="password"
                placeholder="비밀번호를 입력해 주세요"
                onChange={onChange}
                value={password2}
                name="password2"
              />
            </S.Div>
            <S.Button type="submit">회원가입</S.Button>
            <S.Div>
              <S.Text>
                계정이 있으신가요? <Link to="/login">로그인 하기</Link>
              </S.Text>
            </S.Div>
          </S.Form>
        </S.RightSide>
      </S.Wrapper>
    </S.Container>
  );
};

export default Register;
