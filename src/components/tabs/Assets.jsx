import React, { useState, useRef, useEffect } from "react";

import Btc from "../../assets/btc.png";
import Eth from "../../assets/eth.png";
import Sol from "../../assets/SOL.png";
import Group from "../../assets/Group.png";
import Ltc from "../../assets/ltc.png";
import Doge from "../../assets/doge.png";

import CustomButton from "../CustomButton";
const options = ["USDT", "BTC", "ETH"];
const walletData = [
  {
    icon: Eth,
    currency: "ETH",
    name: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    available: "$2,394.12",
    inUse: "0.83 ETH",
    balance: "1.45 ETH",
    balanceUSD: "$2,392.10",
  },
  {
    icon: Btc,
    currency: "BTC",
    name: "Bitcoin",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    available: "$2,394.12",
    inUse: "0.83 ETH",
    balance: "1.45 ETH",
    balanceUSD: "$2,392.10",
  },
  {
    icon: Sol,
    currency: "SOL",
    name: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    available: "$2,394.12",
    inUse: "0.83 ETH",
    balance: "1.45 ETH",
    balanceUSD: "$2,392.10",
  },
  {
    icon: Group,
    currency: "XRP",
    name: "Ripple",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    available: "$2,394.12",
    inUse: "0.83 ETH",
    balance: "1.45 ETH",
    balanceUSD: "$2,392.10",
  },
  {
    icon: Ltc,
    currency: "LTC",
    name: "Litecoin",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    available: "$2,394.12",
    inUse: "0.83 ETH",
    balance: "1.45 ETH",
    balanceUSD: "$2,392.10",
  },
  {
    icon: Doge,
    currency: "DOGE",
    name: "Dogecoin",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
    available: "$2,394.12",
    inUse: "0.83 ETH",
    balance: "1.45 ETH",
    balanceUSD: "$2,392.10",
  },
];

function Assets() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="wallet">
      <div className="wallet__header">
        <div className="wallet__wrapper">
          <h2 className="wallet__title">Total Assets</h2>
          <div className="wallet__balance">
            <span className="wallet__amount heading h4">500.0</span>
            <div
              className={`wallet__custom-select ${isOpen ? "is-open" : ""}`}
              ref={ref}
            >
              <div
                className="wallet__selected"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {selected}
                <span className="wallet__arrow">
                  <svg
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.75 1.43066L6.5 7.68066L0.25 1.43066L1.35938 0.321289L6.5 5.46191L11.6406 0.321289L12.75 1.43066Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>

              {isOpen && (
                <ul className="wallet__options">
                  {options.map((opt) => (
                    <li
                      key={opt}
                      className={`wallet__option ${
                        selected === opt ? "selected" : ""
                      }`}
                      onClick={() => {
                        setSelected(opt);
                        setIsOpen(false);
                      }}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="wallet__actions">
          <CustomButton
            text="Deposit"
            className="wallet__button wallet__button--green button-2"
          ></CustomButton>
          <CustomButton
            text="Withdrawal of funds"
            className="wallet__button button-1"
          ></CustomButton>
        </div>
      </div>

      <div className="wallet__table-wrapper">
        <table className="wallet__table">
          <thead className="wallet__thead">
            <tr className="wallet__row">
              <th className="wallet__cell-header">Currency</th>
              <th className="wallet__cell-header">Available balance</th>
              <th className="wallet__cell-header">In use</th>
              <th className="wallet__cell-header">Balance</th>
              <th className="wallet__cell-header">Action</th>
            </tr>
          </thead>
          <tbody className="wallet__tbody">
            {walletData.map((item, index) => (
              <tr className="wallet__row" key={index}>
                <td className="wallet__cell wallet__cell--currency">
                  <div className=" wallet__currency-wrapper">
                    <img
                      className="wallet__icon"
                      src={item.icon}
                      alt={item.currency}
                    />
                    <div className="wallet__currency-info">
                      <div className="wallet__currency">{item.currency}</div>
                      <small className="wallet__currency-name">
                        {item.name}
                      </small>
                    </div>
                  </div>
                </td>
                <td className="wallet__cell">{item.available}</td>
                <td className="wallet__cell">{item.inUse}</td>
                <td className="wallet__cell">
                  {item.balance}
                  <br />
                  <small className="wallet__balance-usd">
                    {item.balanceUSD}
                  </small>
                </td>
                <td className="wallet__cell wallet__cell-btn">
                  <div className="wallet__cell-btn-wrapper">
                    <CustomButton
                      text="Trade"
                      className="wallet__action-button button-1"
                    />
                    <CustomButton
                      text="Deposit"
                      className="wallet__action-button button-1"
                    />
                    <CustomButton
                      text="Conclusion"
                      className="wallet__action-button button-1"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Assets;
