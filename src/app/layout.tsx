import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./convex-client-provider";
const inter = Inter({ subsets: ["latin"] });
import clsx from "clsx";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Edgevanta Assessment",
  description: "A 2-way messaging app using Convex and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, " bg-gray-900 h-screen")}>
        <nav className="flex w-full justify-center gap-4 p-4 text-lg text-gray-300 ">
          <Link className="hover:text-gray-100" href={"/"}>Home</Link>
          <Link className="hover:text-gray-100" href={"alice"}>Alice</Link>
          <Link className="hover:text-gray-100" href={"bob"}>Bob</Link>
        </nav>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
