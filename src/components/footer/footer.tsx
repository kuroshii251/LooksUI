import logo from "../../assets/logo.png";
export default function Footer() {
    return (
        <>
            <div className="col pt-10">
                <div className="col bg-zinc-950 lg:h-auto p-3 w-full">
                    <div className="lg:flex block lg:space-between space-x-10 p-7 py-20 justify-start ">
                        <div className="col ">
                            <div className="flex items-center">
                            <img src={logo} height={100} width={100} />
                            <h1 className="text-3xl text-white font-bold">LooksUI</h1>

                            </div>
                            <p className="text-white text-lg w-100">
                               LooksUI is a website that provides UI assets/components for your website. It's ready to use components such as buttons, form, section, and card 
                            </p>
                       
                        </div>

                        <div className="col lg:flex space-y-10 justify-center align-items-center space-x-30 lg:w-1/2 lg:mt-0 mt-10 ml-auto">
                            <div className="col-md-12">
                                <ul className="col space-y-5 ">
                                    <p className="text-white font-bold">Menu</p>
                                    <li className="mt-5">
                                 <a href="/" className="text-white">
                                            Home
                                        </a>
                                    </li>
                                      
                                    <li>
                                        <a href="/blog" className="text-white">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/element"
                                            className="text-white"
                                        >
                                            Component
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/contact"
                                            className="text-white"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="col space-y-3">
                                <p className="text-white font-bold">Component</p>
                               
                                <li>
                                    <a
                                        href="/component/section"
                                        className="text-white text-decoration-none"
                                    >
                                        Section
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/component/button"
                                        className="text-white text-decoration-none"
                                    >
                                        Button
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/component/card"
                                        className="text-white text-decoration-none"
                                    >
                                        Card
                                    </a>
                                </li>
                                 <li>
                                    <a
                                        href="/component/forms"
                                        className="text-white text-decoration-none"
                                    >
                                        Form
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="text-white font-semibold p-5">Copyrigt © 2026 LooksUI All Rights Reserved.</h1>
                    </div>
                </div>
            </div>
        </>
    );
}
