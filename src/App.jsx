import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Coin from './pages/Coin'

export const navItems = [
  { label: "Home", href: "#" },
  { label: "Market Update", href: "#" },
  { label: "Choose Us", href: "#" },
  { label: "Join Us", href: "#" },
];

function App() {


  return (
    <>
    <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinId' element={<Coin/>}/>
        </Routes>
    </div>
    </>
  )
}

export default App
