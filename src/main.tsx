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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/element" element={<ElementsPage />} />
        <Route path="/element/card" element={<CardList/>}/>
        <Route path="/element/card/1" element={<Card1 />} />
        <Route path="/element/card/2" element={<Card2 />} />
        <Route path="/element/card/3" element={<Card3 />} />
        <Route path="/element/section" element={<SectionList/>}/>
        <Route path="/element/section/1" element={<Section1/>}/>
        <Route path="/element/section/2" element={<Section2/>}/>
        <Route path="/element/section/3" element={<Section3/>}/>

      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
