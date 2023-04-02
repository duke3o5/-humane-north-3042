import { Route, Routes } from "react-router-dom";
import { FruitandVeg } from "../Pages/FruitandVeg";
import { SingleProductPage } from "../Pages/SingleProductPage";
import Cart from "../Pages/CartPage";
import LoginPages from "../Routes/LoginPages";
import Address from "../Routes/Address";
import PaymentPage from "../Routes/Payment";
import { HomePage } from "../Pages/HomePage";
import { AdminDataList } from "./adminComponents/AdminDataList";
import { AdminAddDataForm } from "./adminComponents/AdminAddDataForm";
import { AdminStats } from "./adminComponents/AdminStats";
import { AdminEditProduct } from "./adminComponents/AdminEditProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<FruitandVeg />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route path="*" element={<h3>Page Not Found !</h3>} />
      <Route path="/login" element={<LoginPages />} />
      <Route path="/productForm" element={<AdminAddDataForm />} />
      <Route path="/admin" element={<AdminDataList />} />
      <Route path="/stats" element={<AdminStats />} />
      <Route path="/edit/:id" element={<AdminEditProduct />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default MainRoutes;
