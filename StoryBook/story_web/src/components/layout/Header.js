import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <img
        src="../public/favicon.ico"
        alt="Logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
    </header>
  );
};

export default Header;
