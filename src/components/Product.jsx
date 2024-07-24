import React from "react";
import Button from "./Button";

const Product = ({ product }) => {
  return (
    <div className="border mt-6 pb-6">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-sm shadow-md"
            loading="lazy"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-2">{product.description}</p>
          <p className="flex items-center justify-center text-xl font-extrabold">
            <span className="text-lime-600">{product.currency}</span>
            <span className="text-black">{product.price}</span>
          </p>

          <Button text="Order Now" product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;
