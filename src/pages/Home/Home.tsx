import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState, authTokenState } from "../../recoils/userAuthState";
import {
  checkedMenuState,
  currentItemState,
} from "../../recoils/coffeeItemState";
import { ButtonProps, productProps } from "../../@types/types";
import { Link } from "react-router-dom";
import * as C from "../../constants/constants";
import * as S from "./styles";
import * as A from "../../assets";

const Home = () => {
  const [authActive, setAuthActive] = useRecoilState(authActiveState);
  const [checkedMenu, setCheckedMenu] = useRecoilState(checkedMenuState);
  const { espresso, coldbrew, frappuccino, blended } = checkedMenu;

  const { homeStatus, likeStatus, cartStatus, profileStatus } =
    useRecoilValue(currentItemState);

  // const token = useRecoilValue(authTokenState);
  const [, setToken] = useRecoilState(authTokenState);

  const navigate = useNavigate();
  const homeItemStatus = homeStatus ? homeStatus.length : 0;
  const likeItemStatus = likeStatus ? likeStatus.length : 0;
  const cartItemStatus = cartStatus ? cartStatus.length : 0;
  const profileItemStatus = profileStatus ? profileStatus.length : 0;

  const onChange = (e: ButtonProps) => {
    setCheckedMenu({
      ...checkedMenu,
      [e.target.name]: e.target.checked,
    });
  };

  const handleNavigate = (destination: string) => {
    if (destination === "login") {
      setAuthActive(false);
      localStorage.removeItem("token");
      setToken(null);
    }
    navigate(`/${destination}`);
  };

  // useEffect(() => {
  //   if (!authActive) navigate("/login");
  // }, [authActive, navigate]);

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.ImgBox>
            <S.Img src={A.img} alt="logo" />
          </S.ImgBox>
          <S.Text>메인페이지</S.Text>
          <S.Button onClick={() => handleNavigate("login")}>
            <S.ImgBox className="logout">
              <S.Img src={A.logout} />
            </S.ImgBox>
          </S.Button>
        </S.Header>

        <S.Section>
          <S.Div className="main">
            <S.Div className="flex">
              <S.Logo src={A.logo3} className="logo__svg" />
              <S.Label htmlFor="espresso">에스프레소</S.Label>
              <S.Input
                type="checkbox"
                id="espresso"
                name="espresso"
                checked={espresso}
                onChange={onChange}
              />
            </S.Div>
            <S.Div className="flex">
              <S.Logo src={A.logo7} />
              <S.Label htmlFor="coldbrew">콜드 브루</S.Label>
              <S.Input
                type="checkbox"
                id="coldbrew"
                name="coldbrew"
                checked={coldbrew}
                onChange={onChange}
              />
            </S.Div>
            <S.Div className="flex">
              <S.Logo src={A.logo4} />
              <S.Label htmlFor="frappuccino">푸라푸치노</S.Label>
              <S.Input
                type="checkbox"
                id="frappuccino"
                name="frappuccino"
                checked={frappuccino}
                onChange={onChange}
              />
            </S.Div>
            <S.Div className="flex">
              <S.Logo src={A.logo6} />
              <S.Label htmlFor="blended">블렌디드</S.Label>
              <S.Input
                type="checkbox"
                id="blended"
                name="blended"
                checked={blended}
                onChange={onChange}
              />
            </S.Div>
          </S.Div>

          <S.ContentBox>
            {homeStatus?.map((item: productProps) => (
              <S.Contents key={item.id}>
                <Link to={`/home/${item.id}`} state={{ product: item }}>
                  <S.ImgBox className="content">
                    <S.Img src={item.image} alt="logo" />
                  </S.ImgBox>
                </Link>
                <S.Title>{item.title}</S.Title>
              </S.Contents>
            ))}
          </S.ContentBox>
        </S.Section>
      </S.Wrapper>

      <S.MenuIcons>
        <S.ImgBox
          className="icon__box"
          onClick={() => handleNavigate(C.ROUTE__HOME)}
        >
          <S.Img src={A.home} className="icons" />
          <S.IconsText>{homeItemStatus}</S.IconsText>
        </S.ImgBox>
        <S.ImgBox
          className="icon__box"
          onClick={() => handleNavigate(C.ROUTE__LIKES)}
        >
          <S.Img src={A.heart} className="icons" />
          <S.IconsText>{likeItemStatus}</S.IconsText>
        </S.ImgBox>
        <S.ImgBox
          className="icon__box"
          onClick={() => handleNavigate(C.ROUTE__CARTITEMS)}
        >
          <S.Img src={A.cart} className="icons" />
          <S.IconsText>{cartItemStatus}</S.IconsText>
        </S.ImgBox>
        <S.ImgBox
          className="icon__box"
          onClick={() => handleNavigate(C.ROUTE__PROFILES)}
        >
          <S.Img src={A.profile} className="icons" />
          <S.IconsText>{profileItemStatus}</S.IconsText>
        </S.ImgBox>
      </S.MenuIcons>
    </S.Container>
  );
};

export default Home;
