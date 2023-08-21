import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shoppingCart" element={ <ShoppingCart /> } />
    </Routes>
  );
}

export default App;
