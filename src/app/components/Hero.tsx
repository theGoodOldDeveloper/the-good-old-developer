"use client"; // Biztosítja, hogy a komponens kliens oldalon renderelődjön
import Messenger from "./Messenger";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-r from-blue-500 to-purple-700 text-white">
      <motion.h1
        className="text-2xl md:text-5xl font-bold "
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("quotesLine1")}
      </motion.h1>
      <motion.p
        className="mt-4 text-xl  ps-3 pe-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {t("quotesLine2")}
      </motion.p>

      {isClient && (
        <motion.div
          className="mt-4 md:mt-14"
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
              src={t("synthesiaVideoLink")}
              loading="lazy"
              title="Synthesia video player - ChatBot"
              //allowFullScreen
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
        className="mt-8 flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Messenger />

        <a
          href="tel:+442039110480"
          className="px-6 py-3 bg-white text-blue-500 font-bold rounded-lg shadow-lg"
        >
          {t("contactButton")}
        </a>
      </motion.div>
    </div>
  );
}
