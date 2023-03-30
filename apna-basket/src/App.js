import './App.css';
import { Admin } from './Pages/Admin';
import { Navbar } from './components/Navbar';
import { HomePage } from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Admin/>
    </div>
  );
}

export default App;
