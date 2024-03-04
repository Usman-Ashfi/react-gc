"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
