import { LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";

export default function CardList() {
  return (
    <>
      <Navbar />
      <div className="col flex h-screen">
        <div className="col overflow-y-auto p-4 flex-1 ">
          <h1 className="text-white text-center font-bold p-5 text-4xl">Card</h1>
             <div className="flex space-x-5 justify-center pt-10">
            <a href="/component/" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">All</a>
            <a href="/component/section" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Section</a>
                <a href="/component/button" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Button</a>
            <a href="/component/card" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Card</a>
            <a href="/component/forms" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Forms</a>

          </div>
          <div className="grid grid-cols-3 pt-5 space-x-5 space-y-10">
              <a href="/component/card/1" className="col bg-zinc-950  rounded-xl p-3 w-100">
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
    }

.twobutton .buttonns:hover {
background-color: white;


    }



  \`}</style>
  
        <div class="cookies1">

<h1> We Use Cookies</h1>
<p>We process your personal information to measure and improve our sites and services, to assist our campaigns and to provide personalised content. For more information see our <u><b>Privacy Policy</b></u></p>

<div class="twobutton">
<button classe="buttonn">
Accept All

</button>

<button class="buttonns">
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
                code={`
                                <>
  <style>{\`

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



  \`}</style>
  
   <div class="bg-container">
    <div class="background-code">
 <span class="circle1"/>
 <span class="circle2"/>
 <span class="circle3"/>
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
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
