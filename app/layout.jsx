import NavBar from "@/components/NavBar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Users App",
  description: "My first project with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <NavBar />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
