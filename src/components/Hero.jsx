import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-[65rem] lg:h[80rem] flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-black  inline-block bg-lime-50 lg:mb-96">
          Welcome to Dawood's Coconut Store
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-black inline-block pb-3 bg-lime-50 mb-32 mt-42 lg:mt-40 ">
          Buy and order coconuts from us to enjoy the best quality!
        </h2>
        {/* <p className="text-3xl font-bold text-black  p-4">
          Enjoy Our <span className="bg-lime-50 rounded px-1">Home Delivery Service</span> : Order the Freshest,
          Sweetest Coconuts Today!
        </p> */}

        <figure className="bg-hero-pattern2">
          
        </figure>
        <Link
          to="/products"
          className=" bg-lime-600 hover:bg-lime-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition duration-300"
        >
          Explore Products
        </Link>
      </div>
    </section>
  );
};

export default Hero;
