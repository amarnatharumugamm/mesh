import styled from 'styled-components';
import {Container} from '../globalStyles';
import {Link} from 'react-router-dom';

export const Nav=styled.nav`
background-color:#101522;
height:80px;
display:flex;
align-items:center;
justify-content:center;
position:sticky;
top:0;
z-index:999;
` 
export const NavbarContainer=styled(Container)`
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
${Container}
`

export const NavLogo=styled(Link)`
color:green;
display:flex; 
align-items:center;
justify-self:flex-start;
font-size:1.5rem;
font-weight:bold;
text-decoration:none;
margin-left:-40px;
cursor:pointer;
`
export const MobileIcon=styled.div`
display:none;

@media screen and (max-width :960px){
    display:block;
    position:absolute;
    top:0;
    right:0;
    font-size:1.8rem;
    transform:translate(-100%,60%);
    cursor:pointer;
}`

export const NavMenu=styled.ul`
display:flex;
align-items:center;
margin-bottom:25px;
margin-right:-60px;
justify-content:center;
text-align:center;
list-style:none;
@media screen and (max-width:960px){
display:flex;
flex-direction:column;
height:90vh;
width:100%;
position:absolute;
top:80px;
left:${({click}) => (click ? 0 : '-100%')};
opacity:1;
transition:all 0.5s ease;
background:#101522;
text-align:center;
padding:0;
}
`;

export const NavItem=styled.li`
height:80px;
border-bottom:2px solid transparent;
justify-items:center;
&:hover{
    border-bottom:2px solid #4b59f7;
}
@media screen and (max-width:960px){
    width:100%;
    padding:0;
    &:hover{
        border:none;
}}`

export const NavLinks=styled(Link)`
    color:#fff;
    display:flex;
    font-size:1rem;
    align-items:center;
    text-decoration:none;
    width:100%; 
    padding:2rem 1rem;    
    
 @media screen and (max-width:960px){
     position:center;
     width:100%;
     text-align:center;
    justify-content:center;
     display:flex;   
     padding:60px 0 0 0;
     
 &:hover{
     color:#4b59f7;
     transition:all 0.3s ease;
     }
    }`



