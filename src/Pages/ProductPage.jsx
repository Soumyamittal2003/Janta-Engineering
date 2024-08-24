import { Spinner } from "@material-tailwind/react";
import CautionBox from "../Components/CautionBox";
import Footer from "../Components/Footer";
import { Navbarmenu } from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { useEffect, useState } from "react";

const ProductPage = () => {

  const [equipmentData, setEquipmentData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const getEquipment = async () => {
    try {
      setIsLoading(true)
        const response = await fetch('https://janta-engineering-server.onrender.com/api/v1/equipment/equipment');
        const result = await response.json();
        console.log(result)
        if (result.success) {
          setIsLoading(false)
            setEquipmentData(result.equipment);
        } else {
          setIsLoading(false)
            console.error('Failed to fetch equipment data:', result.message);
        }
    } catch (error) {
      setIsLoading(false)
        console.error('Error fetching equipment data:', error);
    }
};

useEffect(() => {
  getEquipment();
}, []);

  return (
    <div>
      <Navbarmenu />
      <div className="p-4 md:p-8 flex flex-col h-screen">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-3">
          Engineering Products
        </h2>
        <hr className="border-b-2 border-blue-500 w-20 mx-auto mt-2 mb-6" />
        <CautionBox />
        <div className="flex flex-wrap gap-4 justify-center">
          {isLoading?<Spinner/>:equipmentData.map((product, index) => (
            <div key={index} className="w-full md:w-5/12 lg:w-1/4 p-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
