import React, { useContext, useState, useEffect } from "react";
import LogoFeux from "../assets/logo-fuex.svg";
import { Link } from "react-router-dom";
import Naviagtion from "./Naviagtion";
import CustomButton from "./CustomButton";
import "../style/header.scss";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
  if (menuOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
}, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <header className="header">
      <div className="container header__wrapper">
        <div className="header__container">
          <div className="header__logo">
            <Link to="/" className="header__link">
              <img src={LogoFeux} alt="Logo feux" width={100} height={60} />
            </Link>
          </div>
          <div className={`header__menu-wrap ${menuOpen ? "active-menu" : ""}`}>
            <Naviagtion />
            <div className="header__btns">
              {isLoggedIn ? (
                <CustomButton
                  text="Logout"
                  onClick={logout}
                  className="header__logout button-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className=""
                  >
                    <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zM20 3h-9v2h9v14h-9v2h9a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                  </svg>
                </CustomButton>
              ) : (
                <>
                  <CustomButton
                    to="/login"
                    text="Log in"
                    className="header__login button-1"
                  />

                  <CustomButton
                    to="/registration"
                    text="Registration"
                    className="header__registration button-2"
                  />
                </>
              )}
            </div>
          </div>
          <div
            className={`header__burger ${menuOpen ? "active-burger" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
