import React from 'react'
import "../App.css"
import Axios from "axios"
import { useState, useEffect } from 'react'
import Coin from "../components/Coin"

const Home = () => {

  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCoins();
  }, []);


  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const getCoins = () => {
    setIsLoading(true);
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      console.log(response);
      setIsLoading(false)
      setCoins(response.data);
    });
  };

  return (
      <div className="App">
        <div className="header-container">
          <h1>Crypto Tracker</h1>
          <div className="button-container">
            <input
              placeholder="Search for a coin..."
              type="text"
              onChange={handleChange}
            />
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        </div>
        <div className="coin-container">
          {isLoading && <h1 className="loading-message">Data Loading...</h1>}
          {filterCoins.map((coins) => {
            return (
              <Coin
                id={coins.id}
                icon={coins.image}
                coinName={coins.name}
                coinSymbol={coins.symbol}
                price={coins.current_price}
                marketCap={coins.market_cap}
                priceChange={coins.price_change_percentage_24h}
              />
            );
          })}
        </div>
      </div>
  );
}

export default Home
