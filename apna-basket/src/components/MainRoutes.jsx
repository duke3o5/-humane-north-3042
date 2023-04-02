import { Route, Routes } from "react-router-dom";
import { FruitandVeg } from "../Pages/FruitandVeg";
import { SingleProductPage } from "../Pages/SingleProductPage";
import LoginPages from "../Routes/LoginPages";
import Address from "../Routes/Address";
import PaymentPage from "../Routes/Payment";

const MainRoutes = () => {
    return (
      <Routes>
          <Route path="/products" element={<FruitandVeg/>}/>
          <Route path="/products/:id" element={<SingleProductPage/>} />
          <Route path="*" element={<h3>Page Not Found !</h3>} />
          <Route path = '/login' element={<LoginPages/>}/>
          <Route path="/address" element={<Address/>}/>
          <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
    )
  }
  
  export default MainRoutes
  
  