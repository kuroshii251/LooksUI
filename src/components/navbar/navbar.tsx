import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav className="flex items-center justify-between h-30 flex-wrap p-7">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img src={logo} width={100} height={100} alt="" />
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
                    className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto`}
                >
                    <div className="text-md lg:flex-grow lg:flex lg:items-center lg:space-x-5">
                        <a
                            href="/blog"
                            className="block text-white mt-4 hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start w-full rounded-xl lg:inline-block lg:mt-0 text-black"
                        >
                            Blog
                        </a>
                        <a
                            href="/code"
                            className="block text-white mt-4 hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start w-full rounded-xl lg:inline-block lg:mt-0 text-black"
                        >
                            Code
                        </a>
                        <div className="col relative group">
                            <a
                                className="flex justify-center items-center text-white hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start rounded-xl lg:mt-0 text-black "
                            >
                                Element
                                <i className="fa-solid ml-1 fa-caret-down text-white"></i>
                            </a>

                            <div className="hidden   absolute bg-zinc-950 rounded-xl w-auto h-100 p-10 flex justify-start right-0 overflow-hidden z-10">
                                <div className="h-50">
                                    <ul className="space-y-5 w-50 space-x-3">
                                        <li className="bg-zinc-800 hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href=""
                                                className="font-semibold text-white"
                                            >
                                                Section Component
                                            </a>
                                        </li>
                                        <li className=" rounded-lg hover:bg-zinc-900 p-3 bg-zinc-800 ">
                                            <a
                                                href=""
                                                className="text-white font-semibold"
                                            >
                                                Button
                                            </a>
                                        </li>
                                        <li className="bg-zinc-800 hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href=""
                                                className="font-semibold text-white"
                                            >
                                                Card
                                            </a>
                                        </li>
                                         <li className="bg-zinc-800 hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href=""
                                                className="font-semibold text-white"
                                            >
                                                Section Component
                                            </a>
                                        </li>
                                         <li className="bg-zinc-800 hover:bg-zinc-900 p-3 rounded-lg">
                                            <a
                                                href=""
                                                className="font-semibold text-white"
                                            >
                                                Section Component
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a
                            href="/contact"
                            className="block hover:bg-gray-800 hover:bg-gray-800 lg:w-20 lg:text-center text-start w-100 p-3 rounded-xl text-white mt-4 lg:inline-block lg:mt-0 text-white"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
