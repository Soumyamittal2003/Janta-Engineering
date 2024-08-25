import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding React",
      description: "A deep dive into the popular frontend library.",
      image:
        "https://www.mtt.uk.com/wp-content/uploads/2019/05/CNC-Lathe-Repair3.jpg",
      date: "August 1, 2024",
    },
    {
      id: 4,
      title: "Responsive Design Principles",
      description: "Make your web pages look great on any device.",
      image:
        "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
      date: "August 18, 2024",
    },
    {
      id: 2,
      title: "JavaScript Best Practices",
      description: "Learn the best practices for writing clean JavaScript.",
      image:
        "https://media.istockphoto.com/id/1057719100/photo/young-latin-engineer-calibrating-drill.jpg?s=612x612&w=0&k=20&c=hO2XJ60cxB4krKZBoM8zB97QHQLx9tjtWGicqDoo4rk=",
      date: "September 26, 2024",
    },
    {
      id: 4,
      title: "Responsive Design Principles",
      description: "Make your web pages look great on any device.",
      image:
        "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
      date: "August 18, 2024",
    },
    {
      id: 3,
      title: "CSS Tricks You Should Know",
      description: "Improve your styling with these useful CSS tricks.",
      image:
        "https://media.istockphoto.com/id/1363134809/photo/portrait-of-a-woman-working-in-a-factory-industry.webp?b=1&s=170667a&w=0&k=20&c=LjrLTDYSeyyLCI3KePVMBcyBVip28dArEu9MQyVarVA=",
      date: "January 15, 2023",
    },
    {
      id: 4,
      title: "Responsive Design Principles",
      description: "Make your web pages look great on any device.",
      image:
        "https://media.istockphoto.com/id/171347670/photo/engineering.jpg?s=612x612&w=0&k=20&c=ImhJgyLB2lhDTcZZisraOyQ4nJqs8iVCVj3_tbYgrYc=",
      date: "August 18, 2024",
    },
  ];
  const [equipmentData, setEquipmentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getEquipment = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/equipment/equipment"
      );
      const result = await response.json();
      console.log(result);
      if (result.success) {
        setIsLoading(false);
        setEquipmentData(result.equipment);
      } else {
        setIsLoading(false);
        console.error("Failed to fetch equipment data:", result.message);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching equipment data:", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, []);
  console.log(equipmentData.slice(0, 6), "   xcvdc")
  return (
  
    <section className="py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {equipmentData.slice(0, 6).map((item, id) => (
           
          <Link
          to={{
            pathname: "/equipment-category",
      
          }}
          state={{product:item}} key={id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-md shadow-md overflow-hidden h-full border hover:scale-105 transition-transform duration-300 ease-in-out">
              <img
                src={item.images[0]}
                alt={item.productName}
                className="w-full h-40 object-contain"
              />
              <div className="bg-white text-black text-sm p-1 pl-5 opacity-75">
                {item.productCode}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.category}</h3>
                <p className="text-gray-600">{item.description.slice(0, 150)}...</p>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </section>

  );
};

export default Blogs;
