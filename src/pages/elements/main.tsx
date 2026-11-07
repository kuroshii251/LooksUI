import { LivePreview, LiveProvider } from "react-live";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

export default function ElementsPage() {
  return (
    <>
      <Navbar />
      <div className="col flex h-screen">
        <div className="col overflow-y-auto p-4 flex-1 ">
          <h1 className="text-white text-center font-bold p-5 text-4xl">All </h1>
          <div className="flex space-x-5 justify-center pt-10">
            <a href="/component/" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">All</a>
            <a href="/component/section" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Section</a>
                <a href="/component/button" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Button</a>
            <a href="/component/card" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Card</a>
            <a href="/component/forms" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Forms</a>

          </div>
          <div className="grid lg:grid-cols-3 place-items-center mx-auto grid-cols-1 pt-5 space-x-5 space-y-10">
            <a href="/component/section/3" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
      <style>{\`
        .navigation-dynamic {
          background-color: white;
          border-radius:20px;
          justify-content:space-around;
          margin: 0 auto;
          display:flex;
          padding:18px;
        width:300px;
        flex-direction: row;
          bottom:20px;
          right:0;
          left:0;
        }
          

        .navigation-dynamic ul {
        list-style:none;
        flex-direction:row;
        display:flex;
        margin:0;
        padding:0;
        gap:10px;
        }

        .navigation-dynamic ul li {
        text-decoration:none;

        }

      \`}</style>
      
      <div className="navigation-dynamic">
    <div>
        <a href="" className="">
        <i class="fa-solid fa-house-user"></i>
        </a>
        
        </div>

        <div>
        <a href = "" className="">
        <i class="fa-solid fa-comment"></i>
        </a>
        </div>

        <div>
        <a href = "" className="">
        <i class="fa-solid fa-user"></i>
        </a>
        </div>

      </div>

    </>
    `}
              >
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>
            <a href="/component/button/1" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`
    .buttongithub {
      background-color: black;
      color:white;
      font-size: 10px;
      font-weight: 600;
     width:100%;
      border-radius: 10px;
      padding: 15px 40px;
      display:flex;
    }



    .buttongithub:hover {
    border: 3px solid white;
    }
    
  \`}</style>
  
  <button className="buttongithub">
  <svg style={{width:'20px', marginRight:'10px', height:'20px'}} fill="white" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"></path></g></svg>
  <span>Continue With Github</span>
  </button>

</>
`}
              >
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>
            <a
              href="/component/card/1"
              className="col bg-zinc-950  rounded-xl p-3 w-100"
            >
              <LiveProvider
                code={`
                                <>
  <style>{\`
    .cookies1 {
      background-color: white;
      border-radius: 8px;
      padding: 15px 30px;
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

.twobutton .buttonns:hover {
background-color: 

}
    }

    
  \`}</style>
  
<div className="cookies1">

<h1> We Use Cookies</h1>
<p>We process your personal information to measure and improve our sites and services, to assist our campaigns and to provide personalised content. For more information see our <u><b>Privacy Policy</b></u></p>

<div className="twobutton">
<button className="buttonn">
Accept All

</button>

<button className="buttonns">
Reject All
</button>
</div>

</div>

</>
`}
              >
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>
            <a href="/component/card/2" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                language="html"
                code={`
                                <>
  <style>{\`
  .background-code {
      background-color: black;
      border-radius: 5px;
      padding:20px;
      height:300px;
      width:250px;
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
    
  \`}</style>
  
<div className="background-code">
<span className="circle1"/>
<span className="circle2"/>
<span className="circle3"/>
</div> 

</>
`}
              >
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>

               <a href="/component/section/1" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`
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


  \`}</style>
  
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

          <script>{\` 
        const hamburgerBar = document.getElementById("hamburgerss");
        const navbarList = document.getElementById("nav-hambuger");
        hamburgerBar.addEventListener("click", () => {
            navbarList.classList.toggle("active");
            hamburgerBar.classList.toggle("active");
        })

          \`}</script>


</>
`}
              >
                <div className="flex items-center justify-center h-100 scale-65 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>

            <a href="/component/section/2" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`

.footers {
    background-color: black;
    height: auto;
    padding: 10px;
}

.footers .listfooter {
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    justify-items: center;
}

.footers .listfooter h1 {
    color: white;
}

.footers .listfooter p {
    font-family: "Poppins", sans-serif;
    color: white;
    width: 400px;
}


.footers .listfooter .listmenu {
    align-items: center;
}


.footers .listfooter .listmenu p {
    font-size: 20px;
}


.footers .listfooter .listmenu a {
    text-decoration: none;
    font-size: 15px;
    color: white;
}

@media(max-width:768px) {

    .footers .listfooter {
        display: block;
        width: auto;

    }
}

  \`}</style>
     <div class="footers">
        <div class="listfooter">
            <div class="">
                <h1 style={{fontSize: "30px", fontWeight: 600}}>John Doe</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>

            <div class="listmenu">
                <p>Menu</p>
                <div style={{marginTop: "10px"}}>
                    <a href="#">Home</a>

                </div>
                <div style={{marginTop: "20px"}}>
                    <a href="#">About</a>

                </div>
                <div style={{marginTop: "20px"}}>
                    <a href="#">Contact</a>

                </div>
            </div>

        </div>
        <div>
            <hr style={{width: "100%", padding: 0, color: "white"}}/>
            <p style={{color: "white", fontFamily: "sans-serif", padding: "10px", marginLeft: "5px"}}>Copyright
                @2026 by John Doe</p>
        </div>
    </div>
  
  
</>
`}
              >
                <div className="flex items-center justify-center h-100 scale-45 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>

  <a href="/component/button/2" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`
       .buttonNeo a {
            background-color: yellow;
            padding: 20px 40px;
            border: 2px solid black;
            margin-top: 400px;
            text-decoration: none;
            color: black;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
            box-shadow: 5px 5px 0px 0px black;
            border-radius: 10px;
        }

        .buttonNeo a:hover {
            background-color: rgb(218, 218, 1);
            box-shadow: 3px 3px 0px 0px black;

        }


  \`}</style>
  
     <div class="buttonNeo">
        <a href="">Click!</a>
    </div>
</>
`}
              >
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>
          
            <a href="/component/button/3" className="col bg-zinc-950 h-106  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`


    .button3 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .button3 a {
            background-color: black;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 800;
            text-align: center;
            padding: 20px 40px;
            text-decoration: none;
            color: white;

        }

          .button3 a:hover {
            background-color: rgb(30, 30, 30);

        }
  

    
  \`}</style>
     <div class="button3">
        <a href="">LEARN MORE</a>
    </div>
 
</>
`}
              >
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>

               <a href="/component/card/3" className="col bg-zinc-950  rounded-xl p-3 w-100">
                          <LiveProvider
                            code={`
                                            <>
              <style>{\`
              
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
            
                   
                
              \`}</style>
              
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
             
            
            </>
            `}
                          >
                            <div className="flex items-center justify-center h-100 w-full">
                              <LivePreview />
                            </div>
                          </LiveProvider>
                        </a>
            
              <a href="/component/forms/1" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`

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
  
  \`}</style>

   <div className="forms">
       
        <div className="login">
            <h1>Welcome Back </h1>
            <form action="" method="POST">
                <div className="">
                    <p>Email</p>
                    <input type="text" name="email" id="email" placeholder="Email..." />
                </div>
                <div className="">
                    <p>Password</p>
                    <input type="password" name="password" id="password" placeholder="Password..." />


                </div>
                <div className="forgotpassword">
                    <a href="">Forgot Password?</a>
                </div>
                <a href="" className=" buttonn">Login</a>

            </form>

            <div className="">
                <p style={{textAlign: "center", color: "gray", marginTop: "20px", marginBottom:"10px"}}>Or Login With</p>
                <div className="listauth">
                    <div className="container">
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

                    <div className="container">
                        <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 600 600">
                            <path fill="#161614"
                                d="M300 7.4a300 300 0 0 0-94.8 584.7c15 2.8 20.5-6.5 20.5-14.5l-.4-55.8c-83.5 18.1-101.1-35.4-101.1-35.4-13.7-34.7-33.3-43.9-33.3-43.9-27.3-18.6 2-18.2 2-18.2 30.1 2 46 30.9 46 30.9 26.8 45.8 70.2 32.6 87.3 25a64 64 0 0 1 19-40.2c-66.6-7.6-136.6-33.3-136.6-148.3a116 116 0 0 1 30.9-80.5c-3.1-7.5-13.4-38 2.9-79.4 0 0 25.2-8 82.5 30.8a288 288 0 0 1 150.3 0c57.2-38.8 82.4-30.8 82.4-30.8 16.3 41.3 6 71.9 3 79.4a116 116 0 0 1 30.8 80.5c0 115.3-70.2 140.6-137 148 10.8 9.4 20.4 27.6 20.4 55.6 0 40.2-.4 72.5-.4 82.3 0 8 5.4 17.4 20.6 14.4A300 300 0 0 0 300 7.4M112.4 434.8c-.7 1.5-3 1.9-5.2.9s-3.4-3-2.7-4.5c.7-1.6 3-2 5.2-1s3.4 3 2.7 4.6m14.7 13.1c-1.4 1.4-4.2.7-6.1-1.4-2-2-2.3-4.8-.9-6.2 1.5-1.3 4.2-.7 6.2 1.4s2.3 4.9.8 6.2m10.1 16.9c-1.8 1.3-4.8 0-6.7-2.6-1.8-2.7-1.8-5.9 0-7.2 2-1.2 4.9 0 6.8 2.6 1.8 2.7 1.8 5.9 0 7.2m17.2 19.5c-1.7 1.8-5.2 1.3-7.7-1.2-2.7-2.4-3.4-5.8-1.8-7.6 1.7-1.8 5.2-1.3 7.8 1.1s3.4 5.9 1.7 7.7m22 6.6c-.6 2.3-4 3.4-7.4 2.4s-5.6-3.8-5-6.2c.8-2.3 4.2-3.4 7.6-2.4s5.6 3.8 4.9 6.2m25.3 2.8c0 2.4-2.8 4.5-6.4 4.5-3.6.1-6.5-1.9-6.5-4.3 0-2.5 2.8-4.5 6.4-4.6s6.5 2 6.5 4.4m24.7-1c.4 2.4-2 5-5.6 5.6s-6.7-.9-7.1-3.3c-.5-2.4 2-5 5.5-5.6 3.6-.6 6.8.9 7.2 3.3" />
                        </svg>
                    </div>
                    <div className="container">
                        <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 666.667 666.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 700h700V0H0Z" />
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.33333 0 0 -1.33333 -133.333 800)">
                                <path
                                    d="M0 0c0 138.071-111.929 250-250 250S-500 138.071-500 0c0-117.245 80.715-215.622 189.606-242.638v166.242h-51.552V0h51.552v32.919c0 85.092 38.508 124.532 122.048 124.532 15.838 0 43.167-3.105 54.347-6.211V81.986c-5.901.621-16.149.932-28.882.932-40.993 0-56.832-15.528-56.832-55.9V0h81.659l-14.028-76.396h-67.631v-171.773C-95.927-233.218 0-127.818 0 0"
                                    fill="#0866ff" fillRule="nonzero" stroke="none" 
                                    transform="translate(600 350)" />
                                <path
                                    d="m0 0 14.029 76.396H-67.63v27.019c0 40.372 15.838 55.899 56.831 55.899 12.733 0 22.981-.31 28.882-.931v69.253c-11.18 3.106-38.509 6.212-54.347 6.212-83.539 0-122.048-39.441-122.048-124.533V76.396h-51.552V0h51.552v-166.242a250.559 250.559 0 0 1 60.394-7.362c10.254 0 20.358.632 30.288 1.831V0Z"
                                    fill="#fff" fillRule="nonzero" stroke="none"
                                    transform="translate(447.918 273.604)" />
                            </g>
                        </svg>

                    </div>
                </div>
            </div>
        </div>

    </div>

</>
`}
          >
                <div className="flex items-center justify-center h-100 scale-60 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>

            <a href="/component/forms/2" className="col bg-zinc-950  rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`

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

 

  \`}</style>

       <div className="newsletter">
        <div className="">
            <h1>Subscribe a newsletter</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nihil laudantium mollitia hic.
                Esse nostrum magnam rem architecto facere voluptate.</p>
            <form action="">
                <div className="content">
                    <div className="">
                        <input type="text" placeholder="Name..."/>
                    </div>
                    <div className="">
                        <input type="text" placeholder="Address..."/>
                    </div>
                    <div className="">
                        <a href="" className="">Submit</a>
                    </div>
                </div>

            </form>
        </div>
    </div>
   
</>
`}
              >
                <div className="flex items-center justify-center scale-45">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>
          
            <a href="/component/form/3" className="col bg-zinc-950  h-106 rounded-xl p-3 w-100">
              <LiveProvider
                code={`
                                <>
  <style>{\`
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

  \`}</style>
  
 <div className="contact">
        <h1>CONTACT</h1>
        <p style={{color: "#000000", marginTop: 0}}>
        If you have any questions, contact me by fill this form
        </p>
        <form action="" method="POST" className="formss">
            <div className="">
                <h2>Email</h2>
                <input type="text" name="email" style={{marginBottom: "20px"}} placeholder="Email..."/>
            </div>

            <div>
                <h2>Message</h2>
                <textarea name="message" id="" placeholder="Message..."></textarea>
            </div>
            <button type="submit" className="buttons">Submit</button>
        </form>
    </div>
 

</>
`}
              >
                <div className="flex items-center justify-center scale-60 h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
            </a>
            
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
