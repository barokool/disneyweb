import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
import Banner from './components/login/Banner';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Detail from './pages/detail/Detail'
import Error from './pages/Error';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Banner/>}/>
          <Route path="/404" element={<Error/>}/> 
          <Route path="/home" element={<Home/>}/> 
          <Route path="/detail/:id" element={<Detail/>}/>
              
        </Routes>
      </Router>
    </div>
  );
}

export default App;
