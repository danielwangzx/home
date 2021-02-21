import React, { useState } from 'react';
import './index.scss';
// const navTrigger = document.querySelector(".nav-trigger");
// const nav = document.querySelector(".stretchy-nav");
// navTrigger.addEventListener("click", function () {
//   nav.classList.toggle("nav-is-visible");
// });
export default function Header() {
    const [navVisible,setNavVisible] = useState(false);
    const [itemActive,setItemActive] = useState(1);
    const handleToggle = (e) => {
        setNavVisible(!navVisible)
    }
    return (
        <header>
        <nav className={`stretchy-nav ${navVisible?'nav-is-visible':''}`}>
          <a className="nav-trigger" onClick={handleToggle}>
            <span />
          </a>
          <ul className="links">
            <li>
              <a href="#home" className={`lists ${itemActive===1?'active':''}`} onClick={()=>setItemActive(1)}>
                <span className="fa fa-home" /><span className="nav-list-title">Home</span>
              </a>
            </li>
            <li>
              <a href="#favorite" className={`lists ${itemActive===2?'active':''}`} onClick={()=>setItemActive(2)}>
                <span className="fa fa-favourite" /><span className="nav-list-title">Favorite</span>
              </a>
            </li>
            <li>
              <a href="#results" className={`lists ${itemActive===3?'active':''}`} onClick={()=>setItemActive(3)}>
                <span className="fa fa-briefcase" /><span className="nav-list-title">Result</span>
              </a>
            </li>
          </ul>
          <span className="stretchy-nav-background" />
        </nav>
      </header>
    )
}