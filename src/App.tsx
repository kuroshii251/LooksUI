import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-7">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <h1 className="font-semibold text-2xl">LooksUI</h1>
        </div>
        <div className="block  lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <i className="fa-solid fa-bars text-2xl text-white"></i>
          </button>
        </div>
        <div
          className={`${isOpen ? "flex" : "hidden"} w-full lg:items-center lg:w-auto`}
        >
          <div className="text-md lg:flex-grow space-x-5">
            <a
              href=""
              className="block text-white mt-4 hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start w-full rounded-xl lg:inline-block lg:mt-0 text-black"
            >
              Blog
            </a>

            <a
              href=""
              className="block text-white hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start rounded-xl lg:inline-block lg:mt-0 text-black "
            >
              Element
            </a>

            <a
              href=""
              className="block hover:bg-gray-800 hover:bg-gray-800 lg:w-20 lg:text-center text-start w-100 p-3 rounded-xl text-white mt-4 lg:inline-block lg:mt-0 text-white"
            >
              Contact
            </a>
            <a
              href=""
              className="block bg-white hover:bg-slate-200 hover:bg-gray-800 lg:w-30 lg:text-center text-start w-100 p-3 rounded-xl text-black mt-4 lg:inline-block lg:mt-0"
            >
              Request UI
            </a>
          </div>
        </div>
      </nav>

      <div className="col h-screen">
        <div className="mx-auto justify-center w-fit py-20 space-y-8 items-center">
          <h1 className="text-white font-extrabold lg:text-7xl text-5xl text-center">
            A Collection <br /> of UI Components
          </h1>
          <p className="text-white text-center mt-3 lg:max-w-full max-w-80 mx-auto font-semibold lg:text-lg text-md lg:">
            Created UI Components with Html, CSS, TailwindCSS, and Javascript
          </p>
          <button className="mx-auto hover:bg-slate-200 bg-white p-3 font-semibold rounded-lg font-semibold flex justify-center">
            Get The UI Component
          </button>
        </div>
      </div>
      <div className="col h-screen items-center justify-center p-3">
        <div className="">
          <h1 className="text-white text-center text-5xl font-bold">
            About This Website
          </h1>
          <p className="text-white text-center text-lg w-200 mx-auto mt-5">
            LooksUI is a website where users can search the best component of UI
            for their website
          </p>
        </div>
      </div>

      <div className="col justify-center items-center h-screen">
        <div>
          <h1 className="text-center text-6xl font-bold text-white">
            Collection of UI Component
          </h1>
          <p className="text-white text-center mt-5 text-lg mb-5 font-semibold">
            Here's Collection of UI Component
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 pt-5 space-y-5 justify-center items-center place-items-center">
          <div className="bg-zinc-900 p-5 rounded-xl border border-gray-900 border-2 border-zinc-800">
            <div className="p-3">
              <h1 className="text-white text-3xl font-bold">
                Section Component
              </h1>
              <p className="text-gray-300 text-md mt-3">Modern component</p>
              <div className="grid grid-cols-2 mt-7 space-x-3 space-y-3">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-1">
                  <h1 className="text-gray-300 text-center font-semibold text-md">
                    Hero
                  </h1>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-2">
                  <h1 className="text-white text-center font-semibold text-md">
                    Footer
                  </h1>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-3">
                  <h1 className="text-white text-center font-semibold text-md">
                    Navigation
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <a
            href=""
            className="bg-zinc-900 p-5 rounded-xl border border-gray-900 border-2 border-zinc-800"
          >
            <div className="p-3">
              <h1 className="text-white text-3xl font-bold">Button Effect</h1>
              <p className="text-gray-300 text-md mt-3">Modern Button</p>
              <div className="grid grid-cols-2 mt-7 space-x-3 space-y-3">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-1">
                  <h1 className="text-gray-300 text-center font-semibold text-md">
                    CSS Button
                  </h1>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-2">
                  <h1 className="text-white text-center font-semibold text-md">
                    Tailwind Button
                  </h1>
                </div>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-3">
                  <h1 className="text-white text-center font-semibold text-md">
                    Animated Button
                  </h1>
                </div>
              </div>
            </div>
          </a>

          <a
            href=""
            className="bg-zinc-900 h-68 p-5 rounded-xl border border-gray-900 border-2 border-zinc-800"
          >
            <div className="p-3">
              <h1 className="text-white text-3xl font-bold">Card Components</h1>
              <p className="text-gray-300 text-md mt-3">Modern Card</p>
              <div className="grid grid-cols-2 mt-7 space-x-3 space-y-3">
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-1">
                  <h1 className="text-gray-300 text-center font-semibold text-md">
                    Modern Card{" "}
                  </h1>
                </div>
              </div>
            </div>
          </a>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
