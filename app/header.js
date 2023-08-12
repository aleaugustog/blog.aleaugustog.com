import Circle from "@/components/icon/circle";
import GitHub from "@/components/icon/github";
import LinkedIn from "@/components/icon/linkedin";
import Twitter from "@/components/icon/twitter";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center">
      <Link className="block px-4 font-medium text-5xl" href="/">
        Ale.
      </Link>
      <nav className="flex-1 flex items-center justify-center space-x-8">
        <Link
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
        </Link>
      </nav>
      <div className="flex space-x-10 px-4">
        <a href="https://github.com/thytanium">
          <GitHub />
        </a>
        <a href="https://linkedin.com/in/thytanium">
          <LinkedIn />
        </a>
        <a href="https://twitter.com/aleaugustog">
          <Twitter />
        </a>
      </div>
    </header>
  );
}
