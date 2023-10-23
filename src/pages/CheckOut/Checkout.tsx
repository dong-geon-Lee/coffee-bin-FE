import NavMenu from "../../components/NavMenu/NavMenu";
import checked from "../../assets/checked.svg";
import { Link } from "react-router-dom";
import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants/constants";

const Checkout = () => {
  return (
    <S.Container>
      <S.Section>
        <S.Header>
          <Link to="/home">
            <S.Logo src={A.back} alt="logo" />
          </Link>
          <S.Title>결제</S.Title>
          <S.Logo src={A.heart2} alt="logo" className="logo" />
        </S.Header>

        <S.OrderBox>
          <S.Div>
            <S.Logo src={checked} className="checked" />
            <S.Title className="order__completed">{C.COMPLETE__ORDER}</S.Title>
            <S.Text>{C.DETAIL__PAYMENT__MESSAGE}</S.Text>
          </S.Div>

          <S.Div className="btn__group">
            <Link to="/home">
              <S.Button className="home__btn">메인페이지</S.Button>
            </Link>
            <Link to="/details">
              <S.Button className="checkout__btn">결제내역</S.Button>
            </Link>
          </S.Div>
        </S.OrderBox>
      </S.Section>
      <NavMenu />
    </S.Container>
  );
};

export default Checkout;
