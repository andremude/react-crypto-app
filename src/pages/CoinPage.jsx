import React from 'react'
import Axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import "../pages/styles/CoinPage.css"


const CoinPage = () => {

  const { id } =useParams();
  const [ coin, setCoin ] = useState(null);

  useEffect(() => {
    console.log(id);
    Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
      (response) => {
        console.log(response.data);
        setCoin(response.data);
      }
    );
  }, []);

  if (coin) {
    return (
      <div className="coinpage-container">
        <div className="coinpage-info">
          <h1>{coin.name}</h1>
          <img src={coin.image.large} alt="icon" className="coinpage-icon" />
          <div className="coinpage-data">
            <div className="coinpage-row">
              <h3 className="coinpage-row-header">Symbol:</h3>
              <h3 className="coinpage-row-data symbol">{coin.symbol}</h3>
            </div>
            <div className="coinpage-row">
              <h3 className="coinpage-row-header">Current Price:</h3>
              <h3 className="coinpage-row-data">
                $ {coin.market_data.current_price.usd.toLocaleString('en-US', {minimumFractionDigits:2})}
              </h3>
            </div>
            <div className="coinpage-row">
              <h3 className="coinpage-row-header">Market Cap:</h3>
              <h3 className="coinpage-row-data">
                $ {coin.market_data.market_cap.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinpage-row">
              <h3 className="coinpage-row-header">Total Volume:</h3>
              <h3 className="coinpage-row-data">
                $ {coin.market_data.total_volume.usd.toLocaleString()}
              </h3>
            </div>
            <div className="coinpage-row">
              <h3 className="coinpage-row-header">24hr High:</h3>
              <h3 className="coinpage-row-data green">
                $ {coin.market_data.high_24h.usd.toLocaleString('en-US', {minimumFractionDigits:2})}
              </h3>
            </div>
            <div className="coinpage-row">
              <h3 className="coinpage-row-header">24hr Low:</h3>
              <h3 className="coinpage-row-data red">
                $ {coin.market_data.low_24h.usd.toLocaleString('en-US', {minimumFractionDigits:2})}
              </h3>
            </div>
          </div>
          <Link to="/" className="coinpage-link">
            <div className="coinpage-button">Go back</div>
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default CoinPage
