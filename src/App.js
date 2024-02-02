import './App.css';
import Navbar from './Comps/Navbar/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import LoginSighup from './Pages/LoginSighup';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Comps/Footer/Footer'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Routes = require("react-router-dom").Routes;
const Route = require("react-router-dom").Route;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/men' element={<ShopCategory category='men' />} />
          <Route path='/women' element={<ShopCategory category='women' />} />
          <Route path='/kid' element={<ShopCategory category='kid' />} />
          <Route path='/product' element={<Product/> }> 
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSighup/>} />


          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
