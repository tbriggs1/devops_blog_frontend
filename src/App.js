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

// Adding comment for testing
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
