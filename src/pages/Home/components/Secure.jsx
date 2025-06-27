import React from 'react';
import SecureSectionImg from "../../../assets/secure-section.png";
import "../../../style/secure.scss";
function Secure() {
  return (
    <section className='secure hightlightbox'>
        <div className='secure__container container'>
            <div className='wrap secure__section'>
                <img src={SecureSectionImg} className='secure__image' width={765} height={570} alt="holographic cube illustration" />
                <div className='secure__content'>
                    <h2 className='secure__title'>Secure your account,<br /> stay in control</h2>
                    <p className='secure__description'>
                        Fuex.io is built with top-tier security at its core. You have full control over all critical access points — from enabling two-factor authentication to managing sessions and changing your password. There’s no hidden logic, only a transparent system working entirely in your interest.
                    </p>
                    <p className='secure__description'>
                        Most funds are stored offline in cold wallets, isolated from online access. The platform is monitored 24/7, with all actions logged and audited in real time. What we see — you see.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Secure