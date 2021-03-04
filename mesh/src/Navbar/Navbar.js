import React,{useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './Navbar.Elements';
import {IconContext} from 'react-icons/lib';
import { AiFillHome } from "react-icons/ai";
import { AiTwotoneHighlight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";


function Navbar() {
    const [click,setClick]=useState(false)
    const handleClick = () => setClick(!click)
    return (
<>
<IconContext.Provider value={{color:'#fff'}}>
<Nav>
<NavbarContainer>
  <NavLogo to='/'>
  <div>
    MESH
      </div>
    </NavLogo>
    <MobileIcon onClick={handleClick}>
      {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <NavMenu onClick={handleClick} click={click}>
         <NavItem>
             <NavLinks to='/'> <span style={{marginRight:' 5px ',marginTop:'5px',}}>  <AiFillHome /> </span>  Home </NavLinks>
             </NavItem>
         <NavItem>
             <NavLinks to='/Api'> <span style={{marginRight:' 5px',marginTop:'5px',}}>  <AiTwotoneHighlight /> </span> Use API </NavLinks>
             </NavItem>
         <NavItem>
             <NavLinks to='/Login'>  <span style={{marginRight:'5px',marginTop:'5px',}}>  <FaUserAlt /> </span> Log in  </NavLinks>
             </NavItem>
         <NavItem>
             <NavLinks to='/Signup'><span style={{marginRight:'5px',marginTop:'5px'}}>  <FaUserPlus /> </span> SignUp </NavLinks>
             </NavItem>
             </NavMenu>
  </NavbarContainer>
</Nav>
</IconContext.Provider>
</>
 );
}
export default Navbar;