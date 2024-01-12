import React, { useEffect, useState } from "react";
import logo from "../../assets/icon/logo-colored.svg";
import logoo from "../../assets/icon/logo.svg";
import logooo from "../../assets/icon/logoo.svg";
import logoooo from "../../assets/icon/logoooo.svg";
import logooooo from "../../assets/icon/logooooo.svg";
import hamburger from "../../assets/icon/hamburger.svg";
import HeaderDropdown from "./HeaderDropdown";
import CloseIcon from "../../assets/icons/CloseIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import { Link } from "react-router-dom";

function Header() {
  const [dropdownActive, setDropdownActive] = useState(false)

  const [categories, setCategories] = useState([])

  function fetchCategories(){
    fetch('https://ecommerce.main-gate.appx.uz/dev/v1/category/list').then(function(response){
      return response.json()
    }).then(function(json){
      setCategories(json.categories)
    })
  }

  useEffect(function(){
    fetchCategories()
  }, [])


  function handleDropdownActive() {
    if(dropdownActive === true){
      setDropdownActive(false)
    }else{
      setDropdownActive(true)
    }
  }

  return (
    <div className="all">
      <div className="container">
        <header className="header">
          <Link to='/' className="header-logo">
            <img className="header-hamburger" src={hamburger} alt="" />
            <img src={logo} alt="" />
          </Link>
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
            <div className="header-img-textt">
              <div className="header-img">
                <img className="respnsiw" src={logoo} alt="" />
              </div>
              <div className="header-text">Profile</div>
            </div>
            <div className="header-img-text">
              <div className="header-img">
                <img src={logooo} alt="" />
              </div>
              <div className="header-text">Message</div>
            </div>
            <div className="header-img-text">
              <div className="header-img">
                <img src={logoooo} alt="" />
              </div>
              <div className="header-text">Orders</div>
            </div>
            <div className="header-img-textt">
              <div className="header-img">
                {" "}
                <img src={logooooo} alt="" />
              </div>
              <div className="header-text">My cart</div>
            </div>
          </div>
        </header>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="navbar-all">
            <div className="navbar-all-1">
              <button className="navbar-1-block" onClick={handleDropdownActive}>
                <span className="navbar-1-block__img">
                  {dropdownActive ? <CloseIcon/> : <MenuIcon/>}
                </span>
                <span>All category</span>
              </button>
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
        </div>
      </div>

      <HeaderDropdown isActive={dropdownActive} categories={categories}/>
    </div>
  );
}
export default Header;
