import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userProps } from "../../@types/types";
import { checkAuthUser } from "../../helpers/helpers";
import {
  accountListState,
  authActiveState,
  authUserState,
} from "../../recoils/userAuthState";
import * as S from "./styles";
import * as C from "../../constants/constants";

const Login = () => {
  const accountLists = useRecoilValue(accountListState);
  const [, setAuthActive] = useRecoilState(authActiveState);
  const [, setAuthUser] = useRecoilState(authUserState);

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

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || !password) {
      alert(C.EMPTY__INPUT__MESSAGE);
      return;
    }

    const checkAuth = checkAuthUser(accountLists, userId, password);

    if (!checkAuth) {
      setAuthActive(false);
      alert(C.ERROR__INPUT__MESSAGE);
      return;
    } else {
      setAuthUser(checkAuth);
      setAuthActive(true);
      navigate("/home");
    }
  };

  const generateRandomGuest = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const { userId, password } = accountLists[randomIndex];
    setAuthInput({ userId, password: String(password) });
  };

  return (
    <S.Container>
      <S.GuestBox>
        <S.Button className="guest__btn" onClick={generateRandomGuest}>
          {C.RANDOM__GUEST__ACCOUNT}
        </S.Button>
      </S.GuestBox>

      <S.Form onSubmit={handleAuth}>
        <S.Div>
          <S.Label>아이디</S.Label>
          <S.Input
            type="text"
            placeholder="게스트 아이디를 입력하세요"
            onChange={onChange}
            value={userId}
            name="userId"
          />
        </S.Div>
        <S.Div>
          <S.Label>비밀번호</S.Label>
          <S.Input
            type="password"
            placeholder="게스트 비밀번호를 입력하세요"
            onChange={onChange}
            value={password}
            name="password"
          />
        </S.Div>
        <S.Button type="submit">로그인</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Login;
