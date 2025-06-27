import React from "react";
import "../../../style/tables.scss";
import CustomButton from "../../../components/CustomButton";
import Btc from "../../../assets/btc.png";
import Eth from "../../../assets/eth.png";
import Sol from "../../../assets/SOL.png";
import Group from "../../../assets/Group.png";
import Ltc from "../../../assets/ltc.png";
import Doge from "../../../assets/doge.png";
import { useState } from "react";

const coins = [
  {
    name: "ETH",
    fullName: "Ethereum",
    price: "$66 390.25",
    change: "+2.35%",
    volume: "1.2 B",
    icon: Eth,
  },
  {
    name: "BTC",
    fullName: "Bitcoin",
    price: "$2 197.77",
    change: "+3.03%",
    volume: "610.3 B",
    icon: Btc,
  },
  {
    name: "SOL",
    fullName: "Solana",
    price: "$144.85",
    change: "-1.16%",
    volume: "432.9 B",
    icon: Sol,
  },
  {
    name: "XRP",
    fullName: "Ripple",
    price: "$0.624",
    change: "-0.56%",
    volume: "211.6 B",
    icon: Group,
  },
  {
    name: "LTC",
    fullName: "Litecoin",
    price: "$6.13",
    change: "+2.35%",
    volume: "93.1 B",
    icon: Ltc,
  },
  {
    name: "DOGE",
    fullName: "Dogecoin",
    price: "$1.250",
    change: "-0.41%",
    volume: "173.8 B",
    icon: Doge,
  },
];

export default function CryptoTables() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("popular");
 const filteredCoins =
  activeTab === "popular"
    ? coins
    : coins.filter((coin) => coin.change.startsWith("+"));

