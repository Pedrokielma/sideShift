import { useState, useEffect } from "react";
import './CoinList.scss'

import axios from "axios";

interface Coin {
    name: string;
    symbol: string;
    precision: number;
    explorer: string;
  }

function CoinList() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    axios
      .get("https://sideshift.ai/api/v2/coins")
      .then((response) => setCoins(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
    {coins.map((coin: Coin) => (
      <div key={coin.symbol} className="coin-card">
        <h3>{coin.name}</h3>
        <p>{coin.symbol}</p>
        <p>{coin.precision}</p>
        <a href={coin.explorer} target="_blank" rel="noreferrer">
          Explorer
        </a>
      </div>
    ))}
  </div>
  );
}

export default CoinList;
