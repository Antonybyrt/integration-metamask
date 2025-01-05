"use client";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './NavBar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';

const NavBar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <ConnectButton showBalance={true} />
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;