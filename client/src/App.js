import './App.css';
import Home from './screen/Home';
import Login from './screen/Login.js';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './screen/Signup.js';
import DetailCategory from './screen/DetailCategory.js';
import { CartProvider } from './components/ContextReducer.js';
import DetailDress from './screen/DetailDress.js'
import HeroSection from './screen/HeroSection.js';
import DetailOneItem from './screen/DetailOneItem'
import Cart from './screen/Cart'
import About from './screen/About.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path='/:id' element={<DetailCategory />} />
          <Route path='/:id/:id' element={<DetailOneItem />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
