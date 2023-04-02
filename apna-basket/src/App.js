
import './App.css';
import { FruitandVeg } from './Pages/FruitandVeg';
import { Admin } from './Pages/Admin';
import { Navbar } from './components/Navbar';
import { HomePage } from './Pages/HomePage';
import MainRoutes from './components/MainRoutes';
import LoginPages from './Routes/LoginPages';
import Address from './Routes/Address';
import PaymentPage from './Routes/Payment';



function App() {
  return (
    <div className="App">

      {/* <FruitandVeg/> */}

      {/* <Admin/> */}
      {/* <LoginPages/> */}
      {/* <Address/> */}
      <PaymentPage/>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
