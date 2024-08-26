import React, { useState } from "react";

const EquipmentCard = ({
  image,
  name,
  category,
  uniqueCode,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img src={image} alt={name} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600">{category}</p>
        <p className="text-gray-400">Code: {uniqueCode}</p>
        <div className="flex flex-row">
          <button
            onClick={onEdit}
            className="mt-4 text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="mt-4 text-white bg-red-500 hover:bg-red-600 ml-5 py-2 px-4 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
