import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import data from "./data/dataSlider";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Login from "./components/Login/Login";
import { useContext } from "react";
import { AppContext } from "./components/context/AppContect";
import Register from "./components/Register/Register";
function App() {
   const { isActive } = useContext(AppContext);
   const { isActiveRes } = useContext(AppContext);

   return (
      <div className="bg-[#dee2e6] min-h-screen px-[8%] pt-32  ">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/product" element={<Product />} />
         </Routes>
         <Footer />
         {isActive ? <Login /> : ""}
         {isActiveRes ? <Register /> : ""}
      </div>
   );
}

export default App;
