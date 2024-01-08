import React from "react";
import logo from "../../assets/icon/logo-colored.svg";
import logoo from "../../assets/icon/logo.svg";
import logooo from "../../assets/icon/logoo.svg";
import logoooo from "../../assets/icon/logoooo.svg";
import logooooo from "../../assets/icon/logooooo.svg";
import hamburger from "../../assets/icon/hamburger.svg";


function Header() {
  return (
    <div className="all">
      <div className="container">
        <header className="header">
          <div className="header-logo">
            <img className="header-hamburger" src={hamburger} alt="" />
            <img  className="header--logo" src={logo} alt="" />
          </div>
          <div className="header-Search-selection-button">
            <div className="header-Search">
              <input placeholder="Search" type="text" />
            </div>
            <div className="header-selectioon">
              <select className="header-selection">
                <option className="qwer">All category </option>
                <option className="qwer">All category</option>
              </select>
            </div>
            <div className="header-button">
              <button>Search</button>
            </div>
          </div>
          <div className="header-img-text-all">
            <button className="header-img-textt">
              <div className="header-img">
                <img className="respnsiw" src={logoo} alt="" />
              </div>
              <div className="header-text">Profile</div>
            </button>
            <button className="header-img-text">
              <div className="header-img">
                <img src={logooo} alt="" />
              </div>
              <div className="header-text">Message</div>
            </button>
            <button className="header-img-text">
              <div className="header-img">
                <img src={logoooo} alt="" />
              </div>
              <div className="header-text">Orders</div>
            </button>
            <button className="header-img-textt">
              <div className="header-img">
                {" "}
                <img src={logooooo} alt="" />
              
              </div>
              <div className="header-text">My cart</div>
            </button>
          </div>
        </header>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="navbar-all">
            <div className="navbar-all-1">
              <div className="navbar-1-block">
              <button>  <img src={hamburger} alt="" /></button>
                <p>All category</p>
              </div>
              <div className="navbar-2-block">
                <a href="#">Hot offers</a>
                <a href="#">Gift boxes</a>
                <a href="#">Projects</a>
                <a href="#">Menu item</a>
              </div>
              <div className="navbar-3-block">
                <select className="navbar-4-blockk">
                  <option>Help</option>
                </select>
              </div>
            </div>
            <div className="navbar-1-blocks">
              <div className="navbar-4-block">
                <select className="navbar-4-blockk">
                  <option>English, USD</option>
                </select>
              </div>
              <div className="navbar-5-block">
                <p>Ship to</p> {" "}
            
              </div>
            </div>
          </div>
          <div className="sorche">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M14.4417 13.067H13.7176L13.4609 12.8195C14.3592 11.7745 14.9001 10.4178 14.9001 8.94198C14.9001 5.65114 12.2326 2.98364 8.94173 2.98364C5.6509 2.98364 2.9834 5.65114 2.9834 8.94198C2.9834 12.2328 5.6509 14.9003 8.94173 14.9003C10.4176 14.9003 11.7742 14.3595 12.8192 13.4611L13.0667 13.7178V14.442L17.6501 19.0161L19.0159 17.6503L14.4417 13.067ZM8.94173 13.067C6.65923 13.067 4.81673 11.2245 4.81673 8.94198C4.81673 6.65948 6.65923 4.81698 8.94173 4.81698C11.2242 4.81698 13.0667 6.65948 13.0667 8.94198C13.0667 11.2245 11.2242 13.067 8.94173 13.067Z"
                fill="#8B96A5"
              />
            </svg>
            <input placeholder="Search" className="sorche-input" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
