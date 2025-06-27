import React from 'react';
import "../../../style/steps.scss";
import { Link } from "react-router-dom";

function Steps() {
  return (
    <section className='steps hightlightbox'>
        <div className='steps__container container'>
            <div className='wrap'>
                <h2 className='heading h2'>Get started in 3 steps</h2>
                <ul className='steps__card'>
                    <li className='steps__item'>
                        <div className='steps__text'>
                            <h3 className='steps__item-title heading h5'>Register</h3>
                            <p className='steps__subtitle'>Create an account in 30 seconds — with email or Google.</p>
                        </div>
                        <div>
                            <Link to="/register" className="steps__link">Create an account</Link>
                        </div>
                    </li>
                    <li className='steps__item'>
                          <div className='steps__text'>
                            <h3 className='steps__item-title heading h5'>Top up your balance</h3>
                            <p className='steps__subtitle'>Transfer USDT, BTC, ETH or any supported currency.</p>
                        </div>
                        <div>
                            <Link to="/register" className="steps__link">Buy cryptocurrency</Link>
                        </div>
                    </li>
                    <li className='steps__item'>
                          <div className='steps__text'>
                            <h3 className='steps__item-title heading h5'>Trade immediately</h3>
                            <p className='steps__subtitle'>Choose a pair and open your first trade. Minimum actions - maximum speed.</p>
                        </div>
                        <div>
                            <Link to="/register" className="steps__link">Trade</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Steps