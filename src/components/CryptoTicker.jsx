import React from 'react';
import '../style/portfolio.scss';
import { cryptoIcons } from '../components/icons.js';

const cryptoRows = [
  [
    { name: 'Ethereum', price: '$2,197.77', change: '+3.03%', icon: cryptoIcons.ethereum },
    { name: 'Solana', price: '$144.85', change: '-1.16%', icon: cryptoIcons.solana },
    { name: 'Ripple', price: '$0.624', change: '-0.56%', icon: cryptoIcons.ripple },
    { name: 'Litecoin', price: '$6.13', change: '+2.35%', icon: cryptoIcons.litecoin },
    { name: 'Dogecoin', price: '$1.250', change: '-0.41%', icon: cryptoIcons.dogecoin },
  ],
  [
    { name: 'Dash', price: '$22.61', change: '-0.59%', icon: cryptoIcons.dach },
    { name: 'Decred', price: '$14.82', change: '-3.75%', icon: cryptoIcons.decred },
    { name: 'Emercoin', price: '$0.03626', change: '+0.01%', icon: cryptoIcons.emercoin },
    { name: 'DigiByte', price: '$0.009012', change: '-7.59%', icon: cryptoIcons.digibyte },
    { name: 'BitBay', price: '$0.03626', change: '0%', icon: cryptoIcons.bitbay },
  ],
  [
    { name: 'Basic Attention Token', price: '$0.1339', change: '-4.79%', icon: cryptoIcons.basicattentiontoken },
    { name: 'bitqy', price: '$34.53', change: '+1.47%', icon: cryptoIcons.bitqy },
    { name: 'Bread', price: '$4.41', change: '+0.22%', icon: cryptoIcons.bread },
    { name: 'AirSwap', price: '$0.007282', change: '-0.58%', icon: cryptoIcons.airswap },
    { name: 'Ardor', price: '$0.08967', change: '-8.61%', icon: cryptoIcons.ardor },
  ],
];

const stablecoinNames = ['Tether', 'USDC', 'Dai']; 

const CryptoTicker = ({ activeTab }) => {
  // Сплющуємо всі монети в один масив
  const allCoins = cryptoRows.flat();

  const filteredCoins = React.useMemo(() => {
    if (activeTab === "Popular") {
      return allCoins;
    }
    if (activeTab === "Growing") {
      return allCoins.filter(coin => coin.change.startsWith('+'));
    }
    if (activeTab === "Stablecoins") {
      return allCoins.filter(coin => stablecoinNames.includes(coin.name));
    }
    return [];
  }, [activeTab, allCoins]);


  const chunkSize = 5;
  const rows = [];
  for (let i = 0; i < filteredCoins.length; i += chunkSize) {
    rows.push(filteredCoins.slice(i, i + chunkSize));
  }

  if (filteredCoins.length === 0) {
    return <div>No data available for this tab.</div>;
  }

  return (
    <div className="crypto-ticker">
      {rows.map((row, idx) => (
        <div
          className={`ticker-row ${idx % 2 === 0 ? 'left' : 'right'}`}
          key={idx}
        >
          <div className="ticker-track">
            {[...row, ...row].map((coin, i) => (
              <div className="ticker-item" key={i}>
                <img
                  src={coin.icon}
                  width={50}
                  height={50}
                  className="portfolio__icon"
                  alt={coin.name}
                />
                <div className="ticker-item__wrap">
                  <span className="name">{coin.name}</span>
                  <div className="ticker-item__prices">
                    <span className="price">{coin.price}</span>
                    <span
                      className={`change ${
                        coin.change.startsWith('+') ? 'positive' : 'negative'
                      }`}
                    >
                      {coin.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoTicker;
