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
  BtnSellDiv
} from "./CartStyle";
import LogoImg from "../../assets/LOGO.png";
import Cart from "../../assets/CARRINHO.png";
import Profile from "../../assets/PROFILE.png";
import Mini from "../../assets/PHONE3.png";
import Trash from "../../assets/icon-delete.svg";
import { AddToCartButton, AddToCartText } from "../Body/BodyStyle";

export function Header() {
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
        <ProductQnt>5</ProductQnt>
        <CartLogo src={Cart} />
        <ProfileImg src={Profile} aria-hidden="true" />
        <CartDiv>
          <CartTitle>Cart</CartTitle>
          <ProductDiv>
            <CartImg src={Mini} />
            <div>
              <ProductBuyInfo>iPhone 14 PRO MAX</ProductBuyInfo>
              <ProductBuyInfo>
                $ 9.879,99 x 5 <ProductBuyPrice>$49.399,95</ProductBuyPrice>
              </ProductBuyInfo>
            </div>
            <img src={Trash} aria-hidden="true" />
          </ProductDiv>
          <BtnSellDiv>
            <AddToCartButton><AddToCartText>Checkout</AddToCartText></AddToCartButton>
          </BtnSellDiv>
        </CartDiv>
      </Div2>
    </HeaderDiv>
  );
}
