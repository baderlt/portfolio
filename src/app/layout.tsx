import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
export { metadata };
import Main from "./main";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

// @ts-ignore
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`} id="body">
        <Main  >
          {children}
          </Main>
      </body>
    </html>
  );
}
