import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog/blog.tsx";
import Blog1 from "./pages/blog/blog1.tsx";
import Blog2 from "./pages/blog/blog2.tsx";
import ElementsPage from "./pages/elements/main.tsx";
import Card1 from "./pages/elements/card/card1.tsx";
import Section1 from "./pages/elements/section/section1.tsx";
import Section2 from "./pages/elements/section/section2.tsx";
import Section3 from "./pages/elements/section/section2.tsx";
import CardList from "./pages/elements/card/main.tsx";
import Card2 from "./pages/elements/card/card2.tsx";
import Card3 from "./pages/elements/card/card3.tsx";
import SectionList from "./pages/elements/section/main.tsx";

import Button3 from "./pages/elements/button/button3.tsx";
import Button2 from "./pages/elements/button/button2.tsx";
import Button1 from "./pages/elements/button/button1.tsx";
import ButtonList from "./pages/elements/button/main.tsx";
import FormList from "./pages/forms/main.tsx";
import Form1 from "./pages/forms/form1.tsx";
import Form2 from "./pages/forms/form2.tsx";
import Form3 from "./pages/forms/form3.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/component" element={<ElementsPage />} />
        <Route path="/component/card" element={<CardList/>}/>
        <Route path="/component/card/1" element={<Card1 />} />
        <Route path="/component/card/2" element={<Card2 />} />
        <Route path="/component/card/3" element={<Card3 />} />
        <Route path="/component/section" element={<SectionList/>}/>
        <Route path="/component/section/1" element={<Section1/>}/>
        <Route path="/component/section/2" element={<Section2/>}/>
        <Route path="/component/section/3" element={<Section3/>}/>
        <Route path="/component/forms" element={<FormList/>}/>
        <Route path="/component/forms/1" element={<Form1/>}/>
        <Route path="/component/forms/2" element={<Form2/>}/>
        <Route path="/component/forms/3" element={<Form3/>}/>
        <Route path="/component/button" element={<ButtonList/>}/>
        <Route path="/component/button/1" element={<Button1/>}/>
        <Route path="/component/button/2" element={<Button2/>}/>
        <Route path="/component/button/3" element={<Button3/>}/>




      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
