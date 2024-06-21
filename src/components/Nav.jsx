import React from "react";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
           <li>
            <a href="#home" className="link-styled">Home</a>
           </li>
           <li>
            <a href="#detect" className="link-styled">Detect</a>
           </li>
           <li>
            <a href="#about" className="link-styled">About</a>
           </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
