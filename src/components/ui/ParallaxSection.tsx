import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number; // Parallax effect speed multiplier
  className?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5, 
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollY } = useScroll();

  // Update element position values when component mounts
  useEffect(() => {
    if (!ref.current) return;
    
    const setValues = () => {
      setElementTop(ref.current ? ref.current.offsetTop : 0);
      setClientHeight(window.innerHeight);
    };
    
    setValues();
    window.addEventListener('resize', setValues);
    
    return () => window.removeEventListener('resize', setValues);
  }, [ref]);

  // Transform the y position based on scroll
  const y = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [speed * 100, -speed * 100]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;