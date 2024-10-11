// src/app/page.tsx
'use client';

import Link from "next/link";
import { FaLaptopCode, FaRegLightbulb, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full max-w-6xl p-6 flex items-center justify-between bg-white/90 backdrop-blur-md shadow-lg rounded-full mt-4">
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
            className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full shadow-lg border border-blue-600 transition duration-300 ease-in-out hover:bg-blue-50 transform hover:-translate-y-1 hover:scale-105"
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
              title: "Easy-to-Use Builder",
              description: "Design your website with a user-friendly drag-and-drop interface. No coding required!"
            },
            {
              icon: <FaRegLightbulb className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
              title: "Creative Templates",
              description: "Choose from a range of stunning templates tailored to your industry and style."
            },
            {
              icon: <FaUsers className="text-blue-500 text-6xl mb-4 drop-shadow-md" />,
              title: "Grow Your Audience",
              description: "Built-in SEO tools and marketing integrations help you reach more people."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <div className="flex justify-center">{feature.icon}</div>
              <h4 className="text-2xl font-bold text-gray-800 mt-4">{feature.title}</h4>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        className="mt-24 max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center w-full col-span-1 md:col-span-3 drop-shadow-lg">What Our Clients Say</h3>
        {[
          { text: "WebScape made building my portfolio a breeze!", name: "Jane Doe" },
          { text: "Our sales doubled after launching our e-commerce site with WebScape.", name: "John Smith" },
          { text: "I got my website up and running in minutes. Highly recommend!", name: "Sara Lee" }
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
            <p className="text-blue-600 font-semibold">{testimonial.name}</p>
          </div>
        ))}
      </motion.div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 py-16 w-full text-center mt-24">
        <h3 className="text-4xl font-bold text-white mb-4">Ready to build your dream website?</h3>
        <p className="text-white mb-8">Join thousands of happy customers using WebScape.</p>
        <Link
          href="/auth/signup"
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started for Free
        </Link>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-8 text-center text-gray-500 text-sm shadow-inner mt-24">
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
