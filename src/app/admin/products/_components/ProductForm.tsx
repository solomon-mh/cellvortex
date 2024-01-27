"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { addProduct, updateProduct } from "../../_actions/products";
import { useFormState } from "react-dom";
import { SubmitButton } from "./ProductSubmitButton";
import { Product } from "@prisma/client";
import Image from "next/image";

const ProductForm = ({ product }: { product?: Product | null }) => {
  const [error, formAction] = useFormState(
    product === null || product === undefined
      ? addProduct
      : updateProduct.bind(null, product?.id ?? ""),
    {}
  );
  const [price, setPrice] = useState<number | undefined>(product?.priceInCents);
  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name: </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name}
        />
        {error.name && <div className="text-destructive">{error.name}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price-In-Cents: </Label>
        <Input
          type="text"
          id="priceInCents"
          name="priceInCents"
          required
          defaultValue={product?.priceInCents}
          onChange={(e) => setPrice(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">{(price || 0) / 100}$</div>
        {error.priceInCents && (
          <div className="text-destructive">{error.priceInCents}</div>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description: </Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description}
        />
        {error.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="file"
          className="block text-sm font-medium text-gray-700"
        >
          File:
        </label>
        <div className="relative">
          <Input
            type="file"
            id="file"
            name="file"
            required={product === null}
            className="block h-fit w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700"
          />
          <small className="text-gray-500">{product?.filePath}</small>
          {error.file && <div className="text-destructive">{error.file}</div>}
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image:
        </label>
        <div className="relative">
          <Input
            type="file"
            id="image"
            name="image"
            required={product === null}
            className="block h-fit w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-gray-100"
          />
          {product && (
            <div>
              <Image
                src={product?.imagePath || ""}
                width={400}
                height={400}
                alt={product?.name || "Product image"}
              />
            </div>
          )}
          {error.image && <div className="text-destructive">{error.image}</div>}
        </div>
      </div>
      <SubmitButton />
    </form>
  );
};

export default ProductForm;
