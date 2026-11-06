import { LivePreview, LiveProvider } from "react-live";
import Navbar from "../../../components/navbar/navbar";
import Footer from "../../../components/footer/footer";

export default function FormList() {
  return (
    <>
      <Navbar />
      <div className="col flex h-screen">
        <div className="col overflow-y-auto p-4 flex-1 ">
          <h1 className="text-white text-center font-bold p-5 text-4xl">Form</h1>
              <div className="flex space-x-5 justify-center pt-10">
            <a href="/component/" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">All</a>
            <a href="/component/section" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Section</a>
                <a href="/component/button" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Button</a>
            <a href="/component/card" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Card</a>
            <a href="/component/forms" className="bg-zinc-800 text-white w-30 rounded-xl text-center font-semibold p-3">Forms</a>

          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 pt-5 space-x-5 space-y-10">

            <a href="/component/forms/1" className="col bg-zinc-950  rounded-xl p-3 w-100">
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
          
            <a href="/component/forms/2" className="col bg-zinc-950  h-106 rounded-xl p-3 w-100">
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
        <form action=" https://formspree.io/f/mvkkaean" method="POST" className="formss">
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
