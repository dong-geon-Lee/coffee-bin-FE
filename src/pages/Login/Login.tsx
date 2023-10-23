import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { userProps } from "../../@types/types";
import { checkAuthUser } from "../../helpers/helpers";

import {
  authActiveState,
  authUserState,
  customerListState,
} from "../../recoils/userAuthState";

import * as S from "./styles";
import * as C from "../../constants/constants";
import * as A from "../../assets";

import axios from "axios";

const Login = () => {
  const [customers, setCustomers] = useRecoilState(customerListState);
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

    const checkAuth = checkAuthUser(customers, userId, password);

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

  console.log(customers);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/auth");
      const datas = await response.data;
      setCustomers(datas);
    };
    fetchData();
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftSide>
          <S.DarkOverlay />
          {/* <S.Img src={A.leftLanding} alt="image" /> */}
          <S.BackImg image={A.leftLanding} />
          {/* <S.GuestBox>
            <S.Button className="guest__btn" onClick={generateRandomGuest}>
              {C.RANDOM__GUEST__ACCOUNT}
            </S.Button>
          </S.GuestBox> */}
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
                계정이 필요한가요? <Link to="/signup">가입하기</Link>
              </S.Text>
            </S.Div>
          </S.Form>
        </S.RightSide>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
