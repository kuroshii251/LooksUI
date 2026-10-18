import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    return (
        <>
            <nav className="flex items-center justify-between flex-wrap p-7">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <h1 className="font-semibold text-2xl">LooksUI</h1>
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
                            href=""
                            className="block text-white mt-4 hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start w-full rounded-xl lg:inline-block lg:mt-0 text-black"
                        >
                            Blog
                        </a>
                        <div className="col relative">
                            <button
                                onClick={() => setIsDropdown(!isDropdown)}
                                className="block text-white hover:bg-gray-800 p-3 lg:w-20 w-full lg:text-center text-start rounded-xl lg:inline-block lg:mt-0 text-black "
                            >
                                Element
                            </button>

                            <div
                                className={`${isDropdown ? "block" : "hidden"} absolute bg-zinc-900 w-full overflow-hidden z-10`}
                            >
                                <ul>
                                    <li>
                                        <a href="">Button</a>
                                    </li>
                                    <li>
                                        <a href="" className="text-white">
                                            Button
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">Button</a>
                                    </li>
                                    <li>
                                        <a href="">Button</a>
                                    </li>
                                    <li>
                                        <a href="">Button</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

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
        </>
    );
}
