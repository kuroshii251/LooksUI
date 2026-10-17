export default function Categoriess() {
    return (
        <>
            <div className="col justify-center h-screen items-center pt-30">
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
                            <p className="text-gray-300 text-md mt-3">
                                Modern components
                            </p>
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
                            <h1 className="text-white text-3xl font-bold">
                                Button Effect
                            </h1>
                            <p className="text-gray-300 text-md mt-3">
                                Modern Button
                            </p>
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
                            <h1 className="text-white text-3xl font-bold">
                                Card Components
                            </h1>
                            <p className="text-gray-300 text-md mt-3">
                                Modern Card
                            </p>
                            <div className="grid grid-cols-2 mt-7 space-x-3 space-y-3">
                                <div className="bg-zinc-900 border border-zinc-800 rounded-xl  p-1">
                                    <h1 className="text-gray-300 text-center font-semibold text-md">
                                        Modern Card
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}
