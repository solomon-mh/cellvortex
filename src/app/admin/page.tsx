import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import prisma from "@/db/db";

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
        title="Active Products"
        subtitle={productData.inActiveCount}
        body={productData.activeCount}
      />
    </div>
  );
};

type DashboardCardProps = {
  title: string;
  subtitle: number;
  body: number;
};
export function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
      <CardFooter>
        <p>{title}</p>
      </CardFooter>
    </Card>
  );
}

export default AdminDashboard;
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

