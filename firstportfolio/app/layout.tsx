import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/NavBar/ResponsiveNav";


const font = Sora({
  weight:['100', '200','300'],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Johnathon's Portfolio",
  description: "Johnathon's Portfolio with next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}>
          <ResponsiveNav/>
        {children}
      </body>
    </html>
  );
}
