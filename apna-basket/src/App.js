// import "./App.css";
// import { FruitandVeg } from "./Pages/FruitandVeg";
// import { Admin } from "./Pages/Admin";
// import { Navbar } from "./components/Navbar";
// import { HomePage } from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import { Login } from "./Pages/Login";

// import { FruitandVeg } from "./Pages/FruitandVeg";
// import { Admin } from "./Pages/Admin";
import { Navbar } from "./components/Navbar";
// import { HomePage } from "./Pages/HomePage";
import MainRoutes from "./components/MainRoutes";

// import Cart from "./Pages/CartPage";

// import LoginPages from "./Routes/LoginPages";
// import Address from "./Routes/Address";
// import PaymentPage from "./Routes/Payment";

function App() {
  return (
    <div className="App">
      {/* <FruitandVeg/> */}
      <Navbar />
      <MainRoutes /> {/* <Admin/> */}
      {/* <LoginPages/> */}
      {/* <Address/> */}
      {/* <PaymentPage/> */}
      {/* <HomePage /> */}
      {/* <Admin/> */}
      {/* <SignUp />
      <Login /> */}
    </div>
  );
}

export default App;
