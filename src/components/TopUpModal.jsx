import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "../style/topupmodal.scss";
import CustomSelect from "./CustomSelect";
import { cryptoIcons } from "./icons.js";

const coinMeta = {
  BTC: { name: "BTC", icon: cryptoIcons.bitcoin },
  ETH: { name: "ETH", icon: cryptoIcons.ethereum },
  USDC: { name: "USD Coin", icon: cryptoIcons.bitbay },
  USDT: { name: "USDT", icon: cryptoIcons.bitqy },
  XRP: { name: "XRP", icon: cryptoIcons.ripple },
  DOGE: { name: "DOGE", icon: cryptoIcons.dogecoin },
  TRX: { name: "TRX", icon: cryptoIcons.ardor },
  BNB: { name: "BNB", icon: cryptoIcons.bread },
  MATIC: { name: "MATIC", icon: cryptoIcons.basicattentiontoken },
  ADA: { name: "ADA", icon: cryptoIcons.decred },
  LTC: { name: "LTC", icon: cryptoIcons.litecoin },
  SOL: { name: "SOL", icon: cryptoIcons.solana },
  AVAX: { name: "AVAX", icon: cryptoIcons.airswap },
  DAI: { name: "DAI", icon: cryptoIcons.dach },
  DOT: { name: "DOT", icon: cryptoIcons.emercoin },
};

const coins = ["USDT", "BTC", "TRX", "ETH", "XRP"];

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

