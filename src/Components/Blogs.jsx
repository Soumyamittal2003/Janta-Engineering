
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [equipmentData, setEquipmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEquipment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/equipment/equipment"
      );
      const result = await response.json();
      if (result.success) {
        setIsLoading(false);
        setEquipmentData(result.equipment);
      } else {
        setIsLoading(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, []);

  return (
    <section className="py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {equipmentData.slice(0, 6).map((item, id) => (
          <Link
            to={`/equipment-category/${item._id}`} // Add the unique product ID in the URL
            state={{ product: item }} // Pass the product data via state
            key={id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white rounded-md shadow-md overflow-hidden h-full border hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={item.images[0]}
                alt={item.productName}
                className="w-full h-40 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                <p className="text-gray-600">
                  {item.description.slice(0, 150)}...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
