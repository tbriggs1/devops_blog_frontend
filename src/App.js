import Homepage from "./components/Homepage/Homepage.js";
import '../src/styles/style.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Blogs from './components/Blog/Blogs'

// Adding comment for testing
function App() {

  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Blog" element={<Blogs />} />
          </Routes>  
     </BrowserRouter>
  );
}

export default App;
