import React from "react";
import AdminNavBar from "../Components/AdminNavBar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <AdminNavBar />
      {/* Main Content */}
      <div className="flex justify-center items-center container mx-auto mt-10">
        <h2 className="text-xl font-semibold text-center">
          Welcome to the Admin Dashboard
        </h2>
        {/* Other dashboard content can go here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
