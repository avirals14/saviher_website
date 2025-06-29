import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, Download } from 'lucide-react';

const mainNavItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  // { name: 'Blog', href: '/blog' },
];

const secondaryNavItems = [
  { name: 'Download', href: '/download' },
  { name: 'Contact', href: '/contact' },
];

const footerNavItems = [
  {
    title: 'Company',
    items: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '/careers' },
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Safety Resources', href: '/resources' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
    ]
  },
  {
    title: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms' },
    ]
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (href) => {
    setIsMenuOpen(false);
    router.push(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-auto">
              <Image
                src="/images/logos/logo.png"
                alt="SaviHer Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;