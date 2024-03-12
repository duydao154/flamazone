import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./navbar/Navbar";
import Footer from "./Footer";
import SessionProvider from "../app/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flamazone",
  description: "Lets Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          <main className="max-w7xl m-auto min-w-[300px] p-4">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
