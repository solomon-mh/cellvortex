import { DeleteDropdownItem } from "@/app/admin/products/_components/ProductActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ProductCardProps = {
  card: {
    id: string;
    name: string;
    priceInCents: number;
    description: string;
    filePath: string;
    imagePath: string;
  }[];
};

const ProductCard: React.FC<ProductCardProps> = ({ card }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto gap-6 p-4">
      {card.map((item) => (
        <Card
          key={item.imagePath}
          className="border rounded-lg shadow-lg flex flex-col"
        >
          <CardHeader className="p-4 bg-gray-100">
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </CardHeader>
          <CardContent className="p-4 flex-grow flex flex-col">
            <div className="relative w-full h-48 md:h-56 lg:h-64">
              <Image
                src={item.imagePath}
                alt={item.name}
                width={400}
                height={400}
                className="rounded"
              />
            </div>
            <CardDescription className="mt-4 text-gray-600 flex-grow">
              {item.description}
            </CardDescription>
            <div className="flex justify-between items-center mt-4 font-bold text-lg">
              <p className="text-gray-700">Price:</p>
              <p className="text-green-500">
                ${(item.priceInCents / 100).toFixed(2)}
              </p>
            </div>
            <Link
              href={`/products/${item.id}/purchase`}
              className="mt-4 inline-block text-center w-full bg-lime-500 text-white font-bold py-2 rounded hover:bg-lime-600 transition-colors duration-200"
            >
              Purchase
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
