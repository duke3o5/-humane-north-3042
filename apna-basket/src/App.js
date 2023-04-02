import "./App.css";
import { FruitandVeg } from "./Pages/FruitandVeg";
import { Admin } from "./Pages/Admin";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./Pages/HomePage";
import SignUp from "./Pages/SignUp";
import { Login } from "./Pages/Login";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <FruitandVeg/> */}
      {/* <Admin/> */}
      {/* <HomePage /> */}
      {/* <Admin/> */}
      <SignUp/>
      <Login />
    </div>
  );
}

export default App;
