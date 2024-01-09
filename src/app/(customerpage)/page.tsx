import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Experience the Future of Communication
          </h1>
          <p className="text-lg mb-8">
            Discover our latest range of smartphones with cutting-edge
            technology.
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 text-gray-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Our Phones?</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-1/3 p-4">
              <Image
                src={""}
                alt="Feature 1"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Advanced Cameras</h3>
              <p>
                Capture stunning photos with our state-of-the-art camera
                technology.
              </p>
            </div>
            <div className="w-1/3 p-4">
              <Image
                src={""}
                alt="Feature 2"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">
                Long-lasting Battery
              </h3>
              <p>
                Enjoy extended battery life that keeps you connected all day
                long.
              </p>
            </div>
            <div className="w-1/3 p-4">
              <Image
                src={""}
                alt="Feature 3"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Fast Performance</h3>
              <p>
                Experience smooth and fast performance with our latest
                processors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white text-gray-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Latest Models</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="w-1/3 p-4">
              <Image
                src={""}
                alt="Phone 1"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Model X</h3>
              <p>From $999</p>
              <Link
                href="/products/model-x"
                className="text-blue-500 mt-2 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="w-1/3 p-4">
              <Image
                src={""}
                alt="Phone 2"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Model Y</h3>
              <p>From $799</p>
              <Link
                href="/products/model-y"
                className="text-blue-500 mt-2 inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="w-1/3 p-4">
              <Image
                src={""}
                alt="Phone 3"
                width={300}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Model Z</h3>
              <p>From $699</p>
              <Link
                href="/products/model-z"
                className="text-blue-500 mt-2 inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Phone Company. All rights reserved.</p>
          <div className="flex justify-center mt-4">
            <Link href="#" className="mx-2">
              Facebook
            </Link>
            <Link href="#" className="mx-2">
              Twitter
            </Link>
            <Link href="#" className="mx-2">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
