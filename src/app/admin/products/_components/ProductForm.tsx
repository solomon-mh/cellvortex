"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { addProduct } from "../../_actions/products";

const ProductForm = () => {
  const [price, setPrice] = useState<number>();
  return (
    <form action={addProduct} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name: </Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price-In-Cents: </Label>
        <Input
          type="text"
          id="priceInCents"
          name="priceInCents"
          required
          onChange={(e) => setPrice(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">{(price || 0) / 100}$</div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description: </Label>
        <Textarea id="description" name="description" required />
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
            required
            className="block h-fit w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700"
          />
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
            required
            className="block h-fit w-full text-sm text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-gray-100"
          />
        </div>
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default ProductForm;
