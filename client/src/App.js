import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import data from "./data/dataSlider";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Login from "./components/Auth/Login";
import { useContext } from "react";
import { AppContext } from "./assets/context/AppContect";
function App() {
   const { isActive } = useContext(AppContext);
   // console.log(isActive);
   return (
      <div className="bg-[#dee2e6] min-h-screen px-[8%] pt-32  ">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/product" element={<Product />} />
            {/* <Route path="/login" element={<Login  />} /> */}
         </Routes>
         <Footer />
         {isActive ? <Login /> : ""}
      </div>
   );
}

export default App;
