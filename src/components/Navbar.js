import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import env from '../.env';
import githublogo from '../assets/githublogo.png';
import icon from '../assets/icon.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow d-flex justify-content-between mb-0">
      <a className="navbar-brand" href=".">
        <img src={icon} width="30" height="30" className="align-middle mr-2" alt="" />
        {env.appName}
      </a>
      <ul className="navbar-nav my-2 my-lg-0">
	      <li className="nav-item">
          <a className="nav-link" target="_blank" rel="noopener noreferrer" href={env.githubUrl}><img src={githublogo} width="30" height="30" className="align-middle mr-2" alt="" />{env.username} </a>
        </li>
	    </ul>
    </nav>
  );
}

export default Navbar;
