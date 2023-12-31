// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white text-xl font-bold">
            Hunting Coder
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/"className="text-white">Home
          </Link>
          <Link href="/about" className="text-white">About
          </Link>
          <Link href="/contact" className="text-white">Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
