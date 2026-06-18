
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Signup from './pages/Signup';
function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  )

}

export default App;