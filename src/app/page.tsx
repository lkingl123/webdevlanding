// src/app/page.tsx
'use client';

import Link from "next/link";
import { FaLaptopCode, FaRegLightbulb, FaUsers } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HomePage() {
  // Floating animation logic for smooth motion
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-10%", "5%", "0%"],
        transition: {
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      });
    };
    sequence();
  }, [controls]);

  return (
     // Floating Shapes for Visual Appeal
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center relative overflow-hidden">
<motion.div
  className="absolute top-20 -right-10 w-80 h-80 bg-gradient-to-tr from-blue-300 to-indigo-400 rounded-full opacity-50"
  animate={controls}
  whileHover={{ scale: 1.1 }}
></motion.div>
<motion.div
  className="absolute bottom-32 -left-20 w-96 h-96 bg-gradient-to-tl from-blue-200 to-blue-500 rounded-full opacity-40"
  animate={controls}
  whileHover={{ scale: 1.1 }}
></motion.div>
<motion.div
  className="absolute top-40 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-full opacity-60"
  animate={controls}
  whileHover={{ scale: 1.1 }}
></motion.div>
<motion.div
  className="absolute top-60 right-40 w-72 h-72 bg-gradient-to-br from-green-300 to-blue-300 rounded-full opacity-50"
  animate={controls}
  whileHover={{ scale: 1.1 }}
></motion.div>
<motion.div
  className="absolute bottom-20 right-60 w-56 h-56 bg-gradient-to-r from-pink-300 to-purple-500 rounded-full opacity-50"
  animate={controls}
  whileHover={{ scale: 1.1 }}
></motion.div>


      {/* Header */}
      <header className="w-full max-w-6xl p-6 flex items-center justify-between bg-white/80 backdrop-blur-md shadow-lg rounded-full mt-4">
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide">
          Web<span className="text-blue-600">Scape</span>
        </h1>
        <div className="flex space-x-4">
          <Link
            href="/auth/signin"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <motion.div
        className="max-w-5xl w-full p-10 text-center flex flex-col items-center mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-extrabold text-gray-800 mb-6 leading-tight drop-shadow-lg">
          Create Stunning Websites with <span className="text-blue-600">WebScape</span>
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl">
          Our all-in-one platform lets you design beautiful websites effortlessly. Whether you need a personal portfolio, an e-commerce site, or a business hub, we've got you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/auth/signup"
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            Start Building
          </Link>
          <Link
            href="/features"
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full shadow-md border border-blue-600 transition duration-300 ease-in-out hover:bg-blue-50 transform hover:-translate-y-1 hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="max-w-5xl w-full px-10 mt-24 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <h3 className="text-4xl font-bold text-gray-800 mb-12 drop-shadow-lg">Why Choose WebScape?</h3>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {[
            {
              icon: <FaLaptopCode className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
              title: "24/7 Availability",
        description: "No matter the time, we're here to support your business. Our team is available round-the-clock to ensure everything runs smoothly."
            },
            {
              icon: <FaRegLightbulb className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
              title: "Local Expertise",
              description: "With in-depth knowledge of local markets, we provide tailored solutions that fit your unique business needs."
            },
            {
              icon: <FaUsers className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
              title: "Flexible Solutions",
              description: "From scalable web platforms to custom IT setups, we adapt to your business as it grows, offering the flexibility you need."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h4 className="text-2xl font-bold text-gray-800 mt-4">{feature.title}</h4>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

<motion.div
  className="mt-24 max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.2 }}
>
  <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center w-full col-span-1 md:col-span-3 drop-shadow-lg">What Our Clients Say</h3>
  {[
    {
      text: "WebScape has been a game-changer for us. Their team is always there when we need them, even at 3 AM.",
      name: "Lisa Reynolds, CEO at LocalWorks"
    },
    {
      text: "With WebScape, our website is running smoothly, and their local support means we never have to wait long for help.",
      name: "Carlos Mendoza, Owner of Cafe Conectos"
    },
    {
      text: "They took care of our IT headaches, allowing us to focus on growth. Truly our IT partner in every sense.",
      name: "Jessica Le, Operations Manager at GreenGrowth"
    }
  ].map((testimonial, index) => (
    <motion.div
      key={index}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
      whileHover={{ scale: 1.15, rotate: 1.8 }}
    >
      <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
      <p className="text-blue-600 font-semibold">{testimonial.name}</p>
    </motion.div>
  ))}
</motion.div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-16 w-full text-center mt-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-700 opacity-20 mix-blend-overlay"></div>
        <h3 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Ready to build your dream website?</h3>
        <p className="text-white mb-8">Join thousands of happy customers using WebScape.</p>
        <Link
          href="/features"
          className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full shadow-md border border-blue-600 transition duration-300 ease-in-out hover:bg-blue-50 transform hover:-translate-y-1 hover:scale-105"
        >
          Get Started here
        </Link>
      </div>

      {/* Footer with Wave Shape */}
      <footer className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-12 text-center text-gray-500 text-sm shadow-inner mt-24">
        <p>
          © 2024 WebScape. All rights reserved. |{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>
        </p>
        <p className="mt-4">
          Follow us: 
          <a href="#" className="ml-2 text-blue-600 hover:text-blue-800 transition">Twitter</a> | 
          <a href="#" className="ml-2 text-blue-600 hover:text-blue-800 transition">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
