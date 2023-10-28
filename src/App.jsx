import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import "../src/css/reset.css"
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from "./components/Cart"
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Todos nuestros productos"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos por categoria:"}/>} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
