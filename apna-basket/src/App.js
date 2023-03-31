import './App.css';
import { FruitandVeg } from './Pages/FruitandVeg';
import { Admin } from './Pages/Admin';
import { Navbar } from './components/Navbar';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FruitandVeg/>
      {/* <Admin/> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
