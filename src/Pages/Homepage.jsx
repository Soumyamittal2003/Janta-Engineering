import React from "react";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import { Navbarmenu } from "../Components/Navbar";
import ContactUs from "../Components/Contact";
import Blogs from "../Components/Blogs";
import Carousel from "../Components/Carousel";
import CategoryCards from "../Components/CategoryCard";

function Homepage() {
  return (
    <>
      <Navbarmenu />
      <Carousel />
      <section className="flex items-center justify-center h-[300px] bg-gray-200 px-4">
        <div className="max-w-2xl text-center">
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
            scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices
            nec congue eget, auctor vitae massa.
          </p>
        </div>
      </section>
      <Testimonials />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <CategoryCards />
      </div>
      <Blogs />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Homepage;
