// import React from "react";
// import physicalPropertyImage from "../assets/photo/7.jpg";
// import pulpTestingImage from "../assets/photo/2.jpeg";
// import packagingTestingImage from "../assets/photo/3.jpeg";
// import surfaceCoatingImage from "../assets/photo/4.jpeg";
// import environmentalTestingImage from "../assets/photo/5.jpeg";
// import handmadePaperImage from "../assets/photo/6.jpeg";

// const CategoryCards = () => {
//   const categories = [
//     {
//       id: 1,
//       imageUrl: physicalPropertyImage,
//       categoryName: "PHYSICAL PROPERTY TESTING EQUIPMENT",
//     },
//     {
//       id: 2,
//       imageUrl: pulpTestingImage,
//       categoryName: "PULP TESTING EQUIPMENT",
//     },
//     {
//       id: 3,
//       imageUrl: packagingTestingImage,
//       categoryName: "PACKAGING TESTING EQUIPMENT",
//     },
//     {
//       id: 4,
//       imageUrl: surfaceCoatingImage,
//       categoryName: "SURFACE COATING & PRINTABILITY",
//     },
//     {
//       id: 5,
//       imageUrl: environmentalTestingImage,
//       categoryName: "ENVIRONMENTAL TESTING EQUIPMENT",
//     },
//     {
//       id: 6,
//       imageUrl: handmadePaperImage,
//       categoryName: "HANDMADE PAPER MACHINES",
//     },
//   ];
//   return (
//     <>
//       <div>
//         <h1 className="flex items-center justify-center font-bold text-3xl">
//           Categories
//         </h1>
//         <hr className="border-b-2 border-blue-500 w-28 mx-auto mb-8" />
//         <div className="w-full flex flex-wrap justify-center gap-6 p-4">
//           {categories.map((category) => (
//             <div
//               key={category.id}
//               className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white shadow-md rounded-lg overflow-hidden"
//             >
//               <img
//                 className="w-full h-48 object-contain"
//                 src={category.imageUrl}
//                 alt={category.categoryName}
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {category.categoryName}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CategoryCards;

import React from "react";
import physicalPropertyImage from "../assets/photo/7.jpg";
import pulpTestingImage from "../assets/photo/2.jpeg";
import packagingTestingImage from "../assets/photo/3.jpeg";
import surfaceCoatingImage from "../assets/photo/4.jpeg";
import environmentalTestingImage from "../assets/photo/5.jpeg";
import handmadePaperImage from "../assets/photo/6.jpeg";
import { Link } from "react-router-dom";

const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      imageUrl: physicalPropertyImage,
      categoryName: "PHYSICAL PROPERTY TESTING EQUIPMENT",
    },
    {
      id: 2,
      imageUrl: pulpTestingImage,
      categoryName: "PULP TESTING EQUIPMENT",
    },
    {
      id: 3,
      imageUrl: packagingTestingImage,
      categoryName: "PACKAGING TESTING EQUIPMENT",
    },
    {
      id: 4,
      imageUrl: surfaceCoatingImage,
      categoryName: "SURFACE COATING & PRINTABILITY",
    },
    {
      id: 5,
      imageUrl: environmentalTestingImage,
      categoryName: "ENVIRONMENTAL TESTING EQUIPMENT",
    },
    {
      id: 6,
      imageUrl: handmadePaperImage,
      categoryName: "HANDMADE PAPER MACHINES",
    },
  ];
  return (
    <>
      <div>
        <h1 className="flex items-center justify-center font-bold text-3xl">
          Categories
        </h1>
        <hr className="border-b-2 border-blue-500 w-28 mx-auto mb-8" />
        <div className="w-full flex flex-wrap justify-center gap-6 p-4">
          {categories.map((category) => (
            <Link
              to={{ pathname: "/product" }}
              state={{ title: category.categoryName }}
              key={category.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                className="w-full h-48 object-contain"
                src={category.imageUrl}
                alt={category.categoryName}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {category.categoryName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryCards;
