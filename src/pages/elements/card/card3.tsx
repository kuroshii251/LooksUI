import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../../components/footer/footer";

export default function Card5() {
    const [tab, setTab] = useState(0);
    const htmlCode = `

    <div className="contentCard">
<div className="imagess">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIqvFm1SgSbf1amd8wqh3NloxjA3QbY6vrjUWgr5Fsg&s=10" />
<div className="text">
<h1>Card</h1>
 <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
 <button className="buttonss1">
 Read More
 </button>
</div>
</div>
</div>
 `;

    const cssCode = `
    .contentCard {
    background-color:white;
    border-radius:10px;
        border-top-left:20px;

    }

    .contentCard .imagess {
    border-top-left:20px;

    }

    
    .contentCard .imagess img {
    width:400px;
    border-top-left:20px;
    border-top-right:20px;
    height:200px;
    }

    .contentCard .text {
    padding: 20px;
    }

      .contentCard .text h1 {
    font-size:15px;
    font-weight:600;
    }

    .contentCard .text button {
    background-color: black;
    color: white;
    }

    .contentCard .text .buttonss1 {
    backgound-color:black;
    padding: 10px 20px;
    border-radius:5px;
    margin-top:30px;

    }

       
 `;

    const handleTab = (id: any) => {
        setTab(id);
    };

    const handleCopyHtml = () => {
        navigator.clipboard.writeText(htmlCode);
    };

    const handleCopyCss = () => {
        navigator.clipboard.writeText(cssCode);
    };

    return (
        <>
            <Navbar />
            <div className="col flex h-screen">
                <div className="col overflow-y-auto p-4 flex-1 ">

                    <div className="flex">
                      

                        <div className="col bg-zinc-800 p-5 h-100 rounded-xl">
                            <LiveProvider
                                code={`
                                <>
  <style>{\`
    ${cssCode} \`}</style>
  
${htmlCode}

</>
`}
                            >
                                <div className="flex items-center justify-center h-100 w-full">
                                    <LivePreview />
                                </div>
                            </LiveProvider>
                            <LiveError />
                        </div>
                        <LiveProvider />
                          <div className="p-2 bg-black">
                            <div className="col space-x-3 flex bg-zinc-950 p-3 left-0">
                                <button
                                    className="text-white font-semibold hover:bg-black p-1 w-30 rounded-lg"
                                    onClick={() => handleTab(0)}
                                >
                                    <i
                                        className="fa-brands mr-2 fa-html5"
                                        style={{ color: "red" }}
                                    ></i>
                                    HTML
                                </button>
                                <button
                                    className="p-1 font-semibold text-white w-30 rounded-lg hover:bg-black"
                                    onClick={() => handleTab(1)}
                                >
                                    <i
                                        className="fa-brands fa-css3 mr-2"
                                        style={{ color: "blue" }}
                                    ></i>
                                    CSS
                                </button>
                            </div>
                            <div className="">
                                <div className={tab === 0 ? "block" : "hidden"}>
                                    <div className=" flex justify-center items-center absolute">
                                        <button
                                            onClick={handleCopyHtml}
                                            className="cursor-pointer p-3"
                                        >
                                            <i
                                                className="fa-regular fa-clipboard"
                                                style={{ color: "white" }}
                                            ></i>
                                        </button>
                                    </div>
                                    <div className="h-83 overflow-y-auto">
                                        <LiveEditor
                                            language="html"
                                            code={htmlCode}
                                        ></LiveEditor>
                                    </div>
                                </div>

                                 <div className={tab === 1 ? "block" : "hidden"}>
                                    <div className=" flex justify-center items-center absolute">
                                        <button
                                            onClick={handleCopyCss}
                                            className="cursor-pointer p-3"
                                        >
                                            <i
                                                className="fa-regular fa-clipboard"
                                                style={{ color: "white" }}
                                            ></i>
                                        </button>
                                    </div>
                                    <div className="h-83 overflow-y-auto">
                                        <LiveEditor
                                            language="css"
                                            code={cssCode}
                                        ></LiveEditor>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </>
    );
}
