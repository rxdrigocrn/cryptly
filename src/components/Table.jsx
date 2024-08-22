import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Table.css"



const Table = ({ coins }) => {

    const navigate = useNavigate()

    const handleRowClick = (coinId) => {
        console.log('Clicked coin ID:', coinId);  // Verifique se este log aparece no console
        navigate(`coin/${coinId}`)
    }


    return (
        <div className='table-container'>
            <span>GREATEST IN THE MARKET</span>
            <div className="table-control">
                <div className="table-header">
                    <h2>Trending coins</h2>
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
                                    <td>$ {coin.current_price.toFixed(2)}</td>
                                    <td style={{ color: coin.market_cap_change_percentage_24h < 0 ? 'red' : 'green' }}>{coin.market_cap_change_percentage_24h.toFixed(2)}
                                    </td>
                                    <td>$ {coin.market_cap.toLocaleString()}</td>
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