import Spinner from "../../components/Spinner/Spinner";
import NavMenu from "../../components/NavMenu/NavMenu";
import { accountListState, authUserState } from "../../recoils/userAuthState";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { cartItemProps } from "../../@types/types";
import { formattedNumber, removeCartItem } from "../../helpers/helpers";
import {
  cartItemTotalState,
  paymentDetailState,
} from "../../recoils/coffeeItemState";
import * as S from "./styles";
import * as A from "../../assets";
import * as C from "../../constants/constants";

const CartItems = () => {
  const [activeSpinner, setActiveSpinner] = useState(false);

  const authUser = useRecoilValue(authUserState);
  const { cartLists } = useRecoilValue(authUserState);
  const cartItemTotal = useRecoilValue(cartItemTotalState);
  const paymentDetails = useRecoilValue(paymentDetailState);

  const setUserCartLists = useSetRecoilState(authUserState);
  const setAccounts = useSetRecoilState(accountListState);
  const setPaymentDetails = useSetRecoilState(paymentDetailState);

  const navigate = useNavigate();

  const handleRemoveCartItems = (id: string) => {
    const newItems = removeCartItem(cartLists, id);

    setUserCartLists({ ...authUser, cartLists: newItems });
    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return { ...authUser, cartLists: newItems };
        }
        return { ...user };
      });
    });
  };

  const handleCheckout = () => {
    setActiveSpinner(true);
    setPaymentDetails([...paymentDetails, ...cartLists]);
    setUserCartLists({
      ...authUser,
      cartLists: [],
      paymentLists: [...paymentDetails, ...cartLists],
    });

    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return {
            ...authUser,
            cartLists: [],
            paymentLists: [...paymentDetails, ...cartLists],
          };
        }
        return { ...user };
      });
    });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setActiveSpinner(false);
      if (activeSpinner) navigate("/checkout");
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [activeSpinner]);

  return (
    <S.Container>
      <S.Section items={cartLists}>
        <S.Header>
          <Link to="/home">
            <S.Logo src={A.back} alt="logo" />
          </Link>
          <S.Title>장바구니</S.Title>
          <S.Logo src={A.cart2} alt="logo" className="logo" />
        </S.Header>

        {activeSpinner && <Spinner />}

        <S.Center items={cartLists.length}>
          {cartLists.length > 0 ? (
            cartLists.map((item: cartItemProps) => (
              <S.Div key={item.id}>
                <S.ImgBox>
                  <S.Img src={item.image} alt="img" />
                </S.ImgBox>
                <S.ContentBox>
                  <S.Text items={cartLists.length}>{item.title}</S.Text>
                  <S.Price className="price">
                    {formattedNumber(Number(item.price))}원
                  </S.Price>
                  <S.Text className="size" items={cartLists.length}>
                    크기: {item.size}
                  </S.Text>
                </S.ContentBox>
                <S.ButtonBox>
                  <S.Btns>
                    <S.Text className="qty" items={cartLists.length}>
                      상품: {item.recordedQty} 개
                    </S.Text>
                  </S.Btns>
                  <S.Logo
                    src={A.xIcons}
                    alt="logo"
                    className="xBtn"
                    onClick={() => handleRemoveCartItems(String(item.id))}
                  />
                </S.ButtonBox>
              </S.Div>
            ))
          ) : (
            <S.EmptyBox className="empty__box">
              <S.Background img={A.emptyCart} />
              <S.EmptyText className="empty__text">{C.CART__EMPTY}</S.EmptyText>
            </S.EmptyBox>
          )}
        </S.Center>

        {cartLists.length > 0 && (
          <S.Bottom>
            <S.ItemBox>
              <S.Label>상품금액</S.Label>
              <S.Span>
                +{formattedNumber(cartItemTotal - C.SHIPPING__COST)}원
              </S.Span>
            </S.ItemBox>
            <S.ItemBox>
              <S.Label>배송비</S.Label>
              <S.Span>+{formattedNumber(C.SHIPPING__COST)}원</S.Span>
            </S.ItemBox>
            <S.ItemBox>
              <S.Label>주문금액</S.Label>
              <S.Span>{formattedNumber(cartItemTotal)} 원</S.Span>
            </S.ItemBox>
            <S.Button className="checkout__btn" onClick={handleCheckout}>
              결제하기
            </S.Button>
          </S.Bottom>
        )}
      </S.Section>
      <NavMenu />
    </S.Container>
  );
};

export default CartItems;
