import React from 'react';
import CustomButton from '../../../components/CustomButton';
import '../../../style/trade.scss';

function Trade() {
  return (
    <section className='trade-easy-block hightlightbox'>
        <div className='trade-easy-block__container container'>
            <div className='wrap'>
              <div className='trade-easy-block__section'>
                 <div className='trade-easy-block__content'>
                <h2 className='trade-easy-block__title heading h2'>
                                      Trade like a pro on the stock exchange without collateral
                </h2>
                <p className='trade-easy-block__subtitle'>Start spot trading without folding tools - right away</p>
                </div>
                <div className='trade-easy-block__button'>
                  
                  <svg width="43" height="12" viewBox="0 0 43 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 5 0)" fill="white"/>
                  <path opacity="0.1" d="M43 11.5H29L17 2.5H4" stroke="#81EABD" stroke-linejoin="round"/>
                  </svg>

                  <CustomButton text="Start trading" className="button-2"/>

                  
                  <svg width="43" height="12" viewBox="0 0 43 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="40.5" cy="2.5" r="2.5" fill="white"/>
                  <path opacity="0.1" d="M0 11.5H14L26 2.5H39" stroke="#81EABD" stroke-linejoin="round"/>
                  </svg>

                </div>
              </div>
               
                
            </div>
        </div>
    </section>
  )
}

export default Trade