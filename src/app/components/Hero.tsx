"use client"; // 👈 Hozzáadjuk a kliens direktívát!

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-700 text-white">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI won&apos;t take your job...
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        But someone who knows AI might.
      </motion.p>
      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg">
          Lépj kapcsolatba
        </button>
        <button className="px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-lg">
          Hívj Messengeren
        </button>
      </motion.div>
    </div>
  );
}
