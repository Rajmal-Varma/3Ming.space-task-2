import React from "react";
import StreamPage from "./pages/StreamPage";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <div className="mt-[-5px]">
    <Navbar/>
    </div>
    
    <div className="pt-[90px] ">
   <StreamPage/>
   </div>

   <div>
  <Footer/>
  </div>
    </>
  );
}

export default App;

  