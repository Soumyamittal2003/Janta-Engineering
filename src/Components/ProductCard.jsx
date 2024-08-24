import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col transform transition-transform hover:scale-105">
      <Link
        to={{
          pathname: "/equipment-category",
        }}
        state={{ product }}
        className="flex flex-col h-full"
      >
        <div className="flex-grow">
          <img
            src={product.images[0]}
            alt={product.category}
            className="object-contain w-full h-48 md:h-64 lg:h-72"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="text-lg font-semibold">{product.productName}</div>
          <div className="text-md text-gray-600 font-semibold">
            {product.category}
          </div>
          <div className="text-gray-500">Code: {product.productCode}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
