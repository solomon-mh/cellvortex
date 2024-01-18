"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prismaClientSingleton = function () {
    return new client_1.PrismaClient();
};
var prisma = (_a = globalThis.prismaGlobal) !== null && _a !== void 0 ? _a : prismaClientSingleton();
exports.default = prisma;
if (process.env.NODE_ENV !== "production")
    globalThis.prismaGlobal = prisma;
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
