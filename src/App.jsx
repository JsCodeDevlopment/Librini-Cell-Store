import { Body } from "./Components/Body/Body";
import { Header } from "./Components/Nav/Header";
import { ResetCSS } from "./GlobalStyle";

function App() {
  return (
    <>
      <ResetCSS />
      <Header />
      <Body/>
    </>
  );
}

export default App;
