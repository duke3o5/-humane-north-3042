import './App.css';
import { Admin } from './Pages/Admin';
import { Navbar } from './components/Navbar';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Admin/>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
