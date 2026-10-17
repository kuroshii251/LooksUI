export default function Hero() {
    return (
        <>
            <div className="col h-screen background-hero">
                <div className="mx-auto justify-center w-fit py-20 space-y-10 items-center">
                    <h1 className="text-white font-extrabold lg:text-7xl text-5xl text-center">
                        A Collection <br /> of UI Components
                    </h1>
                    <p className="text-white text-center mt-3 lg:max-w-full max-w-80 mx-auto font-semibold lg:text-lg text-md lg:">
                        Created UI Components with Html, CSS, TailwindCSS, and
                        Javascript
                    </p>
                    <a
                        href="#about"
                        className="mx-auto hover:bg-slate-200 w-70 bg-white p-3 font-semibold rounded-lg font-semibold flex justify-center"
                    >
                        Get The UI Component
                    </a>
                </div>
            </div>
        </>
    );
}
