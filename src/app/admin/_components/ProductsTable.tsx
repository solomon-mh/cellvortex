import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/db/db";

import { CheckCircle2, XCircle, MoreVertical } from "lucide-react";
import Link from "next/link";
import {
  ActiveTogglerDropdownItem,
  DeleteDropdownItem,
} from "../products/_components/ProductActions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function ProductsTable() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      orders: true,
      isAvailableForPurchase: true,
      _count: { select: { orders: true } },
    },
    orderBy: {
      name: "asc",
    },
  });
  if (products.length === 0) {
    return <p className="text-xl">No Products Available!</p>;
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Orders</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell>
                {product.isAvailableForPurchase ? (
                  <>
                    <CheckCircle2 className="stroke-green-500" />
                    <span className="sr-only">Available</span>
                  </>
                ) : (
                  <>
                    <XCircle className="stroke-destructive" />
                    <span className="sr-only">UnAvailable</span>
                  </>
                )}
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.priceInCents / 100} $</TableCell>
              <TableCell>{product._count.orders}</TableCell>
              <TableCell className="relative">
                <DropdownMenu>
                  <DropdownMenuTrigger>
       
                    <MoreVertical />
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-100  px-5 py-4 absolute right-1 -top-2 space-y-1">
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      asChild
                      className="p-1 transition-colors duration-300 hover:bg-gray-200"
                    >
                      <a
                        className="block"
                        download
                        href={`/admin/products/${product.id}/download`}
                      >
                        Download
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-1 transition-colors duration-300 hover:bg-gray-200 group">
                      <Link href={`/admin/products/${product.id}/edit`}>
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <ActiveTogglerDropdownItem
                      id={product.id}
                      isAvailableForPurchase={product.isAvailableForPurchase}
                    />
                    <DeleteDropdownItem
                      id={product.id}
                      disabled={product._count.orders > 0}
                    />
                  </DropdownMenuContent>
                  {/* how can i delete and edit it: using ID */}
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
