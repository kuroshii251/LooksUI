import picture1 from "../../assets/picture1.png";

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
                                        History of User Interface (UI)
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
                            <div className="col py-3">
                                <h1 className="text-white text-xl w-100 font-semibold">
                                    How to make simple footer using Html, CSS,
                                    dan Javascript
                                </h1>
                            </div>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
