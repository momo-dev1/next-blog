import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <header className="bg-gray-900">
      <nav className="flex items-center justify-between p-5 mx-auto text-gray-100 max-w-5xl">
        <div className="flex items-center flex-1 cursor-pointer">
          <Link href="/">
            <a className="flex items-center">
              <Image src="/assets/logo.png" width={40} height={40} alt="logo" />
              <span className="ml-3 text-xl">Momo blog</span>
            </a>
          </Link>
        </div>
        <ul className="flex gap-x-4">
          <li className="hover:text-indigo-500">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="hover:text-indigo-500">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
