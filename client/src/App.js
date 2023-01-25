import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import data from "./data/dataSlider";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Login from "./components/Login/Login";
import { useContext } from "react";
import { AppContext } from "./components/context/AppContext";
import Register from "./components/Register/Register";
import Detail from "./components/DetailProduct/Detail";
import ImageReview from "./components/imageReview/ImageReview";
import Cart from "./components/cart/Cart";
import Admin from "./components/admin/Admin";

function App() {
   const { isActive } = useContext(AppContext);
   const { isActiveRes } = useContext(AppContext);
   return (
      <div className="bg-[#dee2e6] min-h-screen px-[8%] pt-32  ">
         <Navbar />

         <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/product" element={<Product />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/config" element={<Admin />} />
         </Routes>
         <Footer />
         {isActive ? <Login /> : ""}
         {isActiveRes ? <Register /> : ""}
         <ImageReview />
      </div>
   );
}

export default App;
