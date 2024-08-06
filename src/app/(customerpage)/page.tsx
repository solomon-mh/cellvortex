"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/Hero";

export default function Home() {
  // Define motion variants for different sections

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <div>
      {/*HERO SECTION  */}
      <Hero />
      {/* Features Section */}
      <section className="py-12 bg-gray-100 text-gray-700">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Our Phones?
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              {
                src: "/path/to/feature1.png",
                title: "Advanced Cameras",
                description:
                  "Capture stunning photos with our state-of-the-art camera technology.",
              },
              {
                src: "/path/to/feature2.png",
                title: "Long-lasting Battery",
                description:
                  "Enjoy extended battery life that keeps you connected all day long.",
              },
              {
                src: "/path/to/feature3.png",
                title: "Fast Performance",
                description:
                  "Experience smooth and fast performance with our latest processors.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="w-1/3 p-4"
                initial="hidden"
                whileInView="visible"
                variants={featureVariants}
              >
                <Image
                  src={feature.src}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white text-gray-700">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Latest Models
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              {
                model: "Model X",
                price: "From $999",
                href: "/products/model-x",
              },
              {
                model: "Model Y",
                price: "From $799",
                href: "/products/model-y",
              },
              {
                model: "Model Z",
                price: "From $699",
                href: "/products/model-z",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="w-1/3 p-4"
                initial="hidden"
                whileInView="visible"
                variants={productVariants}
              >
                <Image
                  src={`/path/to/${product.model.toLowerCase()}.png`}
                  alt={product.model}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{product.model}</h3>
                <p>{product.price}</p>
                <Link
                  href={product.href}
                  className="text-blue-500 mt-2 inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            &copy; 2024 Phone Company. All rights reserved.
          </motion.p>
          <motion.div className="flex justify-center mt-4">
            {["Facebook", "Twitter", "Instagram"].map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mx-2"
              >
                <Link href="#" className="text-blue-500">
                  {platform}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
