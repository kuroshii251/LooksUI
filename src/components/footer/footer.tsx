import logo from "../../assets/logo.png";
export default function Footer() {
    return (
        <>
            <div className="col pt-10">
                <div className="col bg-zinc-950 lg:h-120 p-3 w-full">
                    <div className="lg:flex block space-between space-x-10 p-7 py-20 justify-start items-center">
                        <div className="col-md-6 w-1/2">
                            <img src={logo} height={100} width={100} />
                            <p className="text-white w-100">
                                LooksUI is a website where users can search the
                                best UI component for their website
                            </p>
                            <div className="mt-5">
                                <a
                                    href="https://github.com/kuroshii251"
                                    className="bg-white p-1 mt-10 rounded-full"
                                >
                                    <i className="fa-brands fa-github text-xl"></i>
                                </a>
                            </div>
                        </div>

                        <div className="col flex space-x-30 lg:w-1/2 lg:mt-0 mt-10 ml-auto">
                            <div className="col-md-12">
                                <ul className="col space-y-3">
                                    <li>
                                        <h1 className="text-white font-semibold">
                                            Home
                                        </h1>
                                    </li>
                                    <li>
                                        <h1 className="text-white font-semibold">
                                            Menu
                                        </h1>
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
                                            Elements
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
                                    <li>
                                        <a
                                            href="/request-ui"
                                            className="text-white"
                                        >
                                            Request UI
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="col space-y-3">
                                <li>
                                    <a
                                        href=""
                                        className="text-white font-semibold text-decoration-none"
                                    >
                                        Elements
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/elements/section"
                                        className="text-white text-decoration-none"
                                    >
                                        Section
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/elements/button"
                                        className="text-white text-decoration-none"
                                    >
                                        Button
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/elements/card"
                                        className="text-white text-decoration-none"
                                    >
                                        Card
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr className="text-white" />
                    <div className="p-6 ">
                        <p className="text-white font-semibold text-md ">
                            Copyright @2026 by Kuro
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
