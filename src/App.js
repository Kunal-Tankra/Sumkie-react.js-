import ApiState from './context/apis/ApiState';
import './App.css';
import TopBuyNow from './components/TopBuyNow';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import More from './components/More';
import Cart from './components/cart/Cart';
import Sunglasses from './components/Sunglasses';
import Wayfarer from './components/Wayfarer';
import Cateye from './components/Cateye';
import Pilotstyle from './components/Pilotstyle';
import Blog from './components/Blog';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <ApiState>
          <TopBuyNow />
          <p className='promoCode'>Limited-Time Offers : 1st Time Buyer? Use "ONE" Promocode To Instantly Get 50% Off!</p>
          <Navbar />
          <Routes>
            <Route exact  path='/' element={<Home title={'hoMe'} />} />
            <Route exact  path='/cart' element={<Cart title={'cart'}/>} />
            <Route exact  path='/sunglasses' element={<Sunglasses title={'sunglasses'}/>} />
            <Route exact  path='/wayfarer' element={<Wayfarer title={'wayfarer'}/>} />
            <Route exact  path='/cateye' element={<Cateye title={'cat eye'}/>} />
            <Route exact  path='/pilotstyle' element={<Pilotstyle title={'pilotstyle'}/>} />
            <Route exact  path='/blog' element={<Blog title={'blog'}/>} />
            <Route exact  path='/more' element={<More title={'more'}/>} />
          </Routes>
        </ApiState>
      </BrowserRouter>
    </>
  );
}

export default App;
