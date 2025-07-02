import React from "react";
import TradingViewChart from "../components/TrandingViewChart";
import "../style/tranding.scss";
import Icons from "../assets/icons.png";

const TradingPage = () => {
  return (
    <div className="trading-page">
      <div className="trading-page__grid">
        <div className="trading-page__container">
          <ul className="trading-page__header">
              <li>
                <img src={Icons} alt="icons" />
                <div className="">
                  <p>XRP/USDT</p>
                  <span>XRP price</span>
                </div>
              </li>
              <li>
                 <p>2.3269</p>
                  <span>$ 2.33</span>
              </li>
              <li>
                <p>Change in 24 h.</p>
                <div>
                  <span> 0.69 %</span>
                  <span>-0.0168</span>
                </div>
              </li>
              <li>
                  <p>Max 24h.</p>
                  <span>2.3438</span>
                </li>
              <li>
                <p>Min in 24 h.</p>
                <span>2.2671</span>
              </li>
              <li>
                <p>Volume 24h. (XRP)</p>
                <span>86 303 558.30</span>
              </li>
              <li>
                <p>Volume 24h. (USDT)</p>
                <span>1 779 158 124.78</span>
              </li>

          </ul>
          <div className="trading-page__wrapper">
          <section className="trading-page__order-book card">
            <h2 className="card__title">Order Book</h2>
            <div className="order-book__list">
              <div>
                <p>Price</p>
                <p>Amount</p>
                <p>total</p>
              </div>
              <div className="order-book__row order-book__row--sell">
                <span className="order-book__price">2.3235</span>
                <span className="order-book__amount">12.39K</span>
                <span >28.90K</span>
              </div>
              <div className="order-book__row order-book__row--buy">
                <span className="order-book__price">2.3218</span>
                <span className="order-book__amount">8.04K</span>
              </div>
            </div>
          </section>
          <div className="trading-page__chart-wprap">
            <section className="trading-page__chart card">
              <TradingViewChart />
            </section>
             <section className="trading-page__form card">
          <div className="form__group">
            <label className="form__label">Price</label>
            <input className="form__input" defaultValue="2.3160 USDT" />
          </div>
          <div className="form__group">
            <label className="form__label">Sum</label>
            <input className="form__input" defaultValue="500 - USDT" />
          </div>
          <div className="form__group">
            <label className="form__label">Assets</label>
            <input className="form__input" defaultValue="801.28 - XRP" />
          </div>
          <div className="form__actions">
            <button className="form__button form__button--buy">Buy</button>
            <button className="form__button form__button--sell">Sell</button>
          </div>
        </section>
          </div>
          </div>
        </div>

       
        <aside className="trading-page__sidebar">
          <section className="sidebar__section card">
            <h2 className="card__title">Pairs</h2>
            <div className="pairs__list">
              <div className="pairs__row">
                <span>PEPE/USDC</span>
                <span className="pairs__change pairs__change--positive">+14.42%</span>
              </div>
              <div className="pairs__row">
                <span>SHIB/USDC</span>
                <span className="pairs__change pairs__change--positive">+6.67%</span>
              </div>
            </div>
          </section>

          <section className="sidebar__section card">
            <h2 className="card__title">Market Deals</h2>
            <div className="deals__list">
              <div className="deals__row">
                <span>2.3235</span>
                <span>12.9K</span>
              </div>
            </div>
          </section>
        </aside>
       
      </div>
    </div>
  );
};

export default TradingPage;
