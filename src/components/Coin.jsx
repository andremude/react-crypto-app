import React from 'react'
import './Coin.css'
import { useNavigate } from 'react-router-dom'

const Coin = ({
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin-data">
          <div className="coin">
            <img src={icon} alt="coin-icon" />
            <h1 className="coin-name">{coinName}</h1>
            <p className="coin-symbol">{coinSymbol}</p>
            <p className="coin-price">$ {price.toLocaleString('en-US', {minimumFractionDigits:2,  maximumFractionDigits:2})}</p>
            {priceChange < 0 ? (
              <p className="price-change red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="price-change green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin-volume">$ {marketCap.toLocaleString('en-US', {maximumFractionDigits:2})}</p>
            <button onClick={() => {
              navigate(`/CoinPage/${id}`);
            }}>
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coin
