import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

export default Spinner;
