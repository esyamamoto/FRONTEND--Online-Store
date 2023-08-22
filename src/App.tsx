import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { Home } from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shoppingCart" element={ <ShoppingCart /> } />
      <Route path="/productDetails/:id" element={ <ProductDetails /> } />
    </Routes>
  );
}

export default App;
