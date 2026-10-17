import "./App.css";
import Footer from "./components/footer/footer";
import About from "./components/home/about";
import Categoriess from "./components/home/category";
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
      <Categoriess />

      <div className="col p-5 h-50">
        <h1 className="text-white text-center font-semibold text-2xl">
          Get Started
        </h1>
        <a href=""></a>
      </div>
      <Footer />
    </>
  );
}

export default App;
