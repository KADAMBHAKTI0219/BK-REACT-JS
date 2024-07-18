import logo from './logo.svg';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';

function App() {
  return (
   <div className="App" style={{textDecoration:"none",textAlign:"center"}}>
    <Navbar/>
    <AllRoutes/>
   </div>
  );
}

export default App;
