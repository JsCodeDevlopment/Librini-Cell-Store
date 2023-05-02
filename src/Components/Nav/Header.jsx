import { NavItem, ProductTitle } from "../../GlobalStyle";
import { HeaderDiv } from "./HeaderStyle";
import Logo from "../../assets/LOGO.png";

export function Header() {
  return (
    <>
      <HeaderDiv>
        <img
          src={Logo}
          aria-hidden="true"
          style={{
            width: "70px",
            height: "70px",
          }}
        />
        <NavItem>Collections</NavItem>
        <NavItem>Men</NavItem>
        <NavItem>Women</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </HeaderDiv>
    </>
  );
}
