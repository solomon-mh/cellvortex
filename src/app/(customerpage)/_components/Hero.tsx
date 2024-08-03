import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const mainControls = useAnimation();
  const { scrollYProgress } = useScroll();

  // Create transforms for heading and paragraph
  const headingTransformX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );
  const paragraphTransformX = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-100%"]
  );

  // Control the visibility of the section
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <section
      ref={containerRef}
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 text-white animate-gradient"
    >
      <motion.div
        initial="hidden"
        animate={mainControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        className="GreyQo-Regular text-center w-3/4 mx-auto"
      >
        <motion.h1
          style={{ x: headingTransformX }} // Use x for horizontal movement
          className="tracking-wide text-6xl my-16 font-bold mb-4 leading-[64px]"
        >
          Experience the Future of Communication
        </motion.h1>
        <motion.div>
          <motion.p
            style={{ x: paragraphTransformX }}
            className="text-xl mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
          >
            Discover our latest range of smartphones with cutting-edge
            technology.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="inline-block"
          >
            <Link
              href="/products"
              className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg font-semibold"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
