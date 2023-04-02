import { Route, Routes } from "react-router-dom";
import { FruitandVeg } from "../Pages/FruitandVeg";
import { SingleProductPage } from "../Pages/SingleProductPage";
import Cart from "../Pages/CartPage";
// import LoginPages from "../Routes/LoginPages";
import Address from "../Routes/Address";
import PaymentPage from "../Routes/Payment";
import { Login } from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import { AdminDataList } from "./adminComponents/AdminDataList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<FruitandVeg />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="*" element={<h3>Page Not Found !</h3>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/address" element={<Address />} />
      <Route path="/admin" element={<AdminDataList />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default MainRoutes;
