// src/pages/ProductsPage.jsx
import React from "react";
import Product from "../components/Product";
import { products } from "../data/ProductsData.js"; // Assuming products data is imported correctly

const ProductsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 pl-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
