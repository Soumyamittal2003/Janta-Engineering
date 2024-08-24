import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import ProductPage from "./Pages/ProductPage";
import EquipmentCategoryDetailPage from "./Components/Productdetailpage";

import Contact from "./Pages/Contact";
import ServiceAndCalibration from "./ServiceAndCalibration/ServiceAndCalibration";
import NotFound from "./Pages/NotFound";
import AdminLayout from "./Pages/AdminLayout";
import AddAdmin from "./Pages/Addadmin";
import AddProductForm from "./Pages/AddProduct";
import WhoAreWe from "./AboutUs/WhoAreWe";
import SignIn from "./Pages/Loginpage";

function App() {
  return (
    <>
      <Router>
        <div>
          {/* Route Definitions */}
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact-us" element={<Contact />} />

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<SignIn />} />
              <Route path="addEquipment" element={<AddProductForm />} />
              <Route path="addEquipment/addAadmin" element={<AddAdmin />} />
            </Route>

            <Route path="/WhoAreWe" element={<WhoAreWe />} />

            <Route
              path="/equipment-category"
              element={<EquipmentCategoryDetailPage />}
            />
            <Route
              path="/ServiceAndCalibration"
              element={<ServiceAndCalibration />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
