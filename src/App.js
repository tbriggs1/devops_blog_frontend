import Homepage from "./components/Homepage/Homepage.js";
import '../src/styles/style.css';
import Blogs from "./components/Blog/Blogs.js";

// Adding comment for testing
function App() {

  return (
    <div className="App">
      <Blogs/>
      <Homepage />
    </div>
  );
}

export default App;
