import React from 'react';
import { useParams } from 'react-router-dom';
import "./Coin.css"
function Coin({ coins }) {
  const { coinId } = useParams();
  const coin = coins.find(c => c.id === coinId);

  if (!coin) {
    return <div>Coin not found</div>;
  }

  return (
    <>
      <div className="coin">
        <div className="coin-detail">
          <img src={coin.image} alt="" />
          <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
          <div className="coin-specific">
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
          <p>Current Price: $ {coin.current_price.toFixed(2)}</p>
          <p>Market Cap: $ {coin.market_cap.toLocaleString()}</p>
          <p>Market Cap percentage 24h: <span style={{ color: coin.market_cap_change_percentage_24h < 0 ? 'red' : 'green' }}>{coin.market_cap_change_percentage_24h.toFixed(2)}</span></p>
          <p>High value 24h: $ {coin.high_24h}</p>
          <p>Low value 24h $ {coin.low_24h}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Coin;
