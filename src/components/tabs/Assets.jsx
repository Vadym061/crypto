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
              <th className="wallet__cell-header">
                Currency
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
              </th>
              <th className="wallet__cell-header">
                Available balance
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.66634 0.666016V8.78268L10.3997 5.04935L11.333 5.99935L5.99967 11.3327L0.666341 5.99935L1.59967 5.04935L5.33301 8.78268V0.666016H6.66634Z" />
                </svg>
              </th>
              <th className="wallet__cell-header">
                In use
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.33366 11.3337V3.21699L1.60033 6.95033L0.666992 6.00033L6.00033 0.666992L11.3337 6.00033L10.4003 6.95033L6.66699 3.21699V11.3337H5.33366Z" />
                </svg>
              </th>
              <th className="wallet__cell-header">
                Balance
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.66634 0.666016V8.78268L10.3997 5.04935L11.333 5.99935L5.99967 11.3327L0.666341 5.99935L1.59967 5.04935L5.33301 8.78268V0.666016H6.66634Z" />
                </svg>
              </th>
              <th className="wallet__cell-header">
                <div className="wallet__flex-container">
                  Action
                  <button type="button">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3333 15.5L9.08333 10.25C8.66667 10.5833 8.1875 10.8472 7.64583 11.0417C7.10417 11.2361 6.52778 11.3333 5.91667 11.3333C4.40278 11.3333 3.12153 10.809 2.07292 9.76042C1.02431 8.71181 0.5 7.43056 0.5 5.91667C0.5 4.40278 1.02431 3.12153 2.07292 2.07292C3.12153 1.02431 4.40278 0.5 5.91667 0.5C7.43056 0.5 8.71181 1.02431 9.76042 2.07292C10.809 3.12153 11.3333 4.40278 11.3333 5.91667C11.3333 6.52778 11.2361 7.10417 11.0417 7.64583C10.8472 8.1875 10.5833 8.66667 10.25 9.08333L15.5 14.3333L14.3333 15.5ZM5.91667 9.66667C6.95833 9.66667 7.84375 9.30208 8.57292 8.57292C9.30208 7.84375 9.66667 6.95833 9.66667 5.91667C9.66667 4.875 9.30208 3.98958 8.57292 3.26042C7.84375 2.53125 6.95833 2.16667 5.91667 2.16667C4.875 2.16667 3.98958 2.53125 3.26042 3.26042C2.53125 3.98958 2.16667 4.875 2.16667 5.91667C2.16667 6.95833 2.53125 7.84375 3.26042 8.57292C3.98958 9.30208 4.875 9.66667 5.91667 9.66667Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </th>
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
