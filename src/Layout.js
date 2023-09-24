import { Outlet, Link} from "react-router-dom";
import React, { useState } from "react";
import Footer from "./components/Footer";
import moonIcon from './icons/moon-icon.svg';
import sunIcon from './icons/sun-icon.svg';

const Layout = () => {
  const [toggleIcon, setToggleIcon] = useState(moonIcon);
  const body = document.body;

  const ToggleMode = (e) => {
    if (e.target.classList.contains('sun-icon')) {
      e.target.classList.remove('sun-icon');
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      setToggleIcon(moonIcon);
    } else {
      e.target.classList.add('sun-icon');
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      setToggleIcon(sunIcon);
    }
  }

  const handleClick = () => {
    window.location.reload();
  }

  const handleScroll = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="main-content">
      <div className="top-icon">
        <svg onClick={handleScroll} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"></path></g>
        </svg>
      </div>
      <nav id="nav">
        <ul>
          <li>
            <Link to="/" onClick={handleClick}>
              <svg height="40px" viewBox="0 -134.5 1293 1293"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M287.528345 260.581254l42.846305-223.6631A12.126313 12.126313 0 0 1 342.231489 26.947631h609.010366a12.126313 12.126313 0 0 1 11.856839 9.970523l42.846304 223.6631z" fill="#9BD7D1"></path>
                  <path d="M939.115542 53.894992l34.223149 179.7389H320.134653L354.357801 53.894992h584.757741m12.395787-53.894723H342.231489a39.073674 39.073674 0 0 0-38.265253 31.797887l-49.044198 255.730459h783.629268l-48.774724-255.730459A39.073674 39.073674 0 0 0 951.241855 0.000269z" fill="#5C2D51"></path>
                  <path d="M26.947361 188.631799l1239.578621 0 0 808.42084-1239.578621 0 0-808.42084Z" fill="#325D79"></path>
                  <path d="M1212.63126 215.57916a26.947361 26.947361 0 0 1 26.947361 26.947361v700.631395a26.947361 26.947361 0 0 1-26.947361 26.947361H80.842084a26.947361 26.947361 0 0 1-26.947361-26.947361V242.526521a26.947361 26.947361 0 0 1 26.947361-26.947361h1131.789176m0-53.894723H80.842084a80.842084 80.842084 0 0 0-80.842084 80.842084v700.631395a80.842084 80.842084 0 0 0 80.842084 80.842084h1131.789176a80.842084 80.842084 0 0 0 80.842084-80.842084V242.526521a80.842084 80.842084 0 0 0-80.842084-80.842084z" fill="#5C2D51"></path>
                  <path d="M646.736672 883.334774A290.492555 290.492555 0 1 1 937.229227 592.842219 291.031502 291.031502 0 0 1 646.736672 883.334774z" fill="#EFEEEE"></path>
                  <path d="M646.736672 329.297025A263.545194 263.545194 0 1 1 383.191478 592.842219 263.814667 263.814667 0 0 1 646.736672 329.297025m0-53.894723A317.439916 317.439916 0 1 0 964.176588 592.842219 317.439916 317.439916 0 0 0 646.736672 275.402302z" fill="#5C2D51"></path>
                  <path d="M646.736672 592.842219m-120.185232 0a120.185232 120.185232 0 1 0 240.370463 0 120.185232 120.185232 0 1 0-240.370463 0Z" fill="#F26627"></path>
                  <path d="M646.736672 499.604349A93.23787 93.23787 0 1 1 553.498802 592.842219 93.23787 93.23787 0 0 1 646.736672 499.604349m0-53.894723A147.132593 147.132593 0 1 0 793.869265 592.842219 147.132593 147.132593 0 0 0 646.736672 445.709626z" fill="#5C2D51"></path>
                  <path d="M1007.292367 280.791775l169.498902 0 0 88.926292-169.498902 0 0-88.926292Z" fill="#F9A26C"></path>
                  <path d="M1149.843908 307.739136v35.03157h-115.60418v-35.03157h115.60418m4.311578-53.894723h-123.957862a49.583145 49.583145 0 0 0-49.583145 49.583145v43.385252a49.583145 49.583145 0 0 0 49.583145 49.583145h123.957862a49.583145 49.583145 0 0 0 49.583145-49.583145v-43.385252a49.583145 49.583145 0 0 0-49.583145-49.583145z" fill="#5C2D51"></path>
                </g>
              </svg>
              Photographer
            </Link>
          </li>
        </ul>
        <div className="change-mode-icon">
          <img className="toggle-icon" src={toggleIcon} alt="toggle-icon" onClick={(e) => ToggleMode(e)} />
        </div>
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;