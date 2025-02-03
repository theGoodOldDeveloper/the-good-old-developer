import { Inter } from "next/font/google";
import "../styles/globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

import { ReactNode } from "react";

import Image from "next/image";
import portrait from "../../public/Portrait_main.JPG";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-5 bg-white shadow-md z-50">
          <div className="flex items-center">
            <Image
              src={portrait}
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold ml-3">THE GOOD OLD DEVELOPER</h1>
          </div>
          <LanguageSwitcher />
        </header>
        <main className="pt-15">{children}</main>
      </body>
    </html>
  );
}
