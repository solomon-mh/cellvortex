import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const ProductCardSkeleton = () => {
  return (
    <div className="grid grid-cols-2 my-12 md:grid-cols-3 lg:w-3/4 mx-auto gap-4 p-4 animate-pulse">
      {Array.from({ length: 6 }).map((_, index) => (
        <Card key={index} className="border rounded-lg shadow-lg">
          <CardContent className="p-4">
            <CardHeader className="my-4 h-10 bg-gray-300 rounded w-full"></CardHeader>
            <div className="w-full h-64 bg-gray-300 rounded"></div>
            <CardDescription className="mt-4">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
            </CardDescription>
            <div className="flex justify-between items-center mt-4 font-bold text-lg">
              <p className="h-4 bg-gray-300 rounded w-1/4"></p>
            </div>
            <div className="mt-4 h-10 bg-gray-500 rounded w-full"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductCardSkeleton;
