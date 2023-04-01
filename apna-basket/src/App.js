import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <h1>Apna Basket</h1> */}
      {/* <FruitandVeg/> */}
      {/* <Admin/> */}
      <Navbar />
      <HomePage />
      <Footer />
      {/* <Admin/> */}
    </div>
  );
}

export default App;
