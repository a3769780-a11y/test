import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-accent text-brand-base border-t border-brand-accentHover mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {/* Brand Column */}
           <div className="md:col-span-1">
              <h2 className="font-script text-4xl mb-2 text-white">Cakeprincess</h2>
              <p className="text-xs uppercase tracking-[0.2em] font-sans text-brand-base/80 mb-6">Pastry</p>
              <p className="text-sm text-brand-base/70 leading-relaxed">
                Exquisite Torten & Gebäck für Ihre besonderen Momente. Handgefertigt in Berlin.
              </p>
           </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-serif font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-brand-base flex-shrink-0" />
                <span>Schlossstraße 12, 10115 Berlin</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-brand-base flex-shrink-0" />
                <span>+49 30 12345678</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-brand-base flex-shrink-0" />
                <span>info@cakeprincess.de</span>
              </li>
            </ul>
          </div>

          {/* Quick Links / Legal */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-serif font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-brand-base/80 text-sm">
              <li><a href="#" className="hover:text-white transition">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
              <li><a href="#" className="hover:text-white transition">AGB</a></li>
              <li><a href="#" className="hover:text-white transition">Nutzungsbedingungen</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="md:col-span-1">
            <h3 className="text-white text-lg font-serif font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/cakeprincess_pastry/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-accentHover p-2 rounded-full hover:bg-brand-base hover:text-brand-accent transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="bg-brand-accentHover p-2 rounded-full hover:bg-brand-base hover:text-brand-accent transition">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-xs text-brand-base/50">
              &copy; {new Date().getFullYear()} Cake Princess Pastry. <br/>All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;