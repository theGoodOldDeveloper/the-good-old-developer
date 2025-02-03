import { Inter } from "next/font/google";
import "../styles/globals.css";
import LanguageSwitcher from "./components/LanguageSwitcher";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900`}>
        <header className="flex justify-between items-center p-5 bg-white shadow-md">
          <h1 className="text-xl font-bold">THE GOOD OLD DEVELOPER</h1>
          <LanguageSwitcher />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
