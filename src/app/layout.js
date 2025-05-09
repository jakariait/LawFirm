import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/csr/Navbar";
import Footer from "@/component/ssr/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Powell Law Firm | St. Louis, MO | Serious Injuries | Serious Attorneys",
  description:
    "Powell Law Firm in St. Louis, MO, fights for victims of serious injuries. Get trusted legal support from experienced personal injury attorneys. Available 24/7.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
