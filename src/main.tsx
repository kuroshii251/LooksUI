import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Blog from "./pages/blog/blog.tsx";
import Blog1 from "./pages/blog/blog1.tsx";
import Blog2 from "./pages/blog/blog2.tsx";
import Blog3 from "./pages/blog/blog3.tsx";
import Blog4 from "./pages/blog/blog4.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/elements">Elements</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/1" element={<Blog1 />} />
        <Route path="/blog/2" element={<Blog2 />} />
        <Route path="/blog/3" element={<Blog3 />} />
        <Route path="/blog/4" element={<Blog4 />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
