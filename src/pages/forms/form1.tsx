import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import Footer from "../../components/footer/footer";

export default function Form1() {
    const [tab, setTab] = useState(0);
  const htmlCode = `
      <div class="forms">
        <div class="content">
            <img src="https://i.pinimg.com/1200x/61/87/a2/6187a286f34b70dc8d07e8115cfd2544.jpg" alt="">

        </div>
        <div class="login">
            <h1>Welcome Back </h1>
            <form action="" method="POST">
                <div class="">
                    <p>Email</p>
                    <input type="text" name="email" id="email" placeholder="Email..." />
                </div>
                <div class="">
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="Password..." />


                </div>
                <div class="forgotpassword">
                    <a href="">Forgot Password?</a>
                </div>
                <a href="" class=" buttonn">Login</a>

            </form>

            <div class="">
                <p style=" text-align: center; color: gray; margin-top: 20px; margin-bottom:10px">Or Login With</p>
                <div class="listauth">
                    <div class="container">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600">
                            <path fill="#4285F4"
                                d="M594 306.7c0-24.7-2-42.7-6.3-61.4H306v111.4h165.3A147 147 0 0 1 410 454l-.6 3.7 89.1 69 6.2.6C561.3 475 594 398 594 306.7" />
                            <path fill="#34A853"
                                d="M306 600c81 0 149-26.7 198.7-72.7L410 454c-25.3 17.7-59.3 30-104 30a181 181 0 0 1-170.7-124.7l-3.5.3-92.6 71.7-1.2 3.4A300 300 0 0 0 306 600" />
                            <path fill="#FBBC05"
                                d="M135.3 359.3a185 185 0 0 1-.3-118.6l-.2-4-93.7-72.8-3.1 1.4a300 300 0 0 0 0 269.4z" />
                            <path fill="#EB4335"
                                d="M306 116c56.3 0 94.3 24.3 116 44.7L506.7 78C454.7 29.7 387 0 306 0A300 300 0 0 0 38 165.3l97 75.4A181 181 0 0 1 306 116" />
                        </svg>
                    </div>

                    <div class="container">
                        <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600">
                            <path fill="#161614"
                                d="M300 7.4a300 300 0 0 0-94.8 584.7c15 2.8 20.5-6.5 20.5-14.5l-.4-55.8c-83.5 18.1-101.1-35.4-101.1-35.4-13.7-34.7-33.3-43.9-33.3-43.9-27.3-18.6 2-18.2 2-18.2 30.1 2 46 30.9 46 30.9 26.8 45.8 70.2 32.6 87.3 25a64 64 0 0 1 19-40.2c-66.6-7.6-136.6-33.3-136.6-148.3a116 116 0 0 1 30.9-80.5c-3.1-7.5-13.4-38 2.9-79.4 0 0 25.2-8 82.5 30.8a288 288 0 0 1 150.3 0c57.2-38.8 82.4-30.8 82.4-30.8 16.3 41.3 6 71.9 3 79.4a116 116 0 0 1 30.8 80.5c0 115.3-70.2 140.6-137 148 10.8 9.4 20.4 27.6 20.4 55.6 0 40.2-.4 72.5-.4 82.3 0 8 5.4 17.4 20.6 14.4A300 300 0 0 0 300 7.4M112.4 434.8c-.7 1.5-3 1.9-5.2.9s-3.4-3-2.7-4.5c.7-1.6 3-2 5.2-1s3.4 3 2.7 4.6m14.7 13.1c-1.4 1.4-4.2.7-6.1-1.4-2-2-2.3-4.8-.9-6.2 1.5-1.3 4.2-.7 6.2 1.4s2.3 4.9.8 6.2m10.1 16.9c-1.8 1.3-4.8 0-6.7-2.6-1.8-2.7-1.8-5.9 0-7.2 2-1.2 4.9 0 6.8 2.6 1.8 2.7 1.8 5.9 0 7.2m17.2 19.5c-1.7 1.8-5.2 1.3-7.7-1.2-2.7-2.4-3.4-5.8-1.8-7.6 1.7-1.8 5.2-1.3 7.8 1.1s3.4 5.9 1.7 7.7m22 6.6c-.6 2.3-4 3.4-7.4 2.4s-5.6-3.8-5-6.2c.8-2.3 4.2-3.4 7.6-2.4s5.6 3.8 4.9 6.2m25.3 2.8c0 2.4-2.8 4.5-6.4 4.5-3.6.1-6.5-1.9-6.5-4.3 0-2.5 2.8-4.5 6.4-4.6s6.5 2 6.5 4.4m24.7-1c.4 2.4-2 5-5.6 5.6s-6.7-.9-7.1-3.3c-.5-2.4 2-5 5.5-5.6 3.6-.6 6.8.9 7.2 3.3" />
                        </svg>
                    </div>
                    <div class="container">
                        <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 666.667 666.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 700h700V0H0Z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)">
                                <path
                                    d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0"
                                    style="fill:#0866ff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                    transform="translate(600 350)" />
                                <path
                                    d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.559 250.559 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z"
                                    style="fill:#fff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                                    transform="translate(447.918 273.604)" />
                            </g>
                        </svg>

                    </div>
                </div>
            </div>
        </div>

    </div>
  `

  const cssCode = `


        .forms {
            justify-content: space-between;
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: white;
            align-items: center;
            height: 100vh;
            font-family: Arial, Helvetica, sans-serif;
        }

        .content {
            height: 100%;
            align-items: center;
            justify-content: center;
            display: flex;

        }

        .content img {
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            height: 100%;

        }

        .login {
            padding: 20px;
            flex-direction: column;
            margin: 0 auto;
            display: flex;
            justify-content: center;

        }

        .login input {
            width: 300px;
            padding: 10px 20px;
            border-radius: 5px;
        }

        .login h1 {
            font-weight: 600;
            margin-bottom: 30px;
            font-size:30px;
            text-align: center;
        }

        .login .buttonn {
            background-color: blue;
            display: inline-block;
            padding: 15px;
            width: 300px;
            margin: 0;
            text-align: center;
            border-radius: 5px;
            color: white;
            text-decoration: none;
            font-weight: 600;
        }

        .login .listauth {
            display: flex;
            justify-content: center;
            gap: 10px;
        }

        .login .listauth .container {
            background-color: rgb(222, 222, 222);
            padding: 10px 30px;
            border-radius: 10px;
            align-items: center;
            display: flex;

        }

        .login .listauth .container svg {
            height: 30px;
        }


        .login .forgotpassword a {
            text-align: end;
            float: right;
            font-size: 12px;
            text-decoration: none;
            color: rgb(71, 71, 71);
            margin-top: 12px;
            margin-bottom: 10px;
        }
  
  `



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
