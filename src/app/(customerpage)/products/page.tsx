import React, { Suspense } from "react";
import ProductCard from "./_components/ProductCard";
import { getLatestProducts, getPopularProducts } from "@/lib/product";
import ProductCardSkeleton from "./_components/ProductCardSkeleton";

const ProductsPage = async () => {
  const latestProduct = await getLatestProducts();
  const popularProduct = await getPopularProducts();

  return (
    <Suspense fallback={<ProductCardSkeleton />}>
      <div className="my-16">
        <h1 className="text-center border-b-2 py-2 mb-1">Xp,Latest Products</h1>
        <ProductCard card={latestProduct} />
        <h1 className="text-center border-b-2 py-2 mb-1">
          Our Famous Products
        </h1>
        <ProductCard card={popularProduct} />
      </div>
    </Suspense>
  );
};

export default ProductsPage;
