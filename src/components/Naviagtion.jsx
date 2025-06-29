import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navigation({ closeMenu }) {
  const { isLoggedIn } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="menu">
      <Link to="/spot-trading" className="menu__item" onClick={closeMenu}>
        Spot Trading
      </Link>

      {isLoggedIn && (
        <div className="menu__item menu__dropdown">
          <button className="menu__link" onClick={toggleDropdown}>
            My profile
            <svg
              className={`menu__arrow ${
                isDropdownOpen ? "menu__arrow--open" : ""
              }`}
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7.9L0 1.9L1.4 0.5L6 5.1L10.6 0.5L12 1.9L6 7.9Z"
                fill="white"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div
              className={`menu__submenu ${
                isDropdownOpen ? "active-submenu" : ""
              }`}
            >
              <Link to="/account" className="menu__submenu-item" onClick={closeMenu}>
                Account information
              </Link>
              <Link to="/account/wallet" className="menu__submenu-item" onClick={closeMenu}>
                Wallet
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
