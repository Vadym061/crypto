import React, { useState } from 'react';
import '../../../style/accordion.scss';

const data = [
  { question: 'How to start trading on Fuex.io?', answer: 'Sign up, enable 2FA for security, fund your account via USDT, BTC, or another currency — and start trading in one click on the spot market.' },
  { question: 'Is identity verification required?', answer: 'Sign up, enable 2FA for security, fund your account via USDT, BTC, or another currency — and start trading in one click on the spot market.' },
  { question: 'What is the minimum amount to trade?', answer: 'Sign up, enable 2FA for security, fund your account via USDT, BTC, or another currency — and start trading in one click on the spot market.' },
  { question: 'How is the security of my funds ensured?', answer: 'Sign up, enable 2FA for security, fund your account via USDT, BTC, or another currency — and start trading in one click on the spot market.' },
  { question: 'How to withdraw funds?', answer: 'Sign up, enable 2FA for security, fund your account via USDT, BTC, or another currency — and start trading in one click on the spot market.' },

];


function Faq() {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
    }
  };
  return (
    <section className='accordion hightlightbox'>
        <div className='accordion__container container'>
            <div className='accordion__section wrap'>
                <h2 className='heading h2'>FAQ about Fuex.io</h2>
                <p className='accordion__subtitle'>We have collected answers to the most frequently asked questions to help you quickly understand how the platform works.</p>
                <div className='accordion__block'>
                     {data.map((item, index) => (
        <div
          className={`accordion-item ${activeIndex === index ? 'acardion-active' : ''}`}
          key={index}
        >
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
          >
            <span>{item.question}</span>
            <svg className='arrow' width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 7.9L0 1.9L1.4 0.5L6 5.1L10.6 0.5L12 1.9L6 7.9Z"/>
            </svg>
          </button>
          <div
            className="accordion-body"
            style={{
              maxHeight: activeIndex === index ? '200px' : '0',
            }}
          >
            <div className="accordion-content">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq