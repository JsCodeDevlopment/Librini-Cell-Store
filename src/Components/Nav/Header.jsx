import { NavItem, ProductTitle, Logo } from "../../GlobalStyle";
import { HeaderDiv, Div1, Div2, CartLogo } from "./HeaderStyle";
import LogoImg from "../../assets/LOGO.png";
import Cart from "../../assets/CARRINHO.png";
import Profile from "../../assets/PROFILE.png";


export function Header() {
  return (
    <HeaderDiv>
        <Logo src={LogoImg} aria-hidden="true"/>
      <Div1>
        <NavItem><a href="#">Collections</a></NavItem>
        <NavItem><a href="#">Men</a></NavItem>
        <NavItem><a href="#">Women</a></NavItem>
        <NavItem><a href="#">About</a></NavItem>
        <NavItem><a href="#">Contact</a></NavItem>
      </Div1>
      <Div2>
        <CartLogo src={Cart}/>
        <img src={Profile} aria-hidden="true" />
      </Div2>
    </HeaderDiv>
  );
}
