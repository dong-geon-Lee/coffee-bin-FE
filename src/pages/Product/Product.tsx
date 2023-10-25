import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { itemOptionProps } from "../../@types/types";
import { accountListState, authUserState } from "../../recoils/userAuthState";
import {
  coffeeItemState,
  quantityState,
  totalPriceState,
  selectedSizeState,
  recordedQtyState,
} from "../../recoils/coffeeItemState";
import {
  addCartItems,
  addLikeProduct,
  findSameProduct,
  formattedNumber,
  selectProductSize,
} from "../../helpers/helpers";
import NavMenu from "../../components/NavMenu/NavMenu";
import * as S from "./styles";
import * as A from "../../assets";

const Product = () => {
  const [selectedSize, setSelectedSize] = useRecoilState(selectedSizeState);
  const [quantity, setQuantity] = useRecoilState(quantityState);
  const [totalPrice, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setRecordedQty] = useRecoilState(recordedQtyState);

  const coffeeItem = useRecoilValue(coffeeItemState);
  const authUser = useRecoilValue(authUserState);

  const setUserLikeLists = useSetRecoilState(authUserState);
  const setUserCartLists = useSetRecoilState(authUserState);
  const setAccounts = useSetRecoilState(accountListState);

  const { state } = useLocation();
  const { id, title, description, image, stars, product } =
    state && state.product;

  const selectedSizeIndex = selectProductSize(product, selectedSize);
  const targetItems = findSameProduct(coffeeItem, id);
  const activeLikes = addLikeProduct(authUser?.likeLists, targetItems);

  const handleLikes = () => {
    setUserLikeLists({
      ...authUser,
      likeLists: [
        ...authUser.likeLists,
        { ...targetItems, likes: !targetItems?.likes },
      ],
    });

    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return {
            ...user,
            likeLists: [
              ...authUser.likeLists,
              { ...targetItems, likes: !targetItems?.likes },
            ],
          };
        }
        return { ...user };
      });
    });
  };

  const handlePlusClick = () => {
    if (quantity > 8) return;
    setQuantity((prevState) => prevState + 1);
  };

  const handleMinusClick = () => {
    if (quantity < 2) return;
    setQuantity((prevState) => prevState - 1);
  };

  const handleResetMenu = (price: number) => {
    setQuantity(1);
    setSelectedSize(price);
    setTotalPrice(price);
  };

  const likeBtnDisabled = !!activeLikes?.likes;
  const cartBtnDisabled = !(selectedSizeIndex + 1);
  const cartItems = addCartItems(
    product,
    image,
    title,
    quantity,
    totalPrice,
    authUser,
    selectedSize
  );

  const handleCartItem = () => {
    setTotalPrice(selectedSize * quantity);
    setRecordedQty(quantity);
    setUserCartLists({
      ...authUser,
      cartLists: [...authUser.cartLists, cartItems],
    });

    setAccounts((prevState) => {
      return prevState.map((user: any) => {
        if (user.userId === authUser.userId) {
          return {
            ...authUser,
            cartLists: [...authUser.cartLists, cartItems],
          };
        }
        return { ...user };
      });
    });

    setQuantity(0);
    setSelectedSize(0);
  };

  const arrowResetBtn = () => {
    setQuantity(0);
    setSelectedSize(0);
  };

  return (
    <S.Container>
      <S.Section>
        <S.Header>
          <Link to="/home" onClick={arrowResetBtn}>
            <S.Logo src={A.back} alt="logo" />
          </Link>
          <S.Title>상품페이지</S.Title>
          <S.Logo src={A.coffee8} alt="logo" className="logo" />
        </S.Header>
        <S.ImgBox>
          <S.Img src={image} />
        </S.ImgBox>
        <S.ContentBox>
          <S.Contents>
            <S.Title className="content__title">{title}</S.Title>
            <S.LogoBox>
              {stars.map((stars: number, index: string) => (
                <S.Logo
                  key={index}
                  src={stars === 1 ? A.star : A.star0}
                  alt="star"
                  className="stars"
                />
              ))}
            </S.LogoBox>
          </S.Contents>
          <S.Description>{description}</S.Description>
          <S.SizeBox>
            {product.map((item: itemOptionProps) => (
              <S.Div key={item.id}>
                <S.Button
                  onClick={() => handleResetMenu(Number(item.price))}
                  active={item.id === selectedSizeIndex + 1}
                >
                  {item.size}
                </S.Button>
              </S.Div>
            ))}
          </S.SizeBox>
          <S.PriceBox>
            <S.PriceText>
              상품 가격:{formattedNumber(selectedSize * quantity)}원
            </S.PriceText>
            <S.CountBox>
              <S.Buttons
                className="minus"
                onClick={handleMinusClick}
                disabled={cartBtnDisabled}
              >
                -
              </S.Buttons>
              <S.Title className="quantity">{quantity}</S.Title>
              <S.Buttons
                className="plus"
                onClick={handlePlusClick}
                disabled={cartBtnDisabled}
              >
                +
              </S.Buttons>
            </S.CountBox>
          </S.PriceBox>
          <S.BtnBox>
            <S.Buttons
              className="likes"
              onClick={handleLikes}
              disabled={likeBtnDisabled}
            >
              좋아요
            </S.Buttons>
            <S.Buttons
              className="carts"
              onClick={handleCartItem}
              disabled={cartBtnDisabled}
            >
              장바구니
            </S.Buttons>
          </S.BtnBox>
        </S.ContentBox>
      </S.Section>
      <NavMenu />
    </S.Container>
  );
};

export default Product;
