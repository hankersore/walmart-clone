import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";


export const metadata: Metadata = {
  title: "Walmart",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=''>
        <Header/>
        <div className="flex">
        {modal}
        {children}
        <Analytics/>
        </div>
        </body>
    </html>
  );
}