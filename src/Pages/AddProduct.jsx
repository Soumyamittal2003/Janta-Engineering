import { Spinner } from "@material-tailwind/react";
import React, { useState } from "react";
import AdminNavBar from "../Components/AdminNavBar";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    description: "",
    productCode: "",
    weight: "",
    dimensions: "",
    applicableStandards: "",
    rangeAvailable: "",
    testingApplications: "",
    images: [],
    applicationType: "",
    extras: "",
  });

  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [loading, setLoding] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      images: [...files],
    }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "Other") {
      setIsCustomCategory(true);
    } else {
      setIsCustomCategory(false);
      setFormData((prevState) => ({
        ...prevState,
        category: value,
      }));
    }
  };

  const handleApplicationChange = (e) => {
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      applicationType: value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoding(true);
    e.preventDefault();
    console.log(formData);

    const formPayload = new FormData();
    formPayload.append("productCode", formData.productCode);
    formPayload.append("productName", formData.productName);
    formPayload.append("description", formData.description);
    formPayload.append("category", formData.category); // Updated field
    formPayload.append("applicationType", formData.applicationType);
    formPayload.append("extras", formData.extras);
    formData.images.forEach((file, index) => {
      formPayload.append(`images`, file);
    });
    // formPayload.append("images", formData.images);

    formPayload.append("applicableStandards", [formData.applicableStandards]);
    formPayload.append("dimensions", formData.dimensions);
    formPayload.append("rangeAvailable", formData.rangeAvailable);
    formPayload.append("weight", formData.weight);
    formPayload.append("testingApplications", formData.testingApplications);
    console.log("00000", formPayload);

    try {
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/equipment/equipment",
        {
          method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          body: formPayload,
        }
      );
      const result = await response.json();
      console.log("result", result);

      if (result.success) {
        setLoding(false);
        setFormData({
          productName: "",
          category: "",
          description: "",
          productCode: "",
          weight: "",
          dimensions: "",
          applicableStandards: "",
          rangeAvailable: "",
          testingApplications: "",
          images: [],
          applicationType: "",
          extras: "",
        });
      } else {
        setLoding(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setLoding(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  return (
    <>
      <AdminNavBar />
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md mb-8 mt-20">
        <h2 className="text-center text-2xl font-semibold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Upload Images</label>
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              multiple
              className="w-full border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Physical Property Testing Equipment">
                  Physical Property Testing Equipment
                </option>
                <option value="Pulp Testing Equipment">
                  Pulp Testing Equipment
                </option>
                <option value="Packaging Testing Equipment">
                  Packaging Testing Equipment
                </option>
                <option value="Surface Coating & Printability">
                  Surface Coating & Printability
                </option>
                <option value="Environmental Testing Equipment">
                  Environmental Testing Equipment
                </option>
                <option value="Handmade Paper Machines">
                  Handmade Paper Machines
                </option>
                <option value="Prakritik Paint Machines">
                  Prakritik Paint Machines
                </option>
              </select>
            </div>
          </div>
          <label className="text-center block pt-5 font-medium">
            Product-Description
          </label>
          <hr className="border-b-2 border-blue-500 w-20 mx-auto" />
          <div className="mb-4">
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
              rows="4"
              required
            />
          </div>

          <div className="w-1/2">
            <label className="block mb-1 font-medium">Optional on Demand</label>
            <input
              type="text"
              name="extras"
              value={formData.extras}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>

          <label className="text-center block pt-5 font-medium">
            Product-Details
          </label>
          <hr className="border-b-2 border-blue-500 w-20 mx-auto" />
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Product Code</label>
              <input
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Weight</label>
              <input
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Dimensions</label>
              <input
                type="text"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">
                Applicable Standards
              </label>
              <input
                type="text"
                name="applicableStandards"
                value={formData.applicableStandards}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Range Available</label>
              <input
                type="text"
                name="rangeAvailable"
                value={formData.rangeAvailable}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">
                Testing Applications
              </label>
              <input
                type="text"
                name="testingApplications"
                value={formData.testingApplications}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2 mb-5">
              <label className="block mb-1 font-medium">ApplicationType</label>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleApplicationChange}
                className="w-full border border-gray-300 p-2 rounded-md"
              >
                <option value="">Select ApplicationType</option>
                <option value="Category1">Category 1</option>
                <option value="Category2">Category 2</option>
              </select>
            </div>
          </div>
          {/* <label className="text-center block pt-5 font-medium">
          Product-Consumables
        </label>
        <hr className="border-b-2 border-blue-500 w-20 mx-auto" />
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block mb-1 font-medium">Accessories</label>
            <input
              type="text"
              name="accessories"
              value={formData.accessories}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
        </div> */}
          {loading ? (
            <button className="text-center w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
              <Spinner />
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Add Product
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AddProductForm;
