import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const  [isDropdown, setIsDropdown] = useState(false);
    return (
        <>
            <nav className="flex items-center justify-between h-30 flex-wrap p-3">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <a href="/">
                    <div className="flex items-center">
                            <img src={logo} height={100} width={100} />
                            <h1 className="text-3xl text-white font-bold">LooksUI</h1>

                            </div>                    </a>
                </div>
                <div className="block lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="cursor-pointer"
                    >
                        <i className="fa-solid fa-bars text-2xl text-white"></i>
                    </button>
                </div>
                <div
                    className={`${isOpen ? "block" : "hidden"} w-full z-index-10 lg:flex bg-black lg:items-center bg-black z-10 lg:w-auto`}
                >
                    <div className="text-md  lg:flex-grow lg:flex lg:items-center lg:space-x-5">
                          <a
                            href="/"
                            className="block font-semibold text-white mt-4 hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start w-full rounded-xl lg:inline-block lg:mt-0 text-black"
                        >
                            Home
                        </a>
                        <a
                            href="/blog"
                            className="block font-semibold text-white mt-4 hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start w-full rounded-xl lg:inline-block lg:mt-0 text-black"
                        >
                            Blog
                        </a>
                        <div className="col relative group">
                            <button onClick={() => setIsDropdown(!isDropdown)}
                                className="flex lg:justify-center font-semibold items-center text-white hover:bg-gray-800 p-3 lg:w-full w-full lg:text-center text-start rounded-xl lg:mt-0 text-black "
                            >
                                Component
                                <i className="fa-solid ml-3  fa-caret-down text-white"></i>
                            </button>

                            <div className={`${isDropdown ? "block" : "hidden" } lg:absolute lg:bg-zinc-950 rounded-xl w-60 lg:h-75 lg:p-5 p-0 flex justify-start right-0 overflow-hidden z-10`}>
                                <div className="h-50">
                                    <ul className="lg:space-y-5 w-50 space-x-3">
                                        <li className="lg:bg-zinc-800 lg:hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href="/component/section"
                                                className=" text-white  s"
                                            >
                                                Section Component
                                            </a>
                                        </li>
                                        <li className="lg:bg-zinc-800 lg:hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href="/component/button"
                                                className=" text-white"
                                            >
                                                Button
                                            </a>
                                        </li>
                                        <li className="lg:bg-zinc-800 lg:hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href="/component/card"
                                                className=" text-white"
                                            >
                                                Card
                                            </a>
                                        </li>
                                        <li className="lg:bg-zinc-800 lg:hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href="/component/forms"
                                                className=" text-white"
                                            >
                                               Forms
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="block hover:bg-gray-800 font-semibold hover:bg-gray-800 lg:w-20 lg:text-center text-start w-100 p-3 rounded-xl text-white mt-0 lg:inline-block lg:mt-0 text-white"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
