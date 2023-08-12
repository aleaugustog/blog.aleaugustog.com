import "./globals.css";
import Header from "./header";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alejandro González",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
