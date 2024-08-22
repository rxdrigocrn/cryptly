import React from 'react';
import { useParams } from 'react-router-dom';

function Coin({ coins }) {
  const { coinId } = useParams();
  const coin = coins.find(c => c.id === coinId);

  if (!coin) {
    return <div>Coin not found</div>;
  }

  return (
    <>
    <div className="coin">
      <h1>{coin.name} ({coin.symbol.toUpperCase()})</h1>
      <p>Current Price: ${coin.current_price.toFixed(2)}</p>
      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
      <p>...other details...</p>
    </div>
    </>
  );
}

export default Coin;
