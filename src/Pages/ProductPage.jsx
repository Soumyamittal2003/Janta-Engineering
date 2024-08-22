import CautionBox from "../Components/CautionBox";
import Footer from "../Components/Footer";
import { Navbarmenu } from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import mainImage from "../assets/images (3).jpeg";
import image1 from "../assets/images (2).jpeg";
import image2 from "../assets/images (1).jpeg";
import image3 from "../assets/images (1).jpeg";

const ProductPage = () => {
  const products = Array.from({ length: 20 }, (_, index) => ({
    name: "PHYSICAL PROPERTY TESTING EQUIPMENTS",
    description:
      "Paper is a complex product so the final goal is to achieve good quality finished products for printing, converting and other usage. The results depend on factors like physical thickness, surface, roughness and printability etc. that we supply for all your paper testing needs.",
    images: [mainImage, image1, image2, image3],
    details: {
      Weight: "5kg",
      Dimensions: "10x10x10 cm",
      Material: "Steel",
    },
    consumables: [
      "Consumable Item 1",
      "Consumable Item 2",
      "Consumable Item 3",
    ],
    icon: `https://via.placeholder.com/50?text=Icon+${index + 1}`,
    category: `Category ${index + 1}`,
    code: `UEC-${1000 + index + 1}`,
  }));

  return (
    <>
      <Navbarmenu />
      <div className="p-4 md:p-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-3">
          Engineering Products
        </h2>
        <hr className="border-b-2 border-blue-500 w-20 mx-auto mt-2 mb-6" />
        <CautionBox />
        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product, index) => (
            <div key={index} className="w-full md:w-5/12 lg:w-1/4 p-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
