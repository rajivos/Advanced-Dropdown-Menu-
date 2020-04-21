import React, { useState } from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";

import { CSSTransition } from 'react-transition-group'

function App() {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />}></NavItem>
      <NavItem icon={<BellIcon />}></NavItem>
      <NavItem icon={<MessengerIcon />}></NavItem>
      <NavItem icon={<CaretIcon />}>
      <DropdownMenu></DropdownMenu>

      </NavItem>
    </Navbar>
  );
}

function DropdownMenu() { 

  const [activeMenu, setActiveMenu] =useState('main')
  const [menuHeight, setMenuHeight] =useState(null)

  function calHeight (el) {
    const height = el.offsetHeight;
    setMenuHeight(height);

  }
  function DropdownItem(props) {
    return(
      <a href="#" className="menu-item" onClick={()=>props.goToMenu && setActiveMenu(props.goToMenu) }>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className="dropdown" style={{ height: menuHeight}}>
      <CSSTransition
      onEnter={calHeight}
      classNames="menu-primary"
       in={activeMenu==='main'} unmountOnExit timeout={500}>
     <div className="menu">
      <DropdownItem >My profile</DropdownItem>
      <DropdownItem leftIcon={<CogIcon/>} rightIcon={<ChevronIcon />}
      goToMenu="settings">
        Settings
      </DropdownItem>
      </div>
      </CSSTransition>

      <CSSTransition
       onEnter={calHeight}
      classNames="menu-secondary"
       in={activeMenu==='settings'} unmountOnExit timeout={500}>
     <div className="menu">
     <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"></DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Settings</DropdownItem>

      </div>
      </CSSTransition>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false)

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={()=>setOpen(!open)}>
        {" "}
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}
export default App;
