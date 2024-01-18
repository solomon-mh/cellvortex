import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
// prisma.user.create({
//   data: {
//     email: "sol@gmail.com",
//   },
// });
// prisma.order.create({
//   data: {
//     user: {
//       create: {
//         email: "sol@gmail.com",
//       },
//     },
//     pricePaidInCents: 5.6,
//     product: {
//       create: {
//         name: "Samsung1",
//         description: "Phone",
//         filePath: "../ll/",
//         imagePath: "12",
//         priceInCents: 5.6,
//       },
//     },
//   },
// });
