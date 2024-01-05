"use server";
import { z } from "zod";
import fs from "fs/promises";
import prisma from "@/db/db";
import { redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(2),
  description: z.string().min(2),
  priceInCents: z.coerce.number().positive("The Number must be Positive!"),
  file: fileSchema.refine((file) => file.size > 0, "required"),
  image: imageSchema.refine((file) => file.size > 0, "required"),
});

export async function addProduct(formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    console.log(result.error);
    return result.error.formErrors;
  }
  console.log("result");

  const data = result.data;
  console.log(data);

  // File Path
  await fs.mkdir("products", { recursive: true });
  const filePath = `products/${crypto.randomUUID()}-${data.file.name}`;
  await fs.writeFile(filePath, Buffer.from(await data.file.arrayBuffer()));
  // Image Path
  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.file.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  await prisma.product.create({
    data: {
      name: data.name,
      desciption: data.description,
      priceInCents: data.priceInCents,
      filePath: filePath,
      imagePath: imagePath,
    },
  });
  redirect("/admin/products");
}
