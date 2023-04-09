import { useContext, useState } from 'react';
import { AuthContext } from '../../context/user.context'
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { GiSpiderMask } from "react-icons/gi";
import ModalHeader from '../ModalHeader/index'
import "./header.scss";

function Header() {
    const { user } = useContext(AuthContext);
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
  ];

  return (
    <>
    <header className="header">
      <div className="section-left">
        <div className="logo"></div>
      </div>
      <div className="section-center">
        <div className="nav">
          {linkInfo.map((item, index) => (
            <div key={index}>
              <a href={item.href}>{item.title}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="section-right">
        <div className="profile" onClick={() =>{setActive(!active)}}>
          <GiSpiderMask />
          <p className="account">{user ? user?.id : '86X7ZAdjHt'}</p>
          {
              active ? <MdOutlineKeyboardArrowUp className="indicator" /> : 
              <MdOutlineKeyboardArrowDown className="indicator" />
               
            }
        </div>
            <ModalHeader active={active} setActive={setActive} user={user} />
      </div>
    </header>
    </>
  );
}

export default Header;
