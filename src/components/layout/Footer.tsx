import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Github, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="absolute bottom-0 left-0 right-0 bg-bg-darker/80 backdrop-blur-md border-t border-primary/10 py-4">
      <div className="container-padding mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-accent" />
            <span className="font-display text-lg font-bold tracking-wider text-white">
              <span className="text-accent">Chrono</span>Saga
            </span>
          </div>
          
          <nav className="flex gap-6 text-sm">
            <Link to="/" className="text-white/70 hover:text-accent transition-colors duration-200">Home</Link>
            <Link to="/story" className="text-white/70 hover:text-accent transition-colors duration-200">Story</Link>
            <Link to="/about" className="text-white/70 hover:text-accent transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-white/70 hover:text-accent transition-colors duration-200">Contact</Link>
          </nav>
          
          <div className="flex gap-4">
            {[Github, Twitter, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-accent transition-colors duration-200"
                whileHover={{ y: -3, scale: 1.1 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="mt-4 text-center text-white/50 text-xs">
          &copy; {currentYear} ChronoSaga. A journey through time and fate.
        </div>
      </div>
    </footer>
  );
};

export default Footer;