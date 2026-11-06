import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../../components/footer/footer";

export default function Form3() {
    const [tab, setTab] = useState(0);
      const htmlCode = `
       <div class="contact">
        <h1 class="sora">CONTACT</h1>
        <p style="color: #000000; margin-top: 0;">If you have any questions, contact me by fill this form
        </p>
        <form action=" https://formspree.io/f/mvkkaean" method="POST" class="formss">
            <div class="">
                <h2>Email</h2>
                <input type="text" name="email" style="margin-bottom: 20px;" placeholder="Email...">
            </div>

            <div class="">
                <h2>Message</h2>
                <textarea name="message" id="" placeholder="Message..."></textarea>
            </div>
            <button type="submit" class="buttons">Submit</button>
        </form>
    </div>
    `

   const cssCode = `
        .contact {
            font-family: Arial, Helvetica, sans-serif;
            padding: 30px;
            display: flex;
            flex-direction: column;
            margin: 0 auto;
            background-color: white;
            align-items: center;
        }

        .contact h1 {
            font-size: 50px;
            text-align: center;
            font-weight: 800;
            margin-top: 100px;
            color: black;
        }


        .contact h2 {
            font-size: 20px;
        }

        .contact p {
            font-family: "Poppins", sans-serif;
            text-align: center;
            justify-content: center;
        }

        .contact .formss {
            justify-content: center;
            margin-top:70px;
            justify-items: center;

        }

        .contact .formss input {
            border: white;
            background-color: rgb(239, 239, 239);
            padding: 15px;
            width: 500px;
            border-radius: 5px;
        }

        .contact .formss textarea {
            width: 500px;
            height: 100px;
            border: 1;
            border: white;
            background-color: rgb(239, 239, 239);
            resize: none;
            padding: 15px;
        }

        .contact .formss .buttons {
            background-color: blue;
            border-radius: 5px;
            color: white;
            padding: 15px 240px;
            margin-top: 20px;
            text-align: center;
            font-weight: 600;
            font-family: "Poppins", sans-serif;
            border: 1;
            border-color: black;
            text-decoration: none;
            border-radius: 5px;
        }

        .contact .formss .buttons:hover {
            background-color: rgb(0, 0, 146);
        }

        @media(max-width:768px) {

            .contact .formss input {
                width: 400px;

            }

            .contact .formss textarea {
                width: 400px;
            }
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
