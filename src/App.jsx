import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import EquipmentCategoryDetailPage from "./Components/Productdetailpage";
import ContactUs from "./Components/Contact";
import mainImage from "./assets/images (4).jpeg";
import image1 from "./assets/images (2).jpeg";
import image2 from "./assets/images (3).jpeg";
import image3 from "./assets/images (1).jpeg";
import SignIn from "./Pages/Loginpage";
import AddAdmin from "./Pages/Addadmin";

const mockCategory = {
  name: "PHYSICAL PROPERTY TESTING EQUIPMENTS",
  description:
    "Paper is a complex product so the final goal is to achieve good quality finished products for printing, converting and other usage. The results depend on factors like physical thickness, surface, roughness and printability etc. that we supply for all your paper testing needs.",
  images: [mainImage, image1, image2, image3],
  details: {
    Weight: "5kg",
    Dimensions: "10x10x10 cm",
    Material: "Steel",
  },
  consumables: ["Consumable Item 1", "Consumable Item 2", "Consumable Item 3"],
};

function App() {
  return (
    <>
      <Router>
        <div>
          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/admin" element={<SignIn />} />
            <Route path="/admin/Addadmin" element={<AddAdmin />} />
            <Route
              path="/equipment-category"
              element={<EquipmentCategoryDetailPage category={mockCategory} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
