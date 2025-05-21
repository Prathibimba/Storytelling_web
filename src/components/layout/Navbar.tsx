import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Clock } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-darker/80 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-padding mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Clock className="w-8 h-8 text-accent group-hover:text-neon transition-colors duration-300" />
            <motion.div 
              className="absolute inset-0 border border-accent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <span className="font-display text-2xl font-bold tracking-wider text-white">
            <span className="text-accent">Chrono</span>Saga
          </span>
        </Link>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/story', label: 'Story Panels' },
            { path: '/about', label: 'ChronoLore' },
            { path: '/contact', label: 'ChronoComm' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative font-display text-lg transition-colors duration-300 ${
                isActive(item.path) ? 'text-accent' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.nav
        className={`fixed inset-0 bg-bg-dark flex flex-col items-center justify-center gap-8 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        {[
          { path: '/', label: 'Home' },
          { path: '/story', label: 'Story Panels' },
          { path: '/about', label: 'ChronoLore' },
          { path: '/contact', label: 'ChronoComm' },
        ].map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <Link
              to={item.path}
              className={`font-display text-2xl ${
                isActive(item.path) ? 'text-accent' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </header>
  );
};

export default Navbar;