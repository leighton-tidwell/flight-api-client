import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <Link to="/">Search</Link>
      <Link to="/about">API</Link>
    </div>
  );
};

export default Navigation;
