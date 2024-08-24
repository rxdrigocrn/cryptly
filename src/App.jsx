import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Coin from './pages/Coin'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

export const navItems = [
  { label: "Home", href: "/#intro" },
  { label: "Market Update", href: "/#table-container" },
  { label: "Choose Us", href: "/#choose-us" },
  { label: "Newsletter", href: "/#newsletter" },
];



function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10'

  useEffect(() => {
    const fetchCoins = async () =>{
      try {
        const response = await axios.get(url)
        setCoins(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCoins()
  }, [])

  // useEffect(() => {
  //   console.log('Coins data:', coins); 
  // }, [coins]);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/coin/:coinId' element={<Coin coins={coins}/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
