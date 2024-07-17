// src/components/ProductCatalog.jsx
import React, { useEffect, useState } from "react";
import Product from "./Product";
import WhatsAppShare from "./WhatsAppShare";
import { products } from "../data/ProductsData.js"; // Adjust the path as necessary

const ProductCatalog = () => {
  const [catalogProducts, setCatalogProducts] = useState(products);

  useEffect(() => {
    // Assuming products is the initial state
    setCatalogProducts(products); // Initialize state with imported data
  }, [products]);

  return (
    <div className="flex flex-wrap justify-center">
      {catalogProducts.map((product) => (
        <div key={product.id}>
          <Product product={product} />
          <WhatsAppShare phoneNumber="9096726383" product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductCatalog;
