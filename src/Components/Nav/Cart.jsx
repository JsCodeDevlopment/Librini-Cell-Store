import React from "react";
import Trash from "../../assets/icon-delete.svg";
import Mini from "../../assets/PHONE3.png";
import { BtnSellDiv, CartImg, ProductBuyInfo, ProductBuyPrice, ProductDiv } from "./CartStyle";
import { useCart } from "../../context/CartContext";
import { AddToCartButton, AddToCartText } from "../Body/BodyStyle";

export function CartProduct({ deleteProduct }) {
  const { cartQnt } = useCart();
  return (
    <>
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
      <img
        src={Trash}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
        onClick={deleteProduct}
      />
      </ProductDiv>
      <BtnSellDiv>
        <AddToCartButton>
          <AddToCartText>Checkout</AddToCartText>
        </AddToCartButton>
      </BtnSellDiv>
    </>
  );
}
