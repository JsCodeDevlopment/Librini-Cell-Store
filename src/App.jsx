import { BodyComponent } from "./Components/Body/Body";
import { Header } from "./Components/Nav/Header";
import { ResetCSS } from "./GlobalStyle";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ResetCSS />
      <Header />
      <BodyComponent />
    </CartProvider>
  );
}

export default App;