const visibleCoins = filteredCoins.filter((coin) =>
  coin.fullName.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <section className="crypto-table hightlightbox">
      <div className="crypto-table__container container">
        <div className="wrap">
          <h2 className="section-title heading h2">
            Track trends, pick top coins
          </h2>
          <div className="crypto-table__search search--mobile">
  <div className="search-input-wrapper">
    <svg
      className="search-icon"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
        fill="white"
      />
    </svg>
    <input
      type="text"
      
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
</div>

          <div className="crypto-table__section">
            <div className="crypto-table__scroll">
            <table className="crypto-table__table">
              <thead className="">
                <tr className="crypto-table__thead">
                  <th className="crypto-table__coin">Coin</th>
                  <th className="crypto-table__price">Price</th>
                  <th className="crypto-table__trade">
                    Trading history for 24 h.
                  </th>
                  <th className="crypto-table__change">Changes in 24 h.</th>
                  <th>
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
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleCoins.map((coin, idx) => (
                  <tr key={idx} className="crypto-table__row">
                    <td className="crypto-table__column">
                      <div className="crypto-table__icons">
                        <img
                          src={coin.icon}
                          width={50}
                          height={50}
                          alt={coin.fullName}
                          className="crypto-table__icon"
                        />
                      </div>
                      <div className="crypto-table__names">
                        <div className="crypto-table__short">{coin.name}</div>
                        <div className="crypto-table__full">
                          {coin.fullName}
                        </div>
                      </div>
                    </td>
                    <td className="">{coin.price}</td>
                    <td className="">{coin.volume}</td>
                    <td
                      className={
                        coin.change.startsWith("+")
                          ? "crypto-table__change--positive"
                          : "crypto-table__change--negative"
                      }
                    >
                      {coin.change}
                    </td>
                    <td>
                      <CustomButton
                        text="Trade"
                        className="crypto-table__trade button-1"
                      ></CustomButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
          <div className="crypto-table__tabs">
              <div className="crypto-table__btns">
                <button
                  className={`crypto-table__btn ${
                    activeTab === "popular" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("popular")}
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0.333252 9.66667C0.333252 8.20833 0.680474 6.90972 1.37492 5.77083C2.06936 4.63194 2.83325 3.67361 3.66659 2.89583C4.49992 2.11806 5.26381 1.52431 5.95825 1.11458L6.99992 0.5V3.25C6.99992 3.76389 7.17353 4.17014 7.52075 4.46875C7.86797 4.76736 8.25686 4.91667 8.68742 4.91667C8.92353 4.91667 9.14923 4.86806 9.3645 4.77083C9.57978 4.67361 9.7777 4.51389 9.95825 4.29167L10.3333 3.83333C11.3333 4.41667 12.1388 5.22569 12.7499 6.26042C13.361 7.29514 13.6666 8.43056 13.6666 9.66667C13.6666 10.8889 13.368 12.0035 12.7708 13.0104C12.1735 14.0174 11.3888 14.8125 10.4166 15.3958C10.6527 15.0625 10.8367 14.6979 10.9687 14.3021C11.1006 13.9062 11.1666 13.4861 11.1666 13.0417C11.1666 12.4861 11.0624 11.9618 10.8541 11.4688C10.6458 10.9757 10.3471 10.5347 9.95825 10.1458L6.99992 7.25L4.06242 10.1458C3.65964 10.5486 3.35409 10.9931 3.14575 11.4792C2.93742 11.9653 2.83325 12.4861 2.83325 13.0417C2.83325 13.4861 2.89922 13.9062 3.03117 14.3021C3.16311 14.6979 3.34714 15.0625 3.58325 15.3958C2.61103 14.8125 1.82631 14.0174 1.22909 13.0104C0.631863 12.0035 0.333252 10.8889 0.333252 9.66667ZM6.99992 9.58333L8.77075 11.3125C9.00686 11.5486 9.18742 11.8125 9.31242 12.1042C9.43742 12.3958 9.49992 12.7083 9.49992 13.0417C9.49992 13.7222 9.25686 14.3021 8.77075 14.7813C8.28464 15.2604 7.69436 15.5 6.99992 15.5C6.30547 15.5 5.7152 15.2604 5.22909 14.7813C4.74297 14.3021 4.49992 13.7222 4.49992 13.0417C4.49992 12.7222 4.56242 12.4132 4.68742 12.1146C4.81242 11.816 4.99297 11.5486 5.22909 11.3125L6.99992 9.58333Z" />
                  </svg>
                  Popular
                </button>
                <button
                  className={`crypto-table__btn ${
                    activeTab === "growing" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("growing")}
                >
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.83341 10L0.666748 8.83333L5.08342 4.41667C5.56953 3.93056 6.1598 3.6875 6.85425 3.6875C7.54869 3.6875 8.13897 3.93056 8.62508 4.41667L9.58341 5.375C9.75008 5.54167 9.948 5.625 10.1772 5.625C10.4063 5.625 10.6042 5.54167 10.7709 5.375L14.4792 1.66667H12.3334V0H17.3334V5H15.6667V2.85417L11.9376 6.5625C11.4515 7.04861 10.8612 7.29167 10.1667 7.29167C9.4723 7.29167 8.88203 7.04861 8.39592 6.5625L7.41675 5.58333C7.26397 5.43056 7.06953 5.35417 6.83342 5.35417C6.5973 5.35417 6.40286 5.43056 6.25008 5.58333L1.83341 10Z" />
                  </svg>
                  Growing
                </button>
              </div>

              <table className="crypto-table__table2">
                <tbody>
                  {visibleCoins.map((coin, idx) => (
                    <tr key={idx} className="crypto-table__row">
                      <td className="crypto-table__column">
                        <div className="crypto-table__icons">
                          <img
                            src={coin.icon}
                            width={50}
                            height={50}
                            alt={coin.fullName}
                            className="crypto-table__icon"
                          />
                        </div>
                        <div className="crypto-table__names">
                          <div className="crypto-table__short">{coin.name}</div>
                          <div className="crypto-table__full">
                            {coin.fullName}
                          </div>
                        </div>
                      </td>
                      <td>{coin.price}</td>
                      <td className="crypto-table__show">{coin.volume}</td>
                      <td
                        className={
                          coin.change.startsWith("+")
                            ? "crypto-table__change--positive"
                            : "crypto-table__change--negative"
                        }
                      >
                        {coin.change}
                      </td>
                      <td className="crypto-table__show">
                        <CustomButton
                          text="Trade"
                          className="crypto-table__trade button-1"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
