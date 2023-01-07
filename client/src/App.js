import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import data from "./data/dataSlider";
function App() {
   return (
      <div className="bg-[#dee2e6] min-h-screen px-36 pt-36">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home data={data} />} />
         </Routes>
      </div>
   );
}

export default App;
