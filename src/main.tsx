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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/element" element={<ElementsPage />} />
        <Route path="/element/card/1" element={<Card1 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
