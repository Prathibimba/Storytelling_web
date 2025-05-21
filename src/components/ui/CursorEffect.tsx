import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="hidden md:block fixed w-5 h-5 rounded-full border-2 border-accent z-50 pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          transition: { type: 'spring', mass: 0.1, stiffness: 800, damping: 30 }
        }}
      />
      
      {/* Secondary cursor (glow) */}
      <motion.div
        className="hidden md:block fixed w-40 h-40 rounded-full bg-accent/5 z-50 pointer-events-none filter blur-xl"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          transition: { type: 'spring', mass: 0.5, stiffness: 200, damping: 30 }
        }}
      />
    </>
  );
};

export default CursorEffect;