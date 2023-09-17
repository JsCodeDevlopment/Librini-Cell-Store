import { NavItem, Logo } from "../../GlobalStyle";
import {
  HeaderDiv,
  Div1,
  Div2,
  CartLogo,
  ProfileImg,
  ProductQnt,
} from "./HeaderStyle";
import { CartDiv, CartTitle, ProductDiv } from "./CartStyle";
import LogoImg from "../../assets/LOGO.png";
import Cart from "../../assets/CARRINHO.png";
import HamburguerBtn from "../../assets/icon-menu.svg";
import CloseHamburguerBtn from "../../assets/icon-close.svg";
import Profile from "../../assets/PROFILE.png";
import { AddToCartText } from "../Body/BodyStyle";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { CartProduct } from "./Cart";
import LeftMenu from "./LeftMenu";
import { MnHamburguerImg } from "./LeftMenuStyle";

export function Header() {
  const { cartQnt, setCartQnt } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [menuVisible, setmenuVisible] = useState(false)

  const deleteProduct = () => {
    setCartQnt(0);
    setShowCart(false);
  };


  return (
    <HeaderDiv>
      <MnHamburguerImg src={menuVisible ? CloseHamburguerBtn : HamburguerBtn} alt="" onClick={() => setmenuVisible(!menuVisible)}/>
      {menuVisible ? <LeftMenu/> : <></> }
      <Logo src={LogoImg} aria-hidden="true" />
      <Div1>
        <NavItem>
          <a href="#">Collections</a>
        </NavItem>
        <NavItem>
          <a href="#">Men</a>
        </NavItem>
        <NavItem>
          <a href="#">Women</a>
        </NavItem>
        <NavItem>
          <a href="#">About</a>
        </NavItem>
        <NavItem>
          <a href="#">Contact</a>
        </NavItem>
      </Div1>
      <Div2>
        {cartQnt > 0 && <ProductQnt>{cartQnt}</ProductQnt>}
        <CartLogo src={Cart} onClick={() => setShowCart(!showCart)} />
        <ProfileImg src={Profile} aria-hidden="true" />
        {showCart && (
          <CartDiv>
            <CartTitle>Cart</CartTitle>
            {cartQnt === 0 ? (
              <ProductDiv>
                <AddToCartText>Your cart is empty.</AddToCartText>
              </ProductDiv>
            ) : (
              <CartProduct deleteProduct={deleteProduct} />
            )}
          </CartDiv>
        )}
      </Div2>
    </HeaderDiv>
  );
}
