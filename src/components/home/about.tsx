export default function About() {
    return (
        <>
            <div className="grid  grid-cols-1 h-screen mx-auto p-7 space-x-7 place-items-center place-content-center lg:mb-5   items-center justify-center p-3">
                <div className="col lg:pb-2 pb-10">
                    <h1
                        className="text-white text-center mx-auto text-5xl font-bold"
                        id="about"
                    >
                        About LooksUI
                    </h1>
                    <p className="text-white lg:text-start text-center text-xl lg:w-150 w-100  mx-auto mt-5">
LooksUI is a website that provides UI assets/components for your website. It's ready to use elements such as buttons, form, section, and card                    </p>
                </div>
            </div>
        </>
    );
}
