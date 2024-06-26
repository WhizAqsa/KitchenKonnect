import type { Metadata } from "next";
import App from "../components/App";
import { Inter } from "next/font/google";
import "../src/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <App />
        {children}
      </body>
    </html>
  );
}
