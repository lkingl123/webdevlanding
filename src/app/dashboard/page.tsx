// src/app/dashboard/page.tsx
'use client';

import { useState, useEffect } from "react";
import AnalyticsHeader from "./components/AnalyticsHeader";
import OverviewStats from "./components/OverviewStats";
import PageViewsChart from "./components/PageViewsChart";
import TrafficSourcesChart from "./components/TrafficSourcesChart";
import CTASection from "./components/CTASection";
import { motion, useAnimation } from "framer-motion";

export default function Dashboard() {
  const [isWebsiteLinked, setIsWebsiteLinked] = useState(false);
  const controls = useAnimation();
  const testWebsite = "https://webdev-landing.web.app/";

  useEffect(() => {
    // Floating animations for shapes
    const sequence = async () => {
      await controls.start({
        x: ["0%", "10%", "-5%", "0%"],
        y: ["0%", "-10%", "5%", "0%"],
        transition: {
          duration: 12,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        },
      });
    };
    sequence();
  }, [controls]);

  // Simulate checking if a website is linked
  useEffect(() => {
    // This should ideally be replaced with a call to your backend or database
    // to check if the user has a website linked. For now, we simulate with a delay.
    setTimeout(() => {
      // Set this to `true` to simulate a website being linked
      setIsWebsiteLinked(false);
    }, 500); // Delay for demonstration purposes
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center relative overflow-hidden">
      <AnalyticsHeader />

      {/* Display different content based on whether a website is linked */}
      {isWebsiteLinked ? (
        <>
          <OverviewStats />
          <motion.div className="max-w-5xl w-full p-10 text-center flex flex-col items-center mt-12 bg-white/80 backdrop-blur-md rounded-lg shadow-lg">
            <PageViewsChart />
            <TrafficSourcesChart />
          </motion.div>
        </>
      ) : (
        <motion.div
          className="max-w-5xl w-full p-10 text-center flex flex-col items-center mt-12 bg-white/80 backdrop-blur-md rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">No Website Linked</h2>
          <p className="text-lg text-gray-700 mb-8">
            Add your website to start tracking analytics. Link your website to view insights, track traffic sources, and monitor user behavior.
          </p>
        </motion.div>
      )}

      <CTASection />
    </main>
  );
}
