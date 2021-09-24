import Discount from "./components/discount/Discount";
import Home from "./components/home/Home";
import Signup from "./components/singup/Signup";
import Social from "./components/social/Social";
import Footer from "./components/footer/Footer";
import Message from "./components/message/Message";
import {useState} from "react"

function App() {
  const [messageOpen, setMessageOpen] = useState(false)
  return (
    <>
      <Message messageOpen = {messageOpen} setMessageOpen = {setMessageOpen}/>
      <div className="app">
        <div className="section">
        <Home/>
        <Discount/>
        <Social/>
        <Signup/>
        <Footer/>
        </div>
      </div>
      
    </>
  );
}

export default App;
