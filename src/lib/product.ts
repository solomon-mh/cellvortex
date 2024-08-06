import prisma from "@/db/db";
import { cache } from "./cache";
export const getLatestProducts = cache(
  async () => {
    const latestProducts = await prisma.product.findMany({
      where: { isAvailableForPurchase: true },
      select: {
        id: true,
        name: true,
        priceInCents: true,
        filePath: true,
        imagePath: true,
        description: true,
      },
      orderBy: { createdAt: "desc" },
      take: 4,
    });
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    return latestProducts;
  },
  ["/products", "getLatestProducts"],
  { revalidate: (60 * 60 * 24) / 2 }
);
export const getPopularProducts = cache(
  async () => {
    const latestProducts = await prisma.product.findMany({
      where: { isAvailableForPurchase: true },
      select: {
        id: true,
        name: true,
        priceInCents: true,
        filePath: true,
        imagePath: true,
        description: true,
      },
      orderBy: {
        orders: { _count: "desc" },
      },
      take: 4,
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return latestProducts;
  },
  ["/products", "getPopularProducts"],
  { revalidate: (60 * 60 * 24) / 2 }
);
