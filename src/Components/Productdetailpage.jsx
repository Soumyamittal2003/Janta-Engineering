// import React, { useState } from "react";

// const EquipmentCategoryDetailPage = ({ category }) => {
//   const [selectedImage, setSelectedImage] = useState(category.images[0]);
//   const [activeTab, setActiveTab] = useState("description");

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row">
//         {/* Left Side - Image Gallery */}
//         <div className="md:w-1/2 flex flex-col items-center">
//           <div className="relative group">
//             <img
//               src={selectedImage}
//               alt="Main"
//               className="w-full h-auto object-cover"
//             />
//             <div className="absolute inset-0 hidden group-hover:flex justify-center items-center bg-black bg-opacity-30">
//               <img
//                 src={selectedImage}
//                 alt="Zoomed"
//                 className="w-1/2 h-auto object-cover"
//               />
//             </div>
//           </div>
//           <div className="flex mt-4 space-x-2 overflow-x-auto">
//             {category.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Thumbnail ${index}`}
//                 className={`w-20 h-20 object-cover cursor-pointer ${
//                   selectedImage === image ? "border-2 border-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedImage(image)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Product Information */}
//         <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">
//             {category.name}
//           </h1>
//           <div className="border-b border-gray-300">
//             <button
//               className={`py-2 px-4 ${
//                 activeTab === "description" ? "border-b-2 border-blue-500" : ""
//               }`}
//               onClick={() => setActiveTab("description")}
//             >
//               Description
//             </button>
//             <button
//               className={`py-2 px-4 ${
//                 activeTab === "details" ? "border-b-2 border-blue-500" : ""
//               }`}
//               onClick={() => setActiveTab("details")}
//             >
//               Details
//             </button>
//             <button
//               className={`py-2 px-4 ${
//                 activeTab === "consumables" ? "border-b-2 border-blue-500" : ""
//               }`}
//               onClick={() => setActiveTab("consumables")}
//             >
//               Consumables
//             </button>
//           </div>

//           <div className="mt-4">
//             {activeTab === "description" && (
//               <p className="text-gray-700">{category.description}</p>
//             )}
//             {activeTab === "details" && (
//               <table className="w-full text-left">
//                 <tbody>
//                   {Object.entries(category.details).map(([key, value]) => (
//                     <tr key={key}>
//                       <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
//                         {key}
//                       </th>
//                       <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
//                         {value}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}
//             {activeTab === "consumables" && (
//               <ul className="list-disc list-inside text-gray-700">
//                 {category.consumables.map((item, index) => (
//                   <li key={index}>{item}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EquipmentCategoryDetailPage;

import React, { useState } from "react";
import { Navbarmenu } from "./Navbar";
import Footer from "./Footer";

const EquipmentCategoryDetailPage = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState(category.images[0]);
  const [activeTab, setActiveTab] = useState("description");

  return (
    <>
      <Navbarmenu />
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Image Gallery */}
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative w-full h-96 overflow-hidden group">
              <img
                src={selectedImage}
                alt="Main"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-150"
              />
            </div>
            <div className="flex mt-4 space-x-2 overflow-x-auto">
              {category.images.map((image, index) => (
                <div
                  key={index}
                  className={`w-20 h-20 overflow-hidden border cursor-pointer ${
                    selectedImage === image
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {category.name}
            </h1>
            <div className="border-b border-gray-300">
              <button
                className={`py-2 px-4 ${
                  activeTab === "description"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "details" ? "border-b-2 border-blue-500" : ""
                }`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "consumables"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => setActiveTab("consumables")}
              >
                Consumables
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "description" && (
                <p className="text-gray-700">{category.description}</p>
              )}
              {activeTab === "details" && (
                <table className="w-full text-left">
                  <tbody>
                    {Object.entries(category.details).map(([key, value]) => (
                      <tr key={key}>
                        <th className="py-2 px-4 border-b border-gray-200 font-medium text-gray-700">
                          {key}
                        </th>
                        <td className="py-2 px-4 border-b border-gray-200 text-gray-600">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {activeTab === "consumables" && (
                <ul className="list-disc list-inside text-gray-700">
                  {category.consumables.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EquipmentCategoryDetailPage;
