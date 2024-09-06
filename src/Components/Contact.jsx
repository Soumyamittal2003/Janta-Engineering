import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.address ||
      !formData.phone
    ) {
      alert("Empty fields");
      return;
    }
    try {
      const response = await fetch(
        "https://janta-engineering-server.onrender.com/api/v1/users/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
      alert("Message sent successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center py-20">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:max-w-3xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="md:flex md:space-x-6">
              <div className="md:w-1/2 w-full">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="md:flex md:space-x-6">
              <div className="md:w-1/2 w-full">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="md:w-1/2 w-full">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Address"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
