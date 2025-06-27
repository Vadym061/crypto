import React from 'react';
import LogoFeux from '../assets/logo-fuex.svg';
import { Link } from "react-router-dom";
import '../style/footer.scss';

function Footer() {
  return (
  <footer className="footer">
      <div className="container footer__wrapper">
        <div className="footer__top">
          <Link to="/" className="footer__logo-link" aria-label="Go to homepage">
            <img src={LogoFeux} alt="Fuex Logo" className="footer__logo" />
          </Link>

          <div className="footer__contact">
            <div className="footer__contact-block">
              <span className="footer__label">Pages:</span>
              <Link to="/" className="footer__link">Spot Trading</Link>
            </div>
            <div className="footer__contact-block">
              <span className="footer__label">For any questions, please contact:</span>
              <a href="mailto:user@example.com" className="footer__link">user@example.com</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__text">
            The site you use will help you learn more about the weather and privacy policy.
 
          </p>
          <p className="footer__text">&copy; 2025 Fuex.io.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer