import React, {useState} from "react";
import Modal from "./Modal";
import CustomSelect from "./CustomSelect";
import TwoFactorAuth from "./TwoFactorAuth";

import "../style/topupmodal.scss";

const confirmationsRequired = {
    BTC: 6,
    ETH: 64,
    USDC: 12,
    USDT: 12,
    XRP: 1,
    DOGE: 1,
    TRX: 20,
    BNB: 15,
    MATIC: 20,
    ADA: 10,
    LTC: 6,
    SOL: 30,
    AVAX: 3,
    DAI: 20,
    DOT: 10,
  };

const coinOptions = [
  { label: "BTC Bitcoin", value: "BTC" },
  { label: "ETH Ethereum", value: "ETH" },
  { label: "USDC USD Coin", value: "USDC" },
  { label: "USDT Tether", value: "USDT" },
  { label: "XRP Ripple", value: "XRP" },
  { label: "DOGE Dogecoin", value: "DOGE" },
  { label: "TRX Tron", value: "TRX" },
  { label: "BNB Binance Coin", value: "BNB" },
  { label: "MATIC Polygon", value: "MATIC" },
  { label: "ADA Cardano", value: "ADA" },
  { label: "LTC Litecoin", value: "LTC" },
  { label: "SOL Solana", value: "SOL" },
  { label: "AVAX Avalanche", value: "AVAX" },
  { label: "DAI Dai", value: "DAI" },
  { label: "DOT Polkadot", value: "DOT" },
];

const coins = ["USDT", "BTC", "TRX", "ETH", "XRP"];
const networksByCoin = {
  BTC: ["Bitcoin"],
  ETH: ["ERC20", "Arbitrum", "Optimism"],
  USDC: ["ERC20", "TRC20", "BEP20", "Polygon"],
  USDT: ["ERC20", "TRC20", "BEP20", "Polygon"],
  XRP: ["XRP Ledger"],
  DOGE: ["Dogecoin"],
  TRX: ["TRC20"],
  BNB: ["BEP20", "BNB Smart Chain"],
  MATIC: ["Polygon"],
  ADA: ["Cardano"],
  LTC: ["Litecoin"],
  SOL: ["Solana"],
  AVAX: ["Avalanche C-Chain"],
  DAI: ["ERC20"],
  DOT: ["Polkadot"],
};

function CryptoWithdraw({ isOpen, onClose }) {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [outputAddress, setOutputAddress] = useState("");

  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="Cryptocurrency withdrawal"
    subtitle="Enter your withdrawal details. Double-check your address before confirming - transactions are irreversible."
    actions={
        <button
          className="button-2 topup__modal-btn"
         
        >
         Confirm Withdrawal
        </button>
      }
    >
      <div className="crypto-withdraw">
        <CustomSelect
            options={coinOptions}
            selected={selectedCoin || "Select a coin"}
            onSelect={(value) => {
              setSelectedCoin(value);
              setSelectedNetwork("");
            }}
          />
         <div className="">
          <span className="topup__used-title">Often used</span>
          <div className="topup__used-coins">
            {coins.map((coin) => (
              <button
                key={coin}
                className={`topup__coin ${
                  selectedCoin === coin ? "topup__coin--active" : ""
                }`}
                onClick={() => {
                  setSelectedCoin(coin);
                  setSelectedNetwork("");
                }}
              >
                {coin}
              </button>
            ))}
          </div>
        </div>
          <CustomSelect
            options={networksByCoin[selectedCoin] || []}
            selected={selectedNetwork || "Select a network"}
            onSelect={setSelectedNetwork}
          />

        {selectedNetwork && (
  <div className="topup__form-extra">

    <div className="topup__field">
      <input
        type="text"
        className="topup__input"
      
        placeholder="Minimum amount 0.4"
        disabled
      />
    </div>

    <div className="topup__field">
      <input
        type="text"
        className="topup__input"
        value={outputAddress}
        onChange={(e) => setOutputAddress(e.target.value)}
        placeholder="Output address"
      />
    </div>
    <div className="topup__confirmations">
              Required for arrival:{" "}
              <span className="topup__confirmations--span">
                {confirmationsRequired[selectedCoin]} block confirmations
              </span>
            </div>
            <TwoFactorAuth />

  </div>
)}
      </div>
    </Modal>
  )
}

export default CryptoWithdraw