"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import OrderPanel from "@/components/order/OrderPanel";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideOrderPanel = pathname === "/orders" || pathname === "/customers";
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-screen flex flex-col bg-gray-100">
        <div className="flex-1 flex flex-col">
          <Navbar />

          <div className="flex flex-1 p-4 gap-4">
            <Sidebar />

            <div className="flex-1 rounded-2xl">
              {children}
            </div>

            {/* Order Panel */}
            {!hideOrderPanel && <OrderPanel />}
          </div>
        </div>
      </body>
    </html>
  );
}
