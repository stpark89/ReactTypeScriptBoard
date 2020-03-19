import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Link 2</a>
        </li>
        <li className="nav-item ml-auto">
          <a className="nav-link">Link 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
