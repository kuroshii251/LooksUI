import picture1 from "../../assets/picture1.png";
import picture2 from "../../assets/ui_photo.png";
import oldpc from "../../assets/pc.png";
import ai from "../../assets/ai.png";

export default function ListBlog() {
    return (
        <>
            <div className="col ">
                <div className="grid lg:grid-cols-3 grid-cols-1 lg:space-y-8 space-y-7 space-x-5 p-5">
                    <a href="/blog/1" className="bg-zinc-900 ">
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
                            <div className=" py-5">
                                <div className="">
                                    <h1 className="text-white text-xl w-100 font-semibold">
                                        30 Project Ideas for Your Portfolio
                                    </h1>
                                </div>
                                <p className="text-white">
                                    Here's the project Ideas for your Portfolio,
                                    from beginner to advanced
                                </p>
                            </div>
                        </div>
                    </a>

                    <a href="/blog/2" className="bg-zinc-900 ">
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
                                    <p className="text-white ">03/9/2026</p>
                                </div>
                            </div>
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

                    <a href="/blog/3" className="bg-zinc-900 ">
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
                                    <p className="text-white ">12/4/2026</p>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    How to make simple
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

                    <a href="/blog/4" className="bg-zinc-900 ">
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
                            <div className="col mt-5">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    Coding in AI Era
                                </h1>
                            </div>
                            <p className="text-white">
                                Here's the project Ideas for your Portfolio,
                                from beginner to advanced
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
