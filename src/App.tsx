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
      <div className="col h-100 bg-white">
        <h1 className="text-white text-center font-bold h-screen justify-center flex items-center text-3xl">
          Get Started Now
        </h1>
      </div>

      <Footer />
    </>
  );
}

export default App;
