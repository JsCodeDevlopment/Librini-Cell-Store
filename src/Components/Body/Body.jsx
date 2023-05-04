import { ProductTitle } from "../../GlobalStyle";
import {
  BodyDiv,
  CarrosselDiv,
  MiniTitle,
  Paragraph,
  ProductInfoDiv,
} from "./BodyStyle";

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
        <div>
          <p>Value</p> <span>Descount</span>
        </div>
      </ProductInfoDiv>
    </BodyDiv>
  );
}
