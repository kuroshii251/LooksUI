import { LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";

export default function sectionList() {
  return (
    <>
      <Navbar />
      <div className="col flex h-screen">
        <div className="col overflow-y-auto p-4 flex-1 ">
          <h1 className="text-white text-center font-bold p-5 text-4xl">Section</h1>
              <div className="flex space-x-5 justify-center pt-10">
            <a href="/component/" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">All</a>
            <a href="/component/section" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Section</a>
                <a href="/component/button" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Button</a>
            <a href="/component/card" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Card</a>
            <a href="/component/forms" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Forms</a>

          </div>
          <div className="grid grid-cols-3 pt-5 space-x-5 space-y-10">
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
          
            <a href="/component/section/3" className="col bg-zinc-950 h-106  rounded-xl p-3 w-100">
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
            
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
