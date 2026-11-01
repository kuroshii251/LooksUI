import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../../components/footer/footer";

export default function Section1() {
    const [tab, setTab] = useState(0);
      const htmlCode = `
       <nav class="navbarr">
        <div class="name-website">
            John Doe
        </div>
        <div class="list-navbars">
<ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#aboutme">About Me</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a> 
                </li>
                <li>
            <div class="hamburger" id="hamburgerss">
            <i class="fa-solid fa-bars menuu"></i>
                        <i class="fa-solid fa-x closes"></i>

            
        </div>
                </li>
            </ul>
           
        </div>
      
      
    </nav>
       <div class="nav-hamburger-lists" id="nav-hambuger">
            <a href="#home">Home</a>
              <a href="#aboutme">About Me</a>

            <a href="#project">Project</a>         

               <a href="#contact">Contact</a>
        </div>
 `

    const cssCode = `
        .navbarr {
            padding: 20px;
            display: flex;
            justify-content: center;
            background-color: green;
            align-items: center;
            width: 550px;
            color: white;
            margin: 0 auto;
            margin-top: px;
            border-radius: 50px;
        }


        .navbarr .name-website {
            font-weight: 600;
            padding: 20;
            font-size: 15px;
            color: white;
            margin-right: 20px;
        }

        .navbarr ul {
            list-style: none;
            display: flex;
            gap: 5px;
        }

        .navbarr  ul li {
            padding: 20;
        }

       .navbarr  ul li a {
            text-decoration: none;
            font-size: 17px;
            padding: 15px;
            border-radius: 10px;
            font-weight: 400;
            font-family: "Poppins", sans-serif;
        }

        .navbarr ul li a:hover {
            background-color: black;
            color: white;
        }

        .nav-hamburger-lists {
            display: none;
        }


        .hamburger {
            display: none;
        }

        @media(max-width:768px) {

            .navbarr  {
                width: 450px;
                margin-top: 5px;
                display: flex;
                margin-bottom: -40px;
            }

            .nav-hamburger-lists {
                display: none;
            }

            .nav-hamburger-lists a {
                text-decoration: none;
                color: white;
                padding: 10px;

                font-family: "Poppins", sans-serif;

            }

            .nav-hamburger-lists a:hover {
                border-radius: 10px;
                background-color: rgb(124, 32, 32);

            }

            .nav-hamburger-lists .active {
                display: block;
                background-color: brown;
                padding: 20px 30px;
                width: 408px;
                height: 30vh;
                justify-content: center;
                justify-items: center;
                align-items: center;
                margin: 0 auto;
            }


            .hamburger {
                display: flex;
                cursor: pointer;
                color: white;
                font-size: 25px;
                padding: 20px;
            }

            .hambuger .menuss {
                display: none;
            }

            .hambuger.active .menuss {
                display: block;
            }

            .navbarr  ul li a {
                display: none;
            }
        }
 `

 const jscode =`
    const hamburgerBar = document.getElementById("hamburgerss");
const navbarList = document.getElementById("nav-hambuger");
hamburgerBar.addEventListener("click", () => {
    navbarList.classList.toggle("active");
    hamburgerBar.classList.toggle("active");
})`;

    const handleTab = (id: any) => {
        setTab(id);
    };

    const handleCopyHtml = () => {
        navigator.clipboard.writeText(htmlCode);
    };

    const handleCopyCss = () => {
        navigator.clipboard.writeText(cssCode);
    };


    const handleCopyjs = () => {
        navigator.clipboard.writeText(jscode);
    }

    return (
        <>
            <Navbar />
            <div className="col flex h-screen">
                <div className="col overflow-y-auto p-4 flex-1 ">

                    <div className="col block space-y-5">
                      

                        <div className="col bg-zinc-800 p-5 h-100 rounded-xl">
                            <LiveProvider
                                code={`
                                <>
  <style>{\`
    ${cssCode} \`}</style>
  
${htmlCode}    

<script>{\` ${jscode} \`}</script>

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

                                

                                 <button
                                    className="p-1 font-semibold text-white w-100 rounded-lg hover:bg-black"
                                    onClick={() => handleTab(2)}
                                >
                                    <i
                                        className="fa-brands fa-js mr-2"
                                        style={{ color: "yellow" }}
                                    ></i>
                                    Javascript
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

                                         <div className={tab === 2 ? "block": "hidden"}>

                                        <button
                                            onClick={handleCopyjs}
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

                                   <div className={tab === 2 ? "block" : "hidden"}>
                                    
                                    <div className="h-83 overflow-y-auto">
                                        <LiveEditor
                                            language="css"
                                            code={jscode}
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
