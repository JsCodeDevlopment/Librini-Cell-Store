import { BodyComponent } from "./Components/Body/Body";
import { Header } from "./Components/Nav/Header";
import { ResetCSS } from "./GlobalStyle";

function App() {
  return (
    <>
      <ResetCSS />
      <Header />
      <BodyComponent />
    </>
  );
}

export default App;
