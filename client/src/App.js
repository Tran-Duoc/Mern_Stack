import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import data from "./data/dataSlider";
import Footer from "./components/Footer/Footer";
function App() {
   return (
      <div className="bg-[#dee2e6] min-h-screen px-[8%] pt-36">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home data={data} />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
