import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Montserrat, Space_Mono } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const space = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "RJ Wright Portfolio",
  description: "Web developer and designer based in Sydney Australia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mont.variable} ${space.variable} dark:bg-sage-900 dark:text-white font-sans`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
