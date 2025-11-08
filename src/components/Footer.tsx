import { Film, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Film className="w-8 h-8 text-red-600" />
              <span className="text-2xl bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                UzMove
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your ultimate destination for premium movie streaming. Watch anywhere, anytime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">Movies</FooterLink>
              <FooterLink href="#">TV Series</FooterLink>
              <FooterLink href="#">New Releases</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Action</FooterLink>
              <FooterLink href="#">Drama</FooterLink>
              <FooterLink href="#">Comedy</FooterLink>
              <FooterLink href="#">Uzbek Films</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <SocialIcon href="#" icon={<Facebook />} />
              <SocialIcon href="#" icon={<Instagram />} />
              <SocialIcon href="#" icon={<Twitter />} />
              <SocialIcon href="#" icon={<Youtube />} />
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2024 UzMove. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
      >
        {children}
      </a>
    </li>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-purple-600 hover:border-transparent transition-all duration-300"
    >
      {icon}
    </motion.a>
  );
}
