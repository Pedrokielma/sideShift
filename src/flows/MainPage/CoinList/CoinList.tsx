import { useState, useEffect } from "react";
import "./CoinList.scss";

import axios from "axios";

interface Coin {
  name: string;
  symbol: string;
  precision: number;
  explorer: string;
}

function CoinList() {
  const [coins, setCoins] = useState<Coin[]>([]);

  async function fetchCoins() {
    try {
      const res = await
      axios.get("https://sideshift.ai/api/v2/coins");
      setCoins(res?.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div>
      {coins?.map((coin: Coin) => (
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
