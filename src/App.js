import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Pages/Home/Home';
import Review from './Components/Pages/Review/Review';
import Manage from './Components/Pages/Management/Manage';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/review' element={<Review />} />
          <Route path='/manage' element={<Manage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
