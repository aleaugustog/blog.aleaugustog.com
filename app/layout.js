import classNames from "classnames";
import "./globals.css";
import Header from "./header";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Alejandro González",
  description: "Software Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(
          opensans.className,
          "container mx-auto dark:bg-slate-800 dark:text-gray-50"
        )}
      >
        <Header />
        {children}
        <footer className="text-center py-8">
          © {new Date().getFullYear()} Made by Alejandro González.
        </footer>
      </body>
    </html>
  );
}
