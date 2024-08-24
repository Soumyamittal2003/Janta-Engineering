import React from "react";
import image1 from "../assets/photo/1.jpg";
import image2 from "../assets/photo/1{a}.jpg";
import image3 from "../assets/photo/1{b}.jpg";
import image4 from "../assets/photo/2.jpg";
import image5 from "../assets/photo/2{a}.jpg";
import image6 from "../assets/photo/2{b}.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "QUADRANT SCALE",
      description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
      image: image1,
      date: "UEC 1001",
    },
    {
      id: 2,
      title: "GSM TESTER - DIGITAL BASKET TYPE",
      description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
      image: image2,
      date: "UEC 1002 A",
    },
    {
      id: 3,
      title: "GRAMMAGE TESTER - DIGITAL",
      description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
      image: image3,
      date: "UEC 1002 B",
    },
    {
      id: 4,
      title: "SAMPLE CUTTER - CIRCULAR FOR GSM.",
      description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
      image: image4,
      date: "UEC 1003 A",
    },
    {
      id: 5,
      title: "SAMPLE CUTTER - CIRCULAR FOR FCT",
      description: "PHYSICAL PROPERTY TESTING EQUIPMENT.",
      image: image5,
      date: "UEC 1003 B",
    },
    {
      id: 6,
      title:
        "SAMPLE STRIP CUTTER FOR TENSILE & FOLDING (K.M.) TESTS (GUILLOTINE TYPE)",
      description: "PHYSICAL PROPERTY TESTING EQUIPMENT",
      image: image6,
      date: "UEC -1006 AI",
    },
  ];

  return (
    <section className="py-10 px-4">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <hr className="border-b-2 border-blue-500 w-16 mx-auto mt-2" />
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white rounded-sm shadow-md overflow-hidden h-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-contain"
              />
              <div className="bg-white text-black text-sm p-1 opacity-75">
                {post.date}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
