import React from "react";

import prisma from "@/db/db";
import { DashboardCard } from "./_components/DashboardCard";

async function getSalesData() {
  await wait(2000);
  const data = await prisma.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numOfSales: data._count,
  };
}

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    prisma.user.count(),
    prisma.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);
  return {
    userCount,
    averageValuePerUser:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0 / userCount) / 100,
  };
}

async function getProductData() {
  const [activeCount, inActiveCount] = await Promise.all([
    prisma.product.count({ where: { isAvailableForPurchase: true } }),
    prisma.product.count({ where: { isAvailableForPurchase: false } }),
  ]);

  return { activeCount, inActiveCount };
}

const AdminDashboard = async () => {
  const [usersData, salesData, productData] = await Promise.all([
    getUserData(),
    getSalesData(),
    getProductData(),
  ]);

  const inActiveProductStyle = {
    color: productData.inActiveCount >= 1 ? "red" : "inherit",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={salesData.numOfSales}
        body={salesData.amount}
      />
      <DashboardCard
        title="Customers"
        subtitle={usersData.userCount}
        body={usersData.averageValuePerUser}
      />
      <DashboardCard
        title="Products"
        subtitle={`${productData.inActiveCount} InActive Products`}
        body={`${productData.activeCount} Active Products`}
        subtitleStyle={inActiveProductStyle}
      />
    </div>
  );
};

export default AdminDashboard;

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
