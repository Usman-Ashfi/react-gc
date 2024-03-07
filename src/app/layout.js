"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
