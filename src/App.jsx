import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import Knowmore from "./components/Knowmore/Knowmore";
import Footer from "./components/footer/footer";
import HandCrafted from "./components/handcrafted/handCrafted";
import Menu from "./components/Menu/Menu";
import More from "./components/More/More";
import BgChanger from "./components/BgChanger/BgChanger";
function App() {
  return (
    <>
      <Navbar />
      <Knowmore />
      {/* <BgChanger/> */}
      <HandCrafted />
      <Menu />
      <More />
      <Footer />
    </>
  );
}

export default App;
