import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authActiveState, openBookState } from "../recoils/userAuthState";
import Login from "./Login/Login";
import Home from "./Home/Home";
import CartItems from "./CartItems/CartItems";
import Profiles from "./Profiles/Profiles";
import Likes from "./Likes/Likes";
import Product from "./Product/Product";
import Checkout from "./CheckOut/Checkout";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import StartPage from "../components/StartPage/StartPage";
import * as A from "../assets";
import * as S from "./styles";

const OpeningBook = () => {
  const [openBook, setOpenBook] = useRecoilState(openBookState);
  const authActive = useRecoilValue(authActiveState);

  const handleBookPage = () => {
    setOpenBook((prevState) => !prevState);
  };

  return (
    <S.Container>
      <S.Wrapper open={openBook}>
        <S.LoginBox loginImg={A.image2} open={openBook}>
          {openBook && (
            <Router>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="home/:id" element={<Product />} />
                <Route path="likes" element={<Likes />} />
                <Route path="cartItems" element={<CartItems />} />
                <Route path="profiles" element={<Profiles />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="details" element={<PaymentDetails />} />
              </Routes>
            </Router>
          )}
          {!authActive && (
            <Router>
              <Link to="/">
                <S.Div className="back" open={openBook}>
                  <S.Button
                    onClick={handleBookPage}
                    className="back__btn"
                    disabled={!openBook}
                  >
                    ⬅ 나가기
                  </S.Button>
                </S.Div>
              </Link>
            </Router>
          )}
        </S.LoginBox>
        <StartPage handleBookPage={handleBookPage} openBook={openBook} />
      </S.Wrapper>
    </S.Container>
  );
};

export default OpeningBook;
