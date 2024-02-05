import logo from "../../assets/shared/logo.svg";
// import hamburger from "../assets/shared/icon-hamburger.svg";
// import close from "../assets/shared/icon-close.svg";

import Burger from "./Burger";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Destinations",
    link: "/destination",
  },
  {
    title: "Crew",
    link: "/crew",
  },
  {
    title: "Technology",
    link: "/technology",
  },
];

// const handleToggleMenu = function (e) {
//   if (e.target.closest(".header__hamburger")) {
//     console.log(hamburger);
//     // ariaExpanded = !ariaExpanded;
//     const setAriaExpanded = function (element) {
//       element.setAttribute("aria-expanded", ariaExpanded);
//     };
//     // setAriaExpanded(nav);
//     setAriaExpanded(hamburger);
//   }
// };

const Header = () => {
  const [ariaExpanded, setAriaExpanded] = useState(false);

  const handleToggleMenu = function (e) {
    if (e.target.closest(".header__hamburger") || e.target.closest("a")) {
      setAriaExpanded(!ariaExpanded);
    }
  };

  return (
    <header className="header" onClick={handleToggleMenu}>
      <div className="header__logo">
        <img src={logo} alt="Space Tourism" />
      </div>
      <nav className="header__menu" aria-expanded={ariaExpanded}>
        <ul aria-label="Main Menu">
          {/* <BrowserRouter> */}
          {links.map((link, index) => {
            return (
              <li key={index}>
                <NavLink to={link.link}>
                  <span className="menu-index">
                    {index < 10 ? `0${index}` : index}
                  </span>
                  {link.title}
                </NavLink>
              </li>
            );
          })}
          {/* </BrowserRouter> */}
        </ul>
      </nav>
      <Burger ariaExpanded={ariaExpanded} />
      {/* <div
        className="header__hamburger"
        aria-label="Burger Menu"
        aria-expanded={ariaExpanded}
        tabIndex="0"
      >
        <img
          className="header__hamburger--open"
          src={hamburger}
          alt="Hamburger"
        />
        <img className="header__hamburger--close" src={close} alt="Close" />
      </div> */}
    </header>
  );
};

export default Header;
