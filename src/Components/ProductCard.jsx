import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden flex flex-col  transform transition-transform hover:scale-105">
      <Link
        to={{
          pathname: "/equipment-category",

        }}
        state={{product}}
      >
        {" "}
        <div className="md:w-5/10">
          <img
            src={product.images[0]}
            alt={product.category}
            className="object-cover w-full h-30 md:h-full"
          />
        </div>
        <div className="md:w-3/10 p-4 flex flex-col justify-between">
          <div className="text-lg font-semibold">{product.productName}</div>
          <div className="text-md text-gray-600 font-semibold">{product.category}</div>
          <div className="text-gray-500">Code: {product.productCode}</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;