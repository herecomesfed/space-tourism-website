import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import PropTypes from "prop-types";

// import { useState } from "react";

const Burger = ({ ariaExpanded }) => {
  return (
    <div
      className="header__hamburger"
      aria-label="Burger Menu"
      aria-expanded={ariaExpanded}
      tabIndex="0"
      role="navigation"
    >
      <img
        className="header__hamburger--open"
        src={hamburger}
        alt="Hamburger"
      />
      <img className="header__hamburger--close" src={close} alt="Close" />
    </div>
  );
};

Burger.propTypes = {
  ariaExpanded: PropTypes.bool,
};

export default Burger;
