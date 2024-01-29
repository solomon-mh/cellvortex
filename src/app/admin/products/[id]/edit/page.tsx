import PageHeader from "@/app/admin/_components/PageHeader";
import React from "react";
import ProductForm from "../../_components/ProductForm";
import prisma from "@/db/db";

const EditPage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  return (
    <div className="text-xl">
      <PageHeader>Edit Page</PageHeader>
      <ProductForm product={product} />
    </div>
  );
};

export default EditPage;
