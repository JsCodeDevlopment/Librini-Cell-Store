import { NavItem, Logo } from "../../GlobalStyle";
import {
  HeaderDiv,
  Div1,
  Div2,
  CartLogo,
  ProfileImg,
  ProductQnt,
} from "./HeaderStyle";
import { CartDiv, CartTitle, ProductDiv, BtnSellDiv } from "./CartStyle";
import LogoImg from "../../assets/LOGO.png";
import Cart from "../../assets/CARRINHO.png";
import Profile from "../../assets/PROFILE.png";
import { AddToCartButton, AddToCartText } from "../Body/BodyStyle";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import { CartProduct } from "./Cart";

export function Header() {
  const { cartQnt, setCartQnt } = useCart();
  const [showCart, setShowCart] = useState(false);
  const deleteProduct = () => {
    setCartQnt(0);
    setShowCart(false);
  };
  return (
    <HeaderDiv>
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
              <ProductDiv><AddToCartText>Your cart is empty.</AddToCartText></ProductDiv>
            ) : (
              <CartProduct deleteProduct={deleteProduct} />
            )}
          </CartDiv>
        )}
      </Div2>
    </HeaderDiv>
  );
}
