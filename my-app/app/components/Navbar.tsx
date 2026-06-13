import Link from "next/link";
import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 backdrop-blur-md bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-extrabold text-2xl bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            StreamTube
          </h1>
        </Link>

        <div className="hidden md:flex items-center w-[450px]">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <input
              placeholder="Search videos..."
              className="
                w-full
                rounded-full
                bg-zinc-900/80
                border
                border-zinc-800
                py-2.5
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-purple-500
                focus:ring-1
                focus:ring-purple-500
              "
            />
          </div>
        </div>

        <Link href="/profile">
          <div
            className="
              h-11
              w-11
              rounded-full
              bg-gradient-to-br
              from-purple-500
              to-pink-500
              flex
              items-center
              justify-center
              cursor-pointer
              hover:scale-105
              transition
            "
          >
            <User size={18} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
