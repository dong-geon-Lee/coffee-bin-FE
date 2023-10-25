import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import CartItems from "./CartItems/CartItems";
import Profiles from "./Profiles/Profiles";
import Likes from "./Likes/Likes";
import Product from "./Product/Product";
import Checkout from "./CheckOut/Checkout";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import Register from "./Register/Register";
import Landing from "./Landing/Landing";
// import { authTokenState } from "../recoils/userAuthState";
// import { useRecoilValue } from "recoil";
// import { useEffect } from "react";

const OpeningBook = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="login"
        // element={token ? <Navigate to="/home" /> : <Login />}
        element={<Login />}
      />
      <Route path="register" element={<Register />} />
      <Route
        path="home"
        // element={!token ? <Navigate to="/login" /> : <Home />}
        element={<Home />}
      />
      <Route path="home/:id" element={<Product />} />
      <Route path="likes" element={<Likes />} />
      <Route path="cartItems" element={<CartItems />} />
      <Route path="profiles" element={<Profiles />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="details" element={<PaymentDetails />} />
    </Routes>
  );
};

export default OpeningBook;
