import "./index.css"
import { Header } from "./components/Header.jsx";
import {Navbar} from "./components/Navbar"; 
//import Home from "./components/Home.jsx";
import {Footer} from "./components/Footer.jsx";
//import Cart from "./components/Cart/Cart.jsx";
import Pizza from "./components/Pizza.jsx";
//import Register from "./components/Register.jsx";
//import Login from "./components/Login.jsx";

function App() {
  

  return (
    <>
      <Header/>
      <Navbar/>
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      {/* <Cart/> */}
      <Pizza/>
      <Footer/>
    </>
  )
}

export default App