export default function TopUpModal({ isOpen, onClose }) {
  const [selectedCoin, setSelectedCoin] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [buttonStep, setButtonStep] = useState("continue");
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleCopy = () => {
    const address = depositAddress[selectedCoin] || "";
    if (!address) return;

    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const depositAddress = {
    BTC: "0x399ffd798b9e417627e62c3dab8f146d34488948",
    ETH: "TXe3DGCbAYKDfEBkUPY5L1nP7J4b1eo5xT0x399ffd798b9e",
    USDC: "TXe3DGCbAYKDfEBkUPY5L1nP7J4b1eo5xT0x399ffd798b9e",
    USDT: "0x399ffd798b9e417627e62c3dab8f146d3448894",
    XRP: "TXe3DGCbAYKDfEBkUPY5L1nP7J4b1eo5xT0x399ffd798b9e",
    DOGE: "0x399ffd798b9e417627e62c3dab8f146d3448894",
    TRX: "TXe3DGCbAYKDfEBkUPY5L1nP7J4b1eo5xT0x399ffd798b9e",
    BNB: "0x399ffd798b9e417627e62c3dab8f146d3448894",
    MATIC: "0x399ffd798b9e417627e62c3dab8f146d3448894",
    LTC: "0x399ffd798b9e417627e62c3dab8f146d3448894",
    SOL: "TXe3DGCbAYKDfEBkUPY5L1nP7J4b1eo5xT0x399ffd798b9e",
    AVAX: "TXe3DGCbAYKDfEBkUPY5L1nP7J4b1eo5xT0x399ffd798b9e",
    DAI: "0x399ffd798b9e417627e62c3dab8f146d3448894",
    DOT: "0x399ffd798b9e417627e62c3dab8f146d3448894",
  };

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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Top up your balance with cryptocurrency"
      subtitle="Select the coin, network, and address to deposit to. Make sure all data is entered correctly - an incorrect address may result in loss of funds."
      actions={
        <button
          className="button-2 topup__modal-btn"
          onClick={() => {
            if (buttonStep === "continue") {
              if (
                selectedCoin &&
                selectedNetwork &&
                depositAddress[selectedCoin]
              ) {
                setButtonStep("confirm");
              } else {
                setIsSuccessModalOpen(true);
              }
            } else {
              setIsSuccessModalOpen(true);
            }
          }}
        >
          {buttonStep === "continue" ? "Continue" : "Confirm top-up"}
        </button>
      }
    >
      <div className="topup">
        <div className="topup__select-wrapper">
          <CustomSelect
            options={coinOptions}
            selected={selectedCoin || "Select a coin"}
            onSelect={(value) => {
              setSelectedCoin(value);
              setSelectedNetwork("");
            }}
          />
        </div>

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

        <div className="topup__select-wrapper">
          <CustomSelect
            options={networksByCoin[selectedCoin] || []}
            selected={selectedNetwork || "Select a network"}
            onSelect={setSelectedNetwork}
          />
        </div>

        {selectedNetwork && (
          <div className="topup__address-box">
            <div className="topup__address-label">Deposit address</div>

            <div className="topup__address">
              {coinMeta[selectedCoin] && (
                <div className="topup__coin-info">
                  <img
                    src={coinMeta[selectedCoin].icon}
                    alt={selectedCoin}
                    width="40"
                    height="40"
                    className="topup__coin-icon"
                  />
                  <div className="topup__coin-text">
                    <strong className="topup__coin-name">
                      {coinMeta[selectedCoin].name} address
                    </strong>
                    <br />
                    <code className="topup__code">
                      {depositAddress[selectedCoin]}
                    </code>
                  </div>
                </div>
              )}

              <button className="topup__copy-btn" onClick={handleCopy}>
                {copied ? (
                  <span className="topup__copied-text">Copied!</span>
                ) : (
                  <svg
                    width="15"
                    height="17"
                    viewBox="0 0 15 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13.5003C4.54167 13.5003 4.14931 13.3371 3.82292 13.0107C3.49653 12.6844 3.33333 12.292 3.33333 11.8337V1.83366C3.33333 1.37533 3.49653 0.982964 3.82292 0.656576C4.14931 0.330187 4.54167 0.166992 5 0.166992H12.5C12.9583 0.166992 13.3507 0.330187 13.6771 0.656576C14.0035 0.982964 14.1667 1.37533 14.1667 1.83366V11.8337C14.1667 12.292 14.0035 12.6844 13.6771 13.0107C13.3507 13.3371 12.9583 13.5003 12.5 13.5003H5ZM5 11.8337H12.5V1.83366H5V11.8337ZM1.66667 16.8337C1.20833 16.8337 0.815972 16.6705 0.489583 16.3441C0.163194 16.0177 0 15.6253 0 15.167V4.33366C0 4.09755 0.0798611 3.89963 0.239583 3.73991C0.399306 3.58019 0.597222 3.50033 0.833333 3.50033C1.06944 3.50033 1.26736 3.58019 1.42708 3.73991C1.58681 3.89963 1.66667 4.09755 1.66667 4.33366V15.167H10C10.2361 15.167 10.434 15.2469 10.5938 15.4066C10.7535 15.5663 10.8333 15.7642 10.8333 16.0003C10.8333 16.2364 10.7535 16.4344 10.5938 16.5941C10.434 16.7538 10.2361 16.8337 10 16.8337H1.66667Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="topup__confirmations">
              Required for arrival:{" "}
              <span className="topup__confirmations--span">
                {confirmationsRequired[selectedCoin]} block confirmations
              </span>
            </div>
          </div>
        )}

        {isSuccessModalOpen && (
          <Modal
            isOpen={isSuccessModalOpen}
            onClose={() => setIsSuccessModalOpen(false)}
            actions={
              <button
                className="button-2 topup__modal-btn"
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  if (buttonStep === "confirm") {
                    setButtonStep("continue");
                    onClose();
                    navigate("/");
                  }
                }}
              >
                {buttonStep === "confirm" ? (
                  <span>On the main one</span>
                ) : (
                  <span>Close</span>
                )}
              </button>
            }
          >
            <div className="modal__icon topup__modal-icon">
              <svg
                width="84"
                height="50"
                viewBox="0 0 84 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M63.4508 5.89274L58.4035 0.84552L35.691 23.558L40.7383 28.6052L63.4508 5.89274ZM78.5923 0.84552L40.7381 39.0602L25.5965 23.9185L20.5492 28.9657L40.7381 49.1546L84 5.89274L78.5923 0.84552ZM0 28.9657L20.1889 49.1546L25.2361 44.1074L5.04722 23.9185L0 28.9657Z"
                  fill="url(#paint0_linear_1_2700)"
                />
                <path
                  d="M24.8818 44.1063L20.1885 48.8006L0.353516 28.9656L5.04688 24.2713L24.8818 44.1063ZM83.6396 5.89825L40.7373 48.8006L20.9023 28.9656L25.5957 24.2713L40.7393 39.4149L40.916 39.2361L78.5986 1.19318L83.6396 5.89825ZM63.0967 5.8924L40.7383 28.2518L36.0439 23.5574L58.4033 1.19806L63.0967 5.8924Z"
                  stroke="url(#paint1_linear_1_2700)"
                  stroke-opacity="0.8"
                  stroke-width="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_2700"
                    x1="42"
                    y1="0.84552"
                    x2="42"
                    y2="49.1546"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#01683C" />
                    <stop offset="1" stop-color="#27EC98" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_2700"
                    x1="0"
                    y1="25.0001"
                    x2="84"
                    y2="25.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="0.501902" stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h3 className="ui-modal__heading heading h4">
              {buttonStep === "confirm"
                ? "The operation was completed successfully."
                : "Missing Information"}
            </h3>

            {buttonStep === "confirm" ? (
              <p className="ui-modal__subtitle">
                Thank you for your trust - you can continue with ease.
              </p>
            ) : (
              <p className="ui-modal__subtitle">
                Please select coin, network and ensure address is generated.
              </p>
            )}
          </Modal>
        )}
      </div>
    </Modal>
  );
}
