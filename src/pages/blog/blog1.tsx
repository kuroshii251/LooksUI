import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import oldpc from "../../assets/picture1.png";

export default function Blog1() {
    return (
        <>
            <Navbar />
               <h1 className="text-white">Halo</h1>
            <div className="flex flex-col justify-center p-5 py-20 items-center">
                <div className="col mb-7">
                    <div className="col flex justify-between pb-5">
                        <a
                            href="/blog"
                            className="flex justify-center items-center space-x-3 items-center"
                        >
                            <i className="fa-solid fa-arrow-left-long text-white"></i>
                            <h1 className="text-white">Back</h1>
                        </a>
                        <div className="flex justify-end items-end">
                            <h1 className="text-white">Aug 18 2026</h1>
                        </div>
                    </div>
                    <img src={oldpc} className="w-full" />
                    <h1 className="text-white font-bold py-10 text-3xl">
                        30 Project Ideas for Your Portfolio
                    </h1>
                    <p className="text-white py-1 w-120">
                        Here's the project Ideas for your Portfolio, from
                        beginner to advanced
                    </p>
                    <div className="col py-10">
                        <h1 className="text-white font-bold text-3xl py-7">
                            For Beginner
                        </h1>
                        <ol className="list-decimal lg:px-3 px-4">
                            <li className="text-white">Calculator</li>
                            <li className="text-white">Simple Landing Page</li>
                            <li className="text-white">
                                Personal Portfolio Website
                            </li>
                            <li className="text-white">Todo List</li>
                            <li className="text-white">
                                Random Number Generator
                            </li>
                        </ol>
                    </div>

                    <div className="col py-10">
                        <h1 className="text-white text-3xl  font-bold">
                            For Intermediate
                        </h1>
                        <ol className="py-7 list-decimal lg:px-3 px-4">
                            <li className="text-white">Link Shortener</li>
                            <li className="text-white">Meme Generator</li>
                            <li className="text-white">
                                Github Profile Fetcher
                            </li>
                            <li className="text-white">Instagram Clone</li>
                            <li className="text-white">Music Player</li>
                            <li className="text-white">File Converter</li>
                            <li className="text-white">Newsletter Builder</li>
                            <li className="text-white">Blog Platform</li>
                            <li className="text-white">Book Tracker</li>
                        </ol>
                    </div>

                    <div className="col py-10">
                        <h1 className="text-white text-3xl  font-bold">
                            For Advanced
                        </h1>
                        <ol className="py-7 list-decimal lg:px-3 px-4">
                            <li className="text-white">Dev Forum</li>
                            <li className="text-white">
                                Prompt Generator Tool
                            </li>
                            <li className="text-white">Habit Tracker</li>
                            <li className="text-white">Task Automation App</li>
                            <li className="text-white">Code Editor</li>
                            <li className="text-white">Dictionary App</li>
                            <li className="text-white">AI CV Analyzer</li>
                            <li className="text-white">Countdown Timer</li>
                            <li className="text-white">API Marketplace</li>
                            <li className="text-white">Social Bio Link Tool</li>
                        </ol>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
