import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../../components/footer/footer";

export default function Card2() {
    const [tab, setTab] = useState(0);
    const htmlCode = `

   <div class="bg-container">

    <div class="background-code">
 <span class="circle1"/>
  <span class="circle2"/>
 <span class="circle3"/>


 </div> 
   </div>  

 
     
 `;


 
 const cssCode =  `

 .bg-container {
 width:400px;
 }
 
 .background-code {
       background-color: black;
       border-radius: 5px;
       padding:20px;
       height:300px;
       width:250px;
       margin: 0 auto;
       display:flex;
       gap: 10px;
     }
 
     .circle1 {
    width:10px;
    background-color: red;
     height:10px;
     border-radius: 50%;
     }
 
     .circle2 {
     width:10px;
     height:10px;
     border-radius: 50%;
     background-color:yellow;
     }
 
     .circle3 {
    background-color:green;
 
     width:10px;
     height:10px;
 
     border-radius: 50%;
     
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
                                            onClick={handleCopyCss}
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
                                            onClick={handleCopyHtml}
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
