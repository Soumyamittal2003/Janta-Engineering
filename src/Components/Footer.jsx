import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {/* Pages Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Pages</h3>
                    <ul className="flex ">
                        <li className="mb-2 ml-2 hover:text-gray-400 cursor-pointer">Home</li>
                        <li className="mb-2 ml-2 hover:text-gray-400 cursor-pointer">About</li>
                        <li className="mb-2 ml-2 hover:text-gray-400 cursor-pointer">Products</li>
                        <li className="mb-2 ml-2 hover:text-gray-400 cursor-pointer">Blog</li>
                        <li className="ml-2 hover:text-gray-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <p className="mb-4 italic">"Connecting the world, one post at a time."</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">We are not spamming, just sharing the love.</p>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                    <ul>
                        <li className="mb-2 flex items-center">
                            <FaPhone className="mr-2" /> +123 456 7890
                        </li>
                        <li className="mb-2 flex items-center">
                            <FaEnvelope className="mr-2" /> info@example.com
                        </li>
                        <li className="flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> 123 Main Street, City, Country
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-800 text-white pt-20 text-center">
            <p className="text-sm">
                © Copyright <a href="https://jantaengineering.com" className="underline hover:text-gray-400">jantaengineering.com</a> & Design By <a href="https://corazortechnology.com" className="underline hover:text-gray-400">CorazorTechnology.com</a> - 2024
            </p>
        </div>
        </footer>
    );
};

export default Footer;
