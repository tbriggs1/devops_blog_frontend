import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import About from "./components/About";
import Blogs from "./components/blog/Blogs";
import Contact from "./components/Contact";
import { useState } from "react";
import Blog from "./components/blog/Blog";
import CreateBlog from "./components/admin/CreateBlog";
import DeleteBlog from "./components/admin/DeleteBlog";

// Adding comment for testing
function App() {
  const [id, setId] = useState([]);
  const data = id[0]
  const num = id[1]
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blogs" element={
            <Blogs setId={setId} />}
          />
          <Route path="/contact" element={<Contact />}/>
          <Route path={data} element={<Blog num={num} />} />
          <Route path="/admin/ablog" element={<CreateBlog/>} />
          <Route path="/admin/dblog" element={<DeleteBlog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
