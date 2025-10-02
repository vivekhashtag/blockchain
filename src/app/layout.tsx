import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Learn Blockchain - Interactive Learning Platform",
  description: "Master blockchain technology through interactive courses, from basics to advanced topics including smart contracts, cryptography, and Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-900 min-h-screen antialiased`}>
        <div className="relative flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
