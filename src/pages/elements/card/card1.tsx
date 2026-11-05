import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../../components/footer/footer";

export default function Card1() {
    const [tab, setTab] = useState(0);
    const htmlCode = `
        <div class="cookies1">

<h1> We Use Cookies</h1>
<p>We process your personal information to measure and improve our sites and services, to assist our campaigns and to provide personalised content. For more information see our <u><b>Privacy Policy</b></u></p>

<div class="twobutton">
<button class="buttonn">
Accept All

</button>

<button class="buttonns">
Reject All
</button>
</div>

</div>
 `;

    const cssCode = `

    .cookies1 {
      background-color: white;
      border-radius: 8px;
      padding: 15px 30px;
      width:auto;
    }


    .cookies1  h1 {
    color: black;
    }

    .cookies1 p {
    color:black;
    }
  

.twobutton {
display: flex;
gap: 20px;
margin-top: 20px;
}

.twobutton .buttonn {
background-color: black;
padding:10px;
width: 100px;
border-radius: 10px;
color:white;
font-weight:600;



}



.twobutton .buttonns{
border: 2px solid black;
width: 100px;
padding: 5px;
border-radius: 10px;
font-weight:600;
    }

.twobutton .buttonns:hover {
background-color: white;


    }

 `;

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
                            <LiveProvider scope={{cssCode, htmlCode}}
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
