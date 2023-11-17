import React, { useState } from "react";
import "../styles/BurgerMenu.scss";

const BurgerMenu = () => {
  const [menuStatus, setMenuStatus] = useState(true);

  const handleBurgerMenu = () => {
    setMenuStatus(!menuStatus);
  };
  return (
    <>
      <div
        className={menuStatus ? "burger closed" : "burger opened"}
        onClick={handleBurgerMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="mobile-menu"></div>
    </>
  );
};

export default BurgerMenu;
