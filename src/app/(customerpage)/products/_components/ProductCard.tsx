import { DeleteDropdownItem } from "@/app/admin/products/_components/ProductActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import Image from "next/image";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {card.map((item) => (
        <Card key={item.imagePath} className="border rounded-lg shadow-lg">
          <CardHeader className="p-4 bg-gray-100">
            <h2 className="text-lg font-semibold">{item.name}</h2>
          </CardHeader>
          <CardContent className="p-4">
            <Image
              src={item.imagePath}
              alt={item.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover"
            />
            <CardDescription className="mt-4 text-gray-600">
              {item.description}
            </CardDescription>
            <div className="flex justify-between items-center mt-4 font-bold text-lg">
              <p className="text-gray-700">Price:</p>
              <p className="text-green-500">
                ${(item.priceInCents / 100).toFixed(2)}
              </p>
            </div>
            <a
              href={`/products/${item.id}/download`}
              download
              className="mt-4 inline-block text-center w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Download
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
