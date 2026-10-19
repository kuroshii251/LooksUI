import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import oldpc from "../../assets/pc.png";
import { LiveEditor, LivePreview, LiveProvider } from "react-live";
export default function Blog2() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center py-20 items-center">
                <div className="col mb-7">
                    <div className="col flex justify-between pb-5">
                        <a
                            href="/blog"
                            className="flex justify-center items-center space-x-3"
                        >
                            <i className="fa-solid fa-arrow-left-long text-white"></i>
                            <h1 className="text-white">Back</h1>
                        </a>
                        <div className="flex justify-end items-end">
                            <h1 className="text-white">Aug 18 2026</h1>
                        </div>
                    </div>
                    <img src={oldpc} className="w-full" />
                    <h1 className="text-white font-bold py-10 text-3xl">
                        How to make simple footer
                    </h1>
                    <p className="text-white text-lg py-1 w-120">
                        Here's the instructions to make simple footer
                    </p>
                    <div className="w-full">
                        <div className="w-200">
                            <LiveProvider
                                code={` <!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.css" integrity="sha512-x9WwyMYBnlXMNQ6kQ/Lyzu1NqIhLQKL5Oq6xByfXuRj7s9CskyCbLv/1IjqzJmXwFXWr0ov6jBV7Qbc0hh9nHg==" crossorigin="anonymous" referrerpolicy="no-referrer">
  </head>
  <body>
     <div class="footer">
      <div class="listItem">
        <div class="">
<h1>John Doe</h1>
<p>Lorem ipsum dolor sit amet lorem ipsum</p>
 <div class="icon">
            <i class="fa-brands fa-github"></i>
<i class="fa-brands fa-facebook"></i>          
<i class="fa-brands fa-instagram"></i>

          </div>
        </div>
        
         <div class="">
          <h1>Menu</h1>
          <div class="">
           <a href="#home">Home</a>

          </div>
          <div>
          <a href="#about">About</a>

          </div>
          <div>
          <a href="#project">Project</a>

          </div>
          <div class="">
                   <a href="#contact">Contact</a>

          </div>
         
        </div>
           <div class="">
          <h1>Resources</h1>
          <div class="">
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

                    <div className="col py-10">
                        <h1 className="text-white text-3xl font-bold">
                            Results
                        </h1>
                        <LiveProvider
                            code={`
                        <>
           <style>{\` 
           .footer {
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

}
            \`}
            </style>
 <div className="footer">
     <div className="listItem">
        <div class="">
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
          <div class="">
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
                        </> `}
                        >
                            <LivePreview></LivePreview>
                        </LiveProvider>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
