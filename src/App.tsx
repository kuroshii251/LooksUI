import "./App.css";
import Footer from "./components/footer/footer";
import About from "./components/home/about";
import Hero from "./components/home/hero";
import Navbar from "./components/navbar/navbar";
import ListElement from "./components/home/listelement";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <ListElement />


      <Footer />
    </>
  );
}

export default App;
