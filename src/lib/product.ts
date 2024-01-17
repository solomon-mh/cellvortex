import prisma from "@/db/db";

export async function getLatestProduct() {
  const latestProducts = prisma.product.findMany({
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

  return latestProducts;
}
export async function getPopularProduct() {
  const latestProducts = prisma.product.findMany({
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

  return latestProducts;
}
