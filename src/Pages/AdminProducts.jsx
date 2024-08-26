import React, { useEffect, useState } from "react";
import EquipmentList from "../Components/EquipmentCard";
import { Spinner } from "@material-tailwind/react";
import AdminNavBar from "../Components/AdminNavBar";

function AdminProducts() {
  const [equipmentData, setEquipmentData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [relode, setRelode] = useState(false);
  const [id, setId] = useState("");
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
      images: [...prevState.images, ...files],
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

  const getEquipment = async () => {
    try {
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/equipment/equipment"
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setEquipmentData(result.equipment);
      } else {
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, [showForm, relode]);

  async function handelEdit(id, data) {
    setShowForm(true);
    console.log(id, "   dmvkfd");
    setId(id);
    setFormData({
      productName: data?.productName,
      category: data?.category,
      description: data?.description,
      productCode: data?.productCode,
      weight: data?.weight,
      dimensions: data?.dimensions,
      applicableStandards: data?.applicableStandards,
      rangeAvailable: data?.rangeAvailable,
      testingApplications: data?.testingApplications,
      images: data?.images,
      applicationType: data?.applicationType,
      extras: data?.extras,
    });
  }

  const handelDelete = async (id) => {
    // Show a confirmation dialog
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this equipment?"
    );

    // If the user confirms, proceed with the deletion
    if (isConfirmed) {
      try {
        const response = await fetch(
          `https://janta-engineering-server.onrender.com/api/v1/equipment/equipment/${id}`,
          {
            method: "DELETE",
            // headers: {
            //   "Content-Type": "application/json",
            // },
          }
        );
        const result = await response.json();
        console.log("result", result);

        if (result.success) {
          setRelode(!relode);
        } else {
          console.error("Failed to delete equipment data:", result.message);
        }
      } catch (error) {
        console.error("Error deleting equipment data:", error);
      }
    } else {
      // If the user cancels, do nothing
      console.log("Deletion canceled by the user.");
    }
  };

  const handleSubmit = async (e) => {
    setLoding(true);
    e.preventDefault();
    console.log(formData);
    console.log(formData, "    what we sending");
    const formPayload = new FormData();
    formPayload.append("productCode", formData.productCode);
    formPayload.append("productName", formData.productName);
    formPayload.append("description", formData.description);
    formPayload.append("category", formData.category); // Updated field
    formPayload.append("applicationType", formData.applicationType);
    formPayload.append("extras", formData.extras);
    // formPayload.append("images", formData.images);
    formPayload.append("applicableStandards", [formData.applicableStandards]);
    formPayload.append("dimensions", formData.dimensions);
    formPayload.append("rangeAvailable", formData.rangeAvailable);
    formPayload.append("weight", formData.weight);
    formPayload.append("testingApplications", formData.testingApplications);
    console.log("00000", formPayload);

    try {
      const response = await fetch(
        `https://janta-engineering-server.onrender.com/api/v1/equipment/equipment/${id}`,
        {
          method: "PUT",
          //   headers:
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
        setShowForm(false);
      } else {
        setLoding(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setLoding(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  if (showForm) {
    return (
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
        <h2 className="text-center text-2xl font-semibold ">Edit Product</h2>
        <hr className="border-b-2 border-blue-500 w-20 mx-auto mb-4 mt-1" />
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div className="mb-4">
                        <label className="block mb-1 font-medium">Upload Images</label>
                        <input
                            type="file"
                            name="images"
                            onChange={handleImageChange}
                            multiple
                            className="w-full border border-gray-300 p-2 rounded-md"
                            required
                        />
                    </div> */}
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
              <label className="block mb-1 font-medium">Dimension</label>
              <input
                type="text"
                name="dimension"
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

          {/* <label className="text-center block pt-5 font-medium">Product-Consumables</label>
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
              onClick={() => handleSubmit()}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          )}

          <button
            onClick={() => setShowForm(false)}
            className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentData.map((equipment) => (
            <EquipmentList
              key={equipment.id}
              image={equipment.images ? equipment.images[0] : ""}
              name={equipment.productName}
              category={equipment.category}
              uniqueCode={equipment.productCode}
              onEdit={() => handelEdit(equipment._id, equipment)}
              onDelete={() => handelDelete(equipment._id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminProducts;
