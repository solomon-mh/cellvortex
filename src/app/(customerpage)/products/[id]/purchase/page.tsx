import prisma from "@/db/db";
import { notFound } from "next/navigation";
import Stripe from "stripe";
import CheckoutForm from "./_components/CheckoutForm";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
const PurchasePage = async ({ params: { id } }: { params: { id: string } }) => {
  const product = await prisma.product.findUnique({ where: { id } });
  if (product === null) return notFound();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: product.priceInCents,
    currency: "USD",
    metadata: { prouductId: product.id },
  });
  if (paymentIntent.client_secret === null) {
    throw Error("Stripe failed to create payment intent!");
  }
  return (
    <div className="my-32 mx-4">
      <CheckoutForm
        product={product}
        clientSecret={paymentIntent.client_secret}
      />
    </div>
  );
};

export default PurchasePage;
