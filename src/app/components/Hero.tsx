"use client"; // Biztosítja, hogy a komponens kliens oldalon renderelődjön

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

      {/* Synthesia videó beágyazás csak ha a komponens a kliens oldalon renderelődött */}
      {isClient && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px",
              height: "315px",
              margin: "0 auto",
            }}
          >
            <iframe
              src="https://share.synthesia.io/embeds/videos/6e1263ce-4143-49e4-83c2-0468410a7b6b?autoplay=1&volume=0.2"
              loading="lazy"
              title="Synthesia video player - ChatBot"
              allowFullScreen
              allow="encrypted-media; fullscreen; autoplay;"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </motion.div>
      )}

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
