import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./utilities/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gonime",
  description: "Streaming Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
