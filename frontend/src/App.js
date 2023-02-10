import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Products from './components/Products';
import Footer from './components/Footer'
import Signup from './components/Signup';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />  
        <Route path='product' element={<Products/>} />  
        <Route path='signup' element={<Signup/>} />  
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
