import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

export default function ContactPage(){
    return (
        <>
        <Navbar/>
        <div className="flex justify-center items-center p-5 min-h-screen">
            <div className="    ">
                <h1 className="text-white font-bold text-5xl text-center mb-10">Contact Us  </h1>
                <p className="text-white text-center text-lg w-120 mb-6">Contact us if you wanna ask anything about LooksUI, or request the UI Components</p>
                <div className="flex flex-1 justify-center">
     <form action="https://formspree.io/f/xyeeoorz" method="POST">
                    <div className="col mt-4">
                        <p className="text-white font-semibold">Email</p>
                        <input type="email" name="email" className="shadow-sm bg-white text-black  rounded-md w-100 shadow-black p-3" placeholder="Email..." />
                    </div>
                    <div className="col mt-5">
                        <p className="text-white font-semibold">Message</p>
                        <textarea name="message" className="shadow-sm bg-white text-black rounded-md w-100 shadow-black p-3 resize-none h-30" placeholder="Message..." />
                    </div>
                    <button type="submit" className="p-3 cursor-pointer w-100 bg-zinc-800 text-white font-semibold hover:bg-zinc-900  rounded-lg text-center mt-5 ">Submit</button>
                </form>
                </div>
           
            </div>
        </div>

        <Footer/>
        </>
    )
}