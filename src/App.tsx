import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Aboutus from "./Components/AboutUs/Aboutus";
import Homepage from "./Components/HomePage/Homepage";
import Offers from "./Components/offer/Offers";
import Consultants from "./Components/Consultant/Consultants";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Homepage" element={<Homepage/>}/>   
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Offers"  element={<Offers/>}/>   
      <Route path="/Consultants"  element={<Consultants/>}/>
    </Routes>
    <Footer />
    </>
  );
}
export default App;