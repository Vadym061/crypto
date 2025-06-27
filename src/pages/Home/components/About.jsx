import React from 'react';
import '../../../style/abaut.scss';
import Security from '../../../assets/transparent.png';
import Trading from '../../../assets/trading.png';
import Unprecedentedly from '../../../assets/unprecedently.png';

function About() {
  return (
    <section className='about hightlightbox'>
        <div className='about__container container'>
            <div className='wrap'>
                <h2 className='heading h2'>Why fuex.io?</h2>
                <ul className='about__card'>
                    <li className='about__item'>
                        <div className="corner-top-right"></div>
                        <div className="corner-bottom-left"></div>
                        <img src={Security} className='about__img' width={504} height={220} alt="Transparent security" />
                        <div className='about__card-content'>
                            <h3 className='heading h5'>Transparent security</h3>
                            <p className='about__description'>2FA, cold wallets, and session control. Your funds are protected.</p>
                            <div className='about__card-btns'>
                                <span className='tag'>&#35;&nbsp;2FA</span>
                                <span className='tag'>&#35;&nbsp;access&nbsp;control</span>
                            </div>
                        </div>
                    </li>
                    <li className='about__item'>
                         <img src={Trading} className='about__img' width={504} height={220} alt="Trading without the noise" />
                         <div className='about__card-content'>
                             <div className="corner-top-right"></div>
                            <div className="corner-bottom-left"></div>
                            <h3 className='heading h5'>Trading without the noise</h3>
                            <p className='about__description'>No futures, tokens, margin or native coin. Only real spot trading.</p>
                            <div className='about__card-btns'>
                                <span className='tag'>&#35;&nbsp;no&nbsp;futures</span>
                                <span className='tag'>&#35;&nbsp;spot&nbsp;only</span>
                            </div>
                        </div>
                    </li>
                    <li className='about__item'>
                         <img src={Unprecedentedly} className='about__img' width={504} height={220} alt="Unprecedentedly low commission" />
                         <div className='about__card-content'>
                             <div className="corner-top-right"></div>
                            <div className="corner-bottom-left"></div>
                            <h3 className='heading h5'>Unprecedentedly low commission</h3>
                            <p className='about__description'>0.001% is one of the lowest rates in the world. Less costs - more profit.</p>
                            <div className='about__card-btns'>
                                <span className='tag'>&#35;&nbsp;0.001%&nbsp;fee</span>
                                <span className='tag'>&#35;&nbsp;minimum&nbsp;costs</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About