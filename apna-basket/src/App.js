import MainRoutes from './components/MainRoutes';
import { Footer } from './components/Footer';
import Nav from './components/adminComponents/Navbar';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainRoutes/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
