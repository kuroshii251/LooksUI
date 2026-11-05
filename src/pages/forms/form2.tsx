import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../components/footer/footer";

export default function Form2() {
    const [tab, setTab] = useState(0);
      const htmlCode = `
         <div class="newsletter">
        <div class="">
            <h1>Subscribe a newsletter</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nihil laudantium mollitia hic.
                Esse nostrum magnam rem architecto facere voluptate.</p>
            <form action="">
                <div class="content">
                    <div class="">
                        <input type="text" placeholder="Name...">
                    </div>
                    <div class="">
                        <input type="text" placeholder="Address...">
                    </div>
                    <div class="">
                        <a href="" class="">Submit</a>

                    </div>
                </div>

            </form>
        </div>
    </div>
 `

    const cssCode = `
        .newsletter {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(25, 25, 127);
            flex-direction: column;
            padding: 100px 100px;
            color: white;
            margin: 0 auto;
            font-family: Arial, Helvetica, sans-serif;
        }

        .newsletter h1 {
            font-size: 50px;
            text-align: center;
            font-weight:600;

        }

        .newsletter .content {
            display: flex;
            justify-content: center;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 5px;
        }

        .newsletter p {
            width: 600px;
            text-align: center;
            margin-bottom:40px;
            
        }

        .newsletter .content input {
            padding: 10px 30px;
            align-items: center;
            background-color:white;
            color:black;
        }


        .newsletter .content a {
            background-color: rgb(2, 2, 194);
            padding: 15px;
            border-radius: 5px;
            text-decoration: none;
            color: white;
            width: 100px;
        }

        .content a:hover {
            background-color: #333;
        }

 `


    const handleTab = (id: any) => {
        setTab(id);
    };

    const handleCopyHtml = () => {
        navigator.clipboard.writeText(htmlCode);
        alert("Copied");
    };

    const handleCopyCss = () => {
        navigator.clipboard.writeText(cssCode);
        alert("Copied");
    };




    return (
        <>
            <Navbar />
            <div className="col flex h-screen">
                <div className="col overflow-y-auto p-4 flex-1 ">
                    <div className="col block space-y-5">
                        <div className="col bg-zinc-800 p-5 h-auto rounded-xl">
                            <LiveProvider scope={{htmlCode, cssCode}}
                                code={`
                                <>
  <style>{cssCode}</style>
  
<div dangerouslySetInnerHTML={{ __html: htmlCode}}/>  


</>
`}
                            >
                                <div className="flex items-center justify-center h-auto w-full">
                                    <LivePreview />
                                </div>
                            </LiveProvider>
                            <LiveError />
                        </div>
                        <LiveProvider />
                          <div className="p-2 bg-black w-full">
                            
                            <div className="col space-x-3 w-full flex bg-zinc-950 p-3 left-0">
                                <button
                                    className="text-white font-semibold hover:bg-black p-1 w-100 rounded-lg"
                                    onClick={() => handleTab(0)}
                                >
                                    <i
                                        className="fa-brands mr-2 fa-html5"
                                        style={{ color: "red" }}
                                    ></i>
                                    HTML
                                </button>
                                <button
                                    className="p-1 font-semibold text-white w-100 rounded-lg hover:bg-black"
                                    onClick={() => handleTab(1)}
                                >
                                    <i
                                        className="fa-brands fa-css3 mr-2"
                                        style={{ color: "blue" }}
                                    ></i>
                                    CSS
                                </button>

                                


                                <div className="flex w-2/1 justify-end items-end ">
                     <div className={tab === 0 ? "block": "hidden"}>

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

                                         <div className={tab === 1 ? "block": "hidden"}>

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

                                        
                                        </div>
                            </div>
                            <div className="">
                                <div className={tab === 0 ? "block" : "hidden"}>
                                    
                                    <div className="h-83 overflow-y-auto">
                                        <LiveEditor
                                            language="html"
                                            code={htmlCode}
                                        ></LiveEditor>
                                    </div>
                                    
                                </div>

                                 <div className={tab === 1 ? "block" : "hidden"}>
                                    
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
