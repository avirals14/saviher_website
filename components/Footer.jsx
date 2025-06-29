import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-primary-50 pt-8 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Company Info */}
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logos/logo.png"
                alt="SaviHer Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-neutral-600 text-sm">
              Empowering women with safety and security through innovative technology.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
              Privacy
            </Link>
            <Link href="/terms" className="text-neutral-600 hover:text-primary-600 transition-colors text-sm">
              Terms
            </Link>
            <Link href="#contact" 
                  className="text-neutral-600 hover:text-primary-600 transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-primary-100">
          <div className="text-center">
            <p className="text-neutral-600 text-sm">
              © {currentYear} SaviHer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;