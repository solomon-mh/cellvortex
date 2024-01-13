import prisma from "@/db/db";
import { NextResponse } from "next/server";
import { notFound } from "next/navigation";
import fs from "fs/promises";
export async function GET(
  req: NextResponse,
  { params: { id } }: { params: { id: string } }
) {
  const product = await prisma.product.findUnique({ where: { id } });
  if (product === null) notFound();
  const { size } = await fs.stat(product.filePath);
  const file = await fs.readFile(product.filePath);
  const extension = product.filePath.split(".").pop();

  return new NextResponse(file, {
    headers: {
      "Content-Disposition": `attachment; filename="${product.name}.${extension}"`,
      "Content-Length": size.toString(),
    },
  });
}
