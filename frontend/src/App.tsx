import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/blog/:id" element={<Blogs></Blogs>}></Route>
          <Route path="/blogs" element={<Blog></Blog>}></Route>
          <Route path="/publish" element={<Publish></Publish>}></Route>
          <Route path="/" element={<Signup></Signup>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
