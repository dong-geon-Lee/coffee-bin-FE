import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentItemState } from "../../recoils/coffeeItemState";
import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants/constants";

const NavMenu = () => {
  const { homeStatus, likeStatus, cartStatus, profileStatus } =
    useRecoilValue(currentItemState);

  const homeItemStatus = homeStatus ? homeStatus.length : 0;
  const likeItemStatus = likeStatus ? likeStatus.length : 0;
  const cartItemStatus = cartStatus ? cartStatus.length : 0;
  const profileItemStatus = profileStatus ? profileStatus.length : 0;

  const navigate = useNavigate();

  const handleNavigate = (destination: string) => {
    navigate(`/${destination}`);
  };

  return (
    <S.Container>
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

export default NavMenu;
