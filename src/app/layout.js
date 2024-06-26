"use client";
import { useEffect } from "react";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  useEffect(() => {
    !(function (e, t, i) {
      if (void 0 === e._dyntube_v1_init) {
        e._dyntube_v1_init = !0;
        var a = t.createElement("script");
        (a.type = "text/javascript"),
          (a.async = !0),
          (a.src = "https://embed.dyntube.com/v1.0/dyntube.js"),
          t.getElementsByTagName("head")[0].appendChild(a);
      }
    })(window, document);
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
