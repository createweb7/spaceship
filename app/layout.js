import { Michroma, Inter } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-michroma",
});

const inter = Inter({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Spaceship — Smash Burgers | London",
  description:
    "Spaceship — smash burgers, London. Minimal space. Maximum flavour.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${michroma.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
