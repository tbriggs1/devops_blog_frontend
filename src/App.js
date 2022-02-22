import Homepage from "./components/Homepage/Homepage.js";
import '../src/styles/style.css';
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Blogs from './components/Blog/Blogs'
import Contact from "./components/Contact/Contact.js";
import NavBar from "./components/Navigation/Navigation.js";
import Amplify from "@aws-amplify/core";
import Authentication from './components/Services/Authentication.js';
import SetBlogs from './components/Blog/SetBlogs';
import Login from "./components/Login/Login.js";

Amplify.configure({
  aws_cofnito_region: "eu-west-2",
  aws_user_pools_id: "eu-west-2_svpV24d6C",
  aws_user_pools_web_client_id: "5dpoprig1mj2cel0f6ldffgttu",
});


// Adding comment for testing
function App() {
  return (
    <h1>Hello world</h1>
  );
}

export default App;
