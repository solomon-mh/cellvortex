import React from "react";
import ProductCard from "./_components/ProductCard";
import { getLatestProduct, getPopularProduct } from "@/lib/product";

const ProductsPage = async () => {
  const latestProduct = await getLatestProduct();
  const popularProduct = await getPopularProduct();

  return (
    <div className="my-16">
      <h1 className="text-center border-b-2 py-2 mb-1">Xp,Latest Products</h1>
      <ProductCard card={latestProduct} />
      <h1 className="text-center border-b-2 py-2 mb-1">Our Famous Products</h1>
      <ProductCard card={popularProduct} />
    </div>
  );
};

export default ProductsPage;
