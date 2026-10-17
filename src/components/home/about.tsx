export default function About() {
    return (
        <>
            <div className="grid lg:grid-cols-2 grid-cols-1 h-screen mx-auto p-7 space-x-7 place-items-center place-content-center lg:mb-5   items-center justify-center p-3">
                <div className="col lg:pb-2 pb-10">
                    <h1
                        className="text-white lg:text-start text-center text-5xl font-bold"
                        id="about"
                    >
                        About LooksUI
                    </h1>
                    <p className="text-white lg:text-start text-center text-lg w-auto mx-auto mt-5">
                        LooksUI is a website where users can search the best
                        component of UI for their website
                    </p>
                </div>
                <div className="">
                    <img src="../../src/assets/image.jpg" alt="tess" />
                </div>
            </div>
        </>
    );
}
