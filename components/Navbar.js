import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-lavender text-deepPurple fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="Soulful Tarot Logo"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
            />
          </Link>
          <Link href="/" className="text-lg sm:text-xl font-serif font-semibold tracking-wide hover:text-deepPurple/80 transition">
            ✦ Soulful Tarot Journey By Aashi
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {['/', '/about', '/services', '/shop', '/contact'].map((path, i) => {
            const name = path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link key={i} href={path} className="hover:text-amethyst transition">
                {name}
              </Link>
            );
          })}
          <a href="https://instagram.com/soulful_tarot_journey_by_aashi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-amethyst transition" />
          </a>
          <a href="https://youtube.com/@SOULFULTAROTJOURNEYByAashi" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-xl hover:text-amethyst transition" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu" className="focus:outline-none">
            <svg className="w-6 h-6 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 bg-lavender/90 shadow-md space-y-2 text-center">
          {['/', '/about', '/services', '/contact'].map((path, i) => {
            const name = path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2);
            return (
              <Link key={i} href={path} className="block py-2 hover:text-amethyst transition">
                {name}
              </Link>
            );
          })}
          <div className="flex justify-center gap-6 pt-2">
            <a href="https://instagram.com/soulful_tarot_journey_by_aashi" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl hover:text-amethyst transition" />
            </a>
            <a href="https://youtube.com/@SOULFULTAROTJOURNEYByAashi" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl hover:text-amethyst transition" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
