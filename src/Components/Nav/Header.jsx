import { NavItem, Logo } from "../../GlobalStyle";
import {
  HeaderDiv,
  Div1,
  Div2,
  CartLogo,
  ProfileImg,
  ProductQnt,
} from "./HeaderStyle";
import {
  CartDiv,
  CartTitle,
  CartImg,
  ProductDiv,
  ProductBuyInfo,
  ProductBuyPrice,
  BtnSellDiv,
} from "./CartStyle";
import LogoImg from "../../assets/LOGO.png";
import Cart from "../../assets/CARRINHO.png";
import Profile from "../../assets/PROFILE.png";
import Mini from "../../assets/PHONE3.png";
import Trash from "../../assets/icon-delete.svg";
import { AddToCartButton, AddToCartText } from "../Body/BodyStyle";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

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
        {showCart && cartQnt > 0 && (
          <CartDiv>
            <CartTitle>Cart</CartTitle>
            <ProductDiv>
              <CartImg src={Mini} />
              <div>
                <ProductBuyInfo>iPhone 14 PRO MAX</ProductBuyInfo>
                <ProductBuyInfo>
                  $ 9.879,99 x {cartQnt}{" "}
                  <ProductBuyPrice>
                    {(cartQnt * 9879.99).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </ProductBuyPrice>
                </ProductBuyInfo>
              </div>
              <img src={Trash} aria-hidden="true" onClick={deleteProduct} />
            </ProductDiv>
            <BtnSellDiv>
              <AddToCartButton>
                <AddToCartText>Checkout</AddToCartText>
              </AddToCartButton>
            </BtnSellDiv>
          </CartDiv>
        )}
      </Div2>
    </HeaderDiv>
  );
}
