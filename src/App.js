import Homepage from "./components/Homepage/Homepage.js";
import '../src/styles/style.css';
import GetBlogs from "./components/Blog/GetBlogs.js";

function App() {

  return (
    <div className="App">
      <GetBlogs />
      <Homepage />
    </div>
  );
}

export default App;
