import React, { useEffect, useState } from 'react'
import EquipmentList from '../Components/EquipmentCard';

function AdminProducts() {
    const [equipmentData, setEquipmentData] = useState([]);
    const [showForm,setShowForm]= useState(false)
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        description: '',
        productCode: '',
        weight: '',
        dimension: '',
        applicableStandards: '',
        rangeAvailable: '',
        testingApplications: '',
        accessories: '',
        images: [],
    });
    const [isCustomCategory, setIsCustomCategory] = useState(false);

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
        if (value === 'Other') {
            setIsCustomCategory(true);
        } else {
            setIsCustomCategory(false);
            setFormData((prevState) => ({
                ...prevState,
                category: value,
                customCategory: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Submit the form data
    };

    const getEquipment = async () => {
        try {
            const response = await fetch('https://janta-engineering-server.onrender.com/api/v1/equipment/equipment');
            const result = await response.json();
            console.log(result)
            if (result.success) {
                setEquipmentData(result.equipment);
            } else {
                console.error('Failed to fetch equipment data:', result.message);
            }
        } catch (error) {
            console.error('Error fetching equipment data:', error);
        }
    };

    useEffect(() => {
        getEquipment();
    }, []);

    async function handelEdit(id,data){
       setShowForm(true)
       console.log(data)
       setFormData({
        productName: data?.productName,
        category: data?.category,
        description: data?.description,
        productCode: data?.productCode,
        weight: data?.weight,
        dimension: data?.dimension,
        applicableStandards: data?.applicableStandards,
        rangeAvailable: data?.rangeAvailable,
        testingApplications: data?.testingApplications,
        accessories: data?.accessories,
        images: data?.images,
       })
    }

    if(showForm){
        return (
            <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-center text-2xl font-semibold mb-4">Edit Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-4">
                    <label className="block mb-1 font-medium">Upload Images</label>
                    <input
                        type="file"
                        name="images"
                        onChange={handleImageChange}
                        multiple
                        className="w-full border border-gray-300 p-2 rounded-md"
                    
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
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Category1">Category 1</option>
                            <option value="Category2">Category 2</option>
                            <option value="Other">Other</option>
                        </select>
                        {isCustomCategory && (
                            <input
                                type="text"
                                name="customCategory"
                                value={formData.customCategory}
                                onChange={handleInputChange}
                                placeholder="Enter custom category"
                                className="w-full mt-2 border border-gray-300 p-2 rounded-md"
                            />
                        )}
                    </div>
                </div>
                <label className="text-center block pt-5 font-medium">Product-Description</label>
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

                <label className="text-center block pt-5 font-medium">Product-Details</label>
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
                            value={formData.dimension}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block mb-1 font-medium">Applicable Standards</label>
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
                        <label className="block mb-1 font-medium">Testing Applications</label>
                        <input
                            type="text"
                            name="testingApplications"
                            value={formData.testingApplications}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 p-2 rounded-md"
                        />
                    </div>
                </div>

                <label className="text-center block pt-5 font-medium">Product-Consumables</label>
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
                </div>


                <button
                    type="submit"
                    onClick={()=>setShowForm(false)}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                   Save
                </button>
                <button
                    onClick={()=>setShowForm(false)}
                    className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                >
                  Cancel
                </button>
            </form>
          
        </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipmentData.map((equipment) => (
          <EquipmentList
            key={equipment.id}
            image={equipment.images?equipment.images[0]:""}
            name={equipment.productName}
            category={equipment.category}
            uniqueCode={equipment.productCode}
            onEdit={() => handelEdit(equipment.id,equipment)}
          />
        ))}
      </div>
    </div>
    )
}

export default AdminProducts
