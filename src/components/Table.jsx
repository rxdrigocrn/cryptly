import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Table.css"
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'


const Table = ({ coins }) => {

    const navigate = useNavigate()

    const handleRowClick = (coinId) => {
        console.log('Clicked coin ID:', coinId); 
        navigate(`coin/${coinId}`)
    }

    useEffect(() => {
        ScrollTrigger.refresh();
    }, [coins]);

    return (
        <div className='table-container'>
            <span>GREATEST IN THE MARKET</span>
            <div className="table-control">
                <div className="table-header">
                    <h2>Trending coins</h2>
                    <p>Click on the coin to see more details</p>
                </div>
                <div className="table-body">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Last price</th>
                                <th>24Hrs Change</th>
                                <th>Market cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coins.map(coin => (
                                <tr key={coin.id} onClick={() => handleRowClick(coin.id)}>
                                    <td><img src={coin.image} alt="" />{coin.name}</td>
                                    <td>{coin.symbol.toUpperCase()}</td>
                                    <td><span>$</span>{coin.current_price.toFixed(2)}</td>
                                    <td style={{ color: coin.market_cap_change_percentage_24h < 0 ? 'red' : 'green' }}>{coin.market_cap_change_percentage_24h.toFixed(2)}
                                    </td>
                                    <td><span>$</span>{coin.market_cap.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table