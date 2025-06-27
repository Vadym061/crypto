import React from 'react'
import '../../../style/hero.scss';
import CustomButton from '../../../components/CustomButton';
import HeroImageBtc from '../../../assets/img-hero.png';

function Hero() {
  return (
    <section className='hero hightlightbox'>
      
      
        <div className='container hero__wrapper'>
            <article className='hero__content'>
             
               <span className='tag'>&#35;&nbsp;no&nbsp;noice</span>
              <h1 className='hero__title heading h1'>The most convenient exchange for spot trading</h1>
              <p className='hero__description'>Fuex.io is a minimalist exchange with a commission of only 0.001%. Both futures and spot trading. Clearly, carelessly, simply.</p>
     
              <div className='hero__btn'>
                <CustomButton text="Start trading" className="button-2" />
              </div>
            </article>
            <img src={HeroImageBtc} width={705} height={570} className='hero__image' alt="Hero illustration Currency" />
        </div>
    </section>
  )
}

export default Hero