import { Button } from "@/components/ui/button";
import prisma from "@/db/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const SuccessPage = async ({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}) => {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  );
  if (paymentIntent.metadata.productId === null) return notFound();

  const product = await prisma.product.findUnique({
    where: { id: paymentIntent.metadata.prouductId },
  });
  if (product === null) notFound();
  const isSuccess = paymentIntent.status === "succeeded";
  return (
    <div className="max-w-5xl w-full my-24 px-12 space-y-8">
      <h1>{isSuccess ? " Success! 🎉" : "Error! ❌"}</h1>
      <div className="flex gap-4 items-center">
        <div className="aspect-video flex-shrink-0 w-1/3 relative">
          <Image
            src={product.imagePath}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-lg">Price: ${product.priceInCents / 100}</div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="line-clamp-3 text-muted-foreground">
            {product.description}
          </div>
          <Button className="my-4" asChild>
            {isSuccess ? (
              <a
                href={`/products/download/${await createDownloadVerification(
                  product.id
                )}`}
              >
                Download
              </a>
            ) : (
              <Link href={`/products/${product.id}/purchase`}>Try Again</Link>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
async function createDownloadVerification(productId: string) {
  return (
    await prisma.downloadVerification.create({
      data: {
        productId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        createdAt: new Date(),
      },
    })
  ).id;
}
