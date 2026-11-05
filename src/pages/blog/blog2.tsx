import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import footerPhoto from "../../assets/footerphoto.png";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";
export default function Blog2() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center py-20 p-10 items-center">
                <div className="col mb-7">
               
                    <img src={footerPhoto} className="w-full " />
                    <h1 className="text-white font-bold py-5 text-3xl">
                        How to make simple footer
                    </h1>
                    <p className="text-white text-lg w-120">
                        Here's the instructions to make simple footer
                    </p>
                    <div className="w-full">
                 <h1 className="text-white mb-5 mt-10">index.html</h1>

                        <div className="lg:w-full w-120" >
                            <LiveProvider
                                code={` <!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.css" 
    integrity="sha512-x9WwyMYBnlXMNQ6kQ/Lyzu1NqIhLQKL5Oq6xByfXuRj7s9CskyCbLv
    /1IjqzJmXwFXWr0ov6jBV7Qbc0hh9nHg==" 
    crossorigin="anonymous" referrerpolicy="no-referrer">
  </head>
  <body>
     <div className="footer">
      <div className="listItem">
        <div className="">
<h1>John Doe</h1>
<p>Lorem ipsum dolor sit amet lorem ipsum</p>
 <div className="icon">
            <i className="fa-brands fa-github"></i>
<i className="fa-brands fa-facebook"></i>          
<i className="fa-brands fa-instagram"></i>

          </div>
        </div>
        
         <div className="">
          <h1>Menu</h1>
          <div className="">
           <a href="#home">Home</a>

          </div>
          <div>
          <a href="#about">About</a>

          </div>
          <div>
          <a href="#project">Project</a>

          </div>
          <div className="">
                   <a href="#contact">Contact</a>

          </div>
         
        </div>
           <div className="">
          <h1>Resources</h1>
          <div className="">
           <a href="#home">Code</a>

          </div>
          <div>
          <a href="#tools">Tools</a>

          </div>
          <div>
          <a href="#blog">Blog</a>
    </div>
        </div>
        
      </div>
      <hr />
      <div>
        <p>Copyright 2026 By John Doe</p>
      </div>
     </div>
  </body>
</html>`}
                            >
                                <LiveEditor />
                            </LiveProvider>
                        </div>
                    </div>
                    <div className="py-10">
                        <h1 className="text-white mb-5">style.css</h1>
                        <div className="lg:w-full w-120" >
                                <LiveProvider
                            code={`.footer {
                        background-color: black;
                        padding: 40px 30px;
                        }

                        .footer .listItem {
                        display: grid;
                        grid-template-columns: auto auto auto;
                        margin-bottom: 100px;
                        }

                        .footer .listItem h1 {
                        color: white;
                        }

                        .footer .listItem a {
                        color: white;
                        text-decoration: none;
                        }


                        .footer .listItem .icon {
                        color: white;
                        display: flex;
                        gap: 10px;
                        margin-top: 20px;
                        font-size: 20px
                        }


                        p {
                        color: white;
                        }

                        @media (min-width:630px){

                        .footer .listItem {
                        display: block;
                        margin-bottom: 120px;
                        }

                        }`}
                        >
                            <LiveEditor />
                        </LiveProvider>
                            </div>
                    
                    </div>

<h1 className="text-white text-3xl font-bold mb-10">
                            Results
                        </h1>
                    <div className="col py-10 bg-white p-3">
                        
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
                <div className="flex items-center justify-center h-100 w-full">
                  <LivePreview />
                </div>
              </LiveProvider>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
