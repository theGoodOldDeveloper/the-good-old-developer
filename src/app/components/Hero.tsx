"use client"; // Biztosítja, hogy a komponens kliens oldalon renderelődjön
import Messenger from "./Messenger";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("Hero");
  const locale = useLocale();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Determine which image to use based on locale
  const ebookImage = locale === "hu" 
    ? "/images/e-book-firstpage.jpg" 
    : "/images/e-book-firstpage-en.jpg";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-20 pb-8 text-center bg-gradient-to-r from-blue-500 to-purple-700 text-white">
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

      {/* E-book Section */}
      <motion.div
        className="mt-12 mb-8 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a
          href={t("ebookLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer hover:opacity-90 transition-opacity"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Image
              src={ebookImage}
              alt="E-book cover"
              width={300}
              height={400}
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </motion.div>
        </a>
        <a
          href={t("ebookLink")}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-90 transition-opacity"
        >
          <motion.div
            className="text-center px-4 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            {t("ebookText").split("\n\n").map((part, index) => (
              <p
                key={index}
                className={`${
                  index === 0
                    ? "text-lg md:text-xl lg:text-2xl mb-2"
                    : "text-sm md:text-base mt-2"
                }`}
                style={{
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5), -2px -2px 4px rgba(0, 0, 0, 0.5), 2px -2px 4px rgba(0, 0, 0, 0.5), -2px 2px 4px rgba(0, 0, 0, 0.5)"
                }}
              >
                {part}
              </p>
            ))}
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
