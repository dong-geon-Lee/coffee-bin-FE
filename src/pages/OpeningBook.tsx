import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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

const OpeningBook = () => {
  const [openBook, setOpenBook] = useRecoilState(openBookState);
  const authActive = useRecoilValue(authActiveState);

  const handleBookPage = () => {
    setOpenBook((prevState) => !prevState);
  };

  return (
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
  );
};

export default OpeningBook;
