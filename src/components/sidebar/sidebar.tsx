export default function SideBar() {
    return (
        <>
            <aside className=" p-5  shrink-0 w-75 h-screen overflow-y-auto space-y-3 scroll-smooth">
                <div className="">
                    <ul className="col space-y-1">
                        <li className="p-5  text-2xl ">
                            <a
                                href="/element"
                                className="text-white font-semibold text-lg p-3 rounded-xl"
                            >
                                All
                            </a>
                            <a
                                href=""
                                className="text-white text-lg font-semibold p-3 rounded-xl"
                            ></a>
                        </li>
                        <li className="p-5  text-2xl ">
                            <i className="fa-solid fa-toggle-off  text-white"></i>

                            <a
                                href="/element/button"
                                className="text-white  text-lg font-semibold p-3 rounded-xl"
                            >
                                Button
                            </a>
                        </li>
                        <li className="p-5  text-2xl ">
                            <i className="fa-solid fa-diamond text-white"></i>

                            <a
                                href="/element/card"
                                className="text-white font-semibold text-lg p-3 rounded-xl"
                            >
                                Card
                            </a>
                        </li>
                         <li className="p-5  text-2xl ">
                            <i className="fa-solid fa-file-fragment text-white"></i>

                            <a
                                href="/element/section"
                                className="text-white font-semibold text-lg p-3 rounded-xl"
                            >
                                Section
                            </a>
                        </li>

                        <li className="p-5  text-2xl ">
                            <i className="fa-solid fa-file-lines  text-white"></i>

                            <a
                                href="/element/form"
                                className="text-white  text-lg font-semibold p-3 rounded-xl"
                            >
                                Form
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
