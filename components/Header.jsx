import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            ZABRE<span className="text-[#e8c97e]">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />

         <Link href="/contact">
  <Button className="relative overflow-hidden rounded-xl px-6 py-2 font-medium 
  bg-gradient-to-r from-[#e8c97e] to-[#d4b46a] 
  text-black shadow-lg shadow-[#e8c97e]/20
  transition-all duration-300 
  hover:scale-105 hover:shadow-xl hover:shadow-[#e8c97e]/30
  before:absolute before:inset-0 before:bg-white/10 before:opacity-0 
  before:transition before:duration-300 hover:before:opacity-100">
    Hire me
  </Button>
</Link>

<Link href="/password-generator/password">
  <Button className="rounded-xl px-6 py-2 font-medium 
  bg-white/5 backdrop-blur-md border border-white/10 
  text-white shadow-md
  transition-all duration-300
  hover:bg-white/10 hover:border-white/20 hover:scale-105">
    Pass generator
  </Button>
</Link>

        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
