import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../../components/footer/footer";

export default function Section1() {
    const [tab, setTab] = useState(0);
       const htmlCode = `          
  
      <nav className="navbar">
        <div className="logo">
            <h1>John Doe</h1>
        </div>
        <div>
            <ul id="navbarss">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact </a>
                </li>
                <li>
                    <div className="hamburgers" id="hamburgerMenu">
                        <svg width="100px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 6.5H19V8H5V6.5Z" fill="#fff"/>
<path d="M5 16.5H19V18H5V16.5Z" fill="#fff"/>
<path d="M5 11.5H19V13H5V11.5Z" fill="#fff"/>
</svg>
         </div>
                </li>

            </ul>
        </div>
    </nav>

    <div className="hamburgerMenuList" id="hamburger-nav-list">
        <div class="" style={{marginBottom: "20p", marginTop: "20px"}}>
            <a href="#">Home</a>

        </div>
        <div class="" style={{marginBottom: "20p", marginTop: "20px"}}>
            <a href="#">About</a>

        </div>

        <div class="" style={{marginBottom: "20p", marginTop: "20px"}}>
            <a href="#">Contact</a>

        </div>
    </div>
 `

       const cssCode = `

    .navbar {
    padding: 3px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    width: 550px;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 20px;
}



.navbar .logo {
        font-weight: 600;
        color: white;
        padding: 20px;
        padding-left: 20px;
        font-size: 15px;
}

.navbar .logo h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}

ul {
    list-style: none;
    display: flex;
    gap: 5px;
}

ul li {
    padding: 20px;
}

ul li a {
    text-decoration: none;
    color: white;
    font-size: 17px;
    padding: 15px;
    border-radius: 10px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
}

ul li a:hover {
    background-color: rgb(43, 43, 43);
}


.hamburgerMenuList {
    display: none;
}


.hamburgers {
    display: none;
}


@media(max-width:768px) {

    .navbar {
        width: 450px;
        margin-top: 5px;
        display: flex;
        margin-bottom: -40px;
    }

    .hamburgerMenuList {
        display: none;
    }

    .hamburgerMenuList a {
        text-decoration: none;
        color: white;
        padding: 10px;

        font-family: "Poppins", sans-serif;

    }

    .hamburgerMenuList a:hover {
        border-radius: 10px;
        background-color: rgb(40, 40, 40);

    }

    .hamburgerMenuList.active {
        display: block;
        background-color: black;
        padding: 20px 30px;
        width: 408px;
        height: 30vh;
        justify-content: center;
        justify-items: center;
        align-items: center;
        margin: 0 auto;
    }


    .hamburgers {
        display: flex;
        cursor: pointer;
        color: white;
        font-size: 25px;
        padding: 20px;
    }

    .hambugrers .menuss {
        display: none;
    }

    .hamburgers.active .menuss {
        display: block;
    }


    .navbar ul li a {
        display: none;
    }
}
        
       
       `

 const jscode =`
      const hamburgerBar = document.getElementById("hamburgerMenu");
const navv = document.getElementById("hamburger-nav-list");

hamburgerBar.addEventListener("click", () => {
    navv.classList.toggle("active");
    hamburgerBar.classList.toggle("active");
})
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


    const handleCopyjs = () => {
        navigator.clipboard.writeText(jscode);
        alert("Copied");
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
