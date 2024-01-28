import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "SVGToComponent",
  description: "SVGToComponent",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  other: {
    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  },
};

export default function RootLayout({ children }: Readonly<{ children: any }>) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
