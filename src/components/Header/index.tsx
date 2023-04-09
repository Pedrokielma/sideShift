
import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import {GiSpiderMask} from 'react-icons/gi'
import "./header.scss";

function Header() {
    const [active, setActive] = useState<boolean>(false);
  const linkInfo = [
    {
      title: "SHIFT",
      href: "/",
    },
    {
      title: "STAKE",
      href: "/",
    },
    {
      title: "INTAGRATE",
      href: "/",
    },
    {
      title: "HISTORY",
      href: "/",
    },
  ]


  return (
    <header className="header">
      <div className="section-left">
          <div className="logo" >
          </div>
    </div>
      <div className="section-center">
      <div className="nav">
          {linkInfo.map((item, index) => (
            <div key={index}>
              <a href={item.href} >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      
        <div className="section-right">
          <div>
            <div className="user-profile-dropdown">
              <ul className="profile-wrapper">
                <li>
                  <div className="profile">
                    {/* <span className="profile-text">
                      <Icon
                        className="dropdown-indicator"
                        icon="users"
                      />
                    </span> */}
                    <GiSpiderMask />
                      <p style={{ textTransform: "capitalize" }}>
                      86X7ZAdjHt
                      </p>
                    <MdOutlineKeyboardArrowDown
                      className="dropdown-indicator"
                    />
                    <ul className="menu">
                      <li>
                        <a>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

    </header>
  );
}

export default Header;
