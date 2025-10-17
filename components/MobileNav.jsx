"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center justify-between py-10 bg-slate-900 text-white">
        {/* Logo */}
        <div className="mt-10 mb-16 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Zabre<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`text-xl capitalize transition-all ${
                link.path === pathname
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="mt-12">
          <Link
            href="/password-generator/password"
            className="inline-block px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors font-medium"
          >
            Generator
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
