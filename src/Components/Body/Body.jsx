import { GenericalDiv, ProductTitle } from "../../GlobalStyle";
import {
  AddButton,
  AddToCartButton,
  AddToCartText,
  BodyDiv,
  CarrosselDiv,
  CartImgOfButton,
  MaxAndMinButton,
  MiniTitle,
  OriginalValue,
  Paragraph,
  ProductDescount,
  ProductInfoDiv,
  ProductValue,
  ValuesDiv,
} from "./BodyStyle";
import Cart from "../../assets/CARRINHO.png";

export function Body() {
  return (
    <BodyDiv>
      <CarrosselDiv>Carrossel</CarrosselDiv>
      <ProductInfoDiv>
        <MiniTitle>LIBRINI CELL STORE</MiniTitle>
        <ProductTitle>iPhone 14 Pro Max</ProductTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quos
          corporis inventore, ducimus neque corrupti laudantium, nesciunt
          architecto modi asperiores mollitia exercitationem? Nostrum doloribus
          nihil laborum vero ad earum omnis!
        </Paragraph>
        <ValuesDiv>
          <ProductValue>R$ 9.879,99</ProductValue>
          <ProductDescount>50%</ProductDescount>
        </ValuesDiv>
        <OriginalValue>R$ 19.759,98</OriginalValue>
        <GenericalDiv>
          <AddButton>
            <MaxAndMinButton>-</MaxAndMinButton><ProductValue>0</ProductValue><MaxAndMinButton>+</MaxAndMinButton>
          </AddButton>
          <AddToCartButton>
            <CartImgOfButton src={Cart} />
            <AddToCartText>Add to cart</AddToCartText>
          </AddToCartButton>
        </GenericalDiv>
      </ProductInfoDiv>
    </BodyDiv>
  );
}
