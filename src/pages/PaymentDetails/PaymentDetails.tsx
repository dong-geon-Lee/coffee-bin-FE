import NavMenu from "../../components/NavMenu/NavMenu";
import payment from "../../assets/payment.svg";
import { useRecoilValue } from "recoil";
import { paymentListState } from "../../recoils/userAuthState";
import { Link } from "react-router-dom";
import * as S from "./styles";
import * as A from "../../assets";

const PaymentDetails = () => {
  const paymentList = useRecoilValue(paymentListState);

  return (
    <S.Container>
      <S.Section>
        <S.Header>
          <Link to="/profiles">
            <S.Logo src={A.back} alt="logo" />
          </Link>
          <S.Title>결제내역</S.Title>
          <S.Logo src={A.note} alt="logo" className="logo" />
        </S.Header>

        {paymentList.length === 0 && (
          <S.EmptyBox>
            <S.Background img={payment} />
            <S.LogoText>No payment details.</S.LogoText>
          </S.EmptyBox>
        )}

        <S.Div>
          {paymentList?.map((item: any) => (
            <S.Card key={item.id}>
              <S.Text>주문코드: {item.id}</S.Text>
              <S.Text className="title">제품: {item.title}</S.Text>
              <S.Text>크기: {item.size}</S.Text>
              <S.Text>가격: {item.price}원</S.Text>
              <S.Text>수량: {item.recordedQty}개</S.Text>
              <S.Text>주문합계: {item.total}원</S.Text>
              <S.Text className="dates">결제날짜: {item.orderDate}</S.Text>
            </S.Card>
          ))}
        </S.Div>
      </S.Section>
      <NavMenu />
    </S.Container>
  );
};

export default PaymentDetails;
