import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Navbar from "./components/navbar";

const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "700", "800"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
