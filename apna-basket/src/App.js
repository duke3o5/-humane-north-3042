
import { FruitandVeg } from './Pages/FruitandVeg';
import { Admin } from './Pages/Admin';
import { Navbar } from './components/Navbar';
import { HomePage } from './Pages/HomePage';
import MainRoutes from './components/MainRoutes';
import Cart from './Pages/CartPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes/>
      {/* <FruitandVeg/> */}
      {/* <Admin/> */}
      {/* <HomePage /> */}
      {/* <Admin/> */}
      {/* <Cart/> */}
    </div>
  );
}

export default App;
