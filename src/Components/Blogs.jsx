// import React from "react";
// import image1 from "../assets/photo/1.jpg";
// import image2 from "../assets/photo/1{a}.jpg";
// import image3 from "../assets/photo/1{b}.jpg";
// import image4 from "../assets/photo/2.jpg";
// import image5 from "../assets/photo/2{a}.jpg";
// import image6 from "../assets/photo/2{b}.jpg";

// const Blogs = () => {
//   const blogPosts = [
//     {
//       id: 1,
//       title: "QUADRANT SCALE",
//       description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
//       image: image1,
//       date: "UEC 1001",
//     },
//     {
//       id: 2,
//       title: "GSM TESTER - DIGITAL BASKET TYPE",
//       description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
//       image: image2,
//       date: "UEC 1002 A",
//     },
//     {
//       id: 3,
//       title: "GRAMMAGE TESTER - DIGITAL",
//       description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
//       image: image3,
//       date: "UEC 1002 B",
//     },
//     {
//       id: 4,
//       title: "SAMPLE CUTTER - CIRCULAR FOR GSM.",
//       description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
//       image: image4,
//       date: "UEC 1003 A",
//     },
//     {
//       id: 5,
//       title: "SAMPLE CUTTER - CIRCULAR FOR FCT",
//       description: "PHYSICAL PROPERTY TESTING EQUIPMENT.",
//       image: image5,
//       date: "UEC 1003 B",
//     },
//     {
//       id: 6,
//       title:
//         "SAMPLE STRIP CUTTER FOR TENSILE & FOLDING (K.M.) TESTS (GUILLOTINE TYPE)",
//       description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
//       image: image6,
//       date: "UEC -1006 AI",
//     },
//   ];

//   return (
//     <section className="py-10 px-4">
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold">Products</h2>
//         <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
//       </div>
//       <div className="flex flex-wrap justify-center gap-6">
//         {blogPosts.map((post) => (
//           <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
//             <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
//               <img
//                 src={post.image}
//                 alt={post.title}
//                 className="w-full h-40 object-contain"
//               />
//               <div className="bg-white text-black text-sm p-1 opacity-75">
//                 {post.date}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-bold mb-2">{post.title}</h3>
//                 <p className="text-gray-600">{post.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Blogs;

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
      console.log(result);
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
  console.log(equipmentData.slice(0, 6), "   xcvdc");
  return (
    <section className="py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {equipmentData.slice(0, 6).map((item, id) => (
          <Link
            to={{
              pathname: "/equipment-category",
            }}
            state={{ product: item }}
            key={id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="bg-white rounded-md shadow-md overflow-hidden h-full border hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={item.images[0]}
                alt={item.productName}
                className="w-full h-40 object-contain"
              />
              <div className="bg-white text-black text-sm p-1 pl-5 opacity-75">
                {item.productCode}
              </div>
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
