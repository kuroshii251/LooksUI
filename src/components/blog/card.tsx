import picture1 from "../../assets/picture1.png";
import picture2 from "../../assets/ui_photo.png";
import oldpc from "../../assets/pc.png";
import ai from "../../assets/ai.png";

export default function ListBlog() {
    return (
        <>
            <div className="col pt-20 h-screen">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-y-8 space-y-7 space-x-5 p-5">
                    <a href="/blog1" className="bg-zinc-900 ">
                        <div className="">
                            <img
                                src={oldpc}
                                alt=""
                                className="rounded-top-xl h-70 w-full object-cover"
                            />
                        </div>
                        <div className="pt-5 p-5">
                            <div className="grid grid-cols-2 w-full">
                                <div className="col w-1/2 items-center">
                                    <p className="text-white w-200">
                                        Created by Admin
                                    </p>
                                </div>
                                <div className="col flex items-center justify-end">
                                    <p className="text-white ">10/17/2026</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    History of User Interface (UI)
                                </h1>
                            </div>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque tempore quisquam
                                veritatis recusandae sequi sint nesciunt ullam
                                culpa autem, fuga harum vitae
                            </p>
                        </div>
                    </a>

                    <a href="/blog1" className="bg-zinc-900 ">
                        <div className="">
                            <img
                                src={picture2}
                                alt=""
                                className="rounded-top-xl h-70 w-full object-cover"
                            />
                        </div>
                        <div className="pt-5 p-5">
                            <div className="grid grid-cols-2 w-full">
                                <div className="col w-1/2 items-center">
                                    <p className="text-white w-200">
                                        Created by Admin
                                    </p>
                                </div>
                                <div className="col flex items-center justify-end">
                                    <p className="text-white ">10/17/2026</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    History of User Interface (UI)
                                </h1>
                            </div>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque tempore quisquam
                                veritatis recusandae sequi sint nesciunt ullam
                                culpa autem, fuga harum vitae
                            </p>
                        </div>
                    </a>

                    <a href="/blog1" className="bg-zinc-900 ">
                        <div className="">
                            <img
                                src={picture1}
                                alt=""
                                className="rounded-top-xl h-70 w-full object-cover"
                            />
                        </div>
                        <div className="pt-5 p-5">
                            <div className="grid grid-cols-2 w-full">
                                <div className="col w-1/2 items-center">
                                    <p className="text-white w-200">
                                        Created by Admin
                                    </p>
                                </div>
                                <div className="col flex items-center justify-end">
                                    <p className="text-white ">10/17/2026</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    History of User Interface (UI)
                                </h1>
                            </div>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque tempore quisquam
                                veritatis recusandae sequi sint nesciunt ullam
                                culpa autem, fuga harum vitae
                            </p>
                        </div>
                    </a>

                    <a href="/blog1" className="bg-zinc-900 ">
                        <div className="">
                            <img
                                src={ai}
                                alt=""
                                className="rounded-top-xl h-70 w-full object-cover"
                            />
                        </div>
                        <div className="pt-5 p-5">
                            <div className="grid grid-cols-2 w-full">
                                <div className="col w-1/2 items-center">
                                    <p className="text-white w-200">
                                        Created by Admin
                                    </p>
                                </div>
                                <div className="col flex items-center justify-end">
                                    <p className="text-white ">10/17/2026</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    History of User Interface (UI)
                                </h1>
                            </div>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eaque tempore quisquam
                                veritatis recusandae sequi sint nesciunt ullam
                                culpa autem, fuga harum vitae
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
