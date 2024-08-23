import React from "react";
import { Link } from "react-router-dom";
import CoconutsBackground from "/fresh-coconuts-background.jpg"; // Ensure correct path to your image

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-[65rem] lg:h-[80rem] flex flex-col justify-center items-center">
      <div className="text-center w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black bg-lime-50  rounded my-72 lg:mt-1 pb-2 text-balance">
          Buy fresh coconuts online from Dawood's Coconut Wholesaler in Pune.
          Fast coconut delivery service available. Contact us at the numbers
          below.
        </h2>
        <Link
          to="/products"
          className="bg-lime-600 hover:bg-lime-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition duration-300"
        >
          Explore Products
        </Link>

        <figure className=" w-full mt-20 relative">
          <img
            src={CoconutsBackground}
            loading="lazy"
            alt="fresh coconuts"
            className="w-full lg:h-72 object-cover pt-16 lg:p-0  lg:absolute top-44 "
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
