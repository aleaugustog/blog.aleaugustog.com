import Circle from "@/components/icon/circle";
import GitHub from "@/components/icon/github";
import LinkedIn from "@/components/icon/linkedin";
import Twitter from "@/components/icon/twitter";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center">
      <Link className="block px-4" href="/">
        <span className="text-5xl">Ale</span>
        <span
          className="text-indigo-700 dark:text-indigo-300"
          style={{ fontSize: "4rem", lineHeight: 0 }}
        >
          .
        </span>
      </Link>
      <nav className="flex-1 flex items-center justify-center space-x-8">
        {/* <Link
          className="text-sm uppercase font-medium hover:text-gray-500"
          href="/"
        >
          Home
        </Link>
        <Circle />
        <Link
          className="text-sm uppercase font-medium hover:text-gray-500"
          href="/contact"
        >
          Contact
        </Link> */}
      </nav>
      <div className="flex space-x-10 px-4">
        <a href="https://github.com/aleaugustog">
          <GitHub />
        </a>
        <a href="https://linkedin.com/in/aleaugustog">
          <LinkedIn />
        </a>
        <a href="https://x.com/aleaugustog">
          <Twitter />
        </a>
      </div>
    </header>
  );
}
