import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StoryPanelProps {
  title: string;
  subtitle: string;
  index: number;
  imageUrl: string;
  description: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const StoryPanel: React.FC<StoryPanelProps> = ({
  title,
  subtitle,
  index,
  imageUrl,
  description,
  isActive = false,
  onClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`panel-card cursor-pointer group ${isActive ? 'border-neon/70' : ''} ${className}`}
    >
      <div className="relative overflow-hidden rounded-md mb-4 aspect-[16/9]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/90 via-bg-darker/40 to-transparent" />
        
        {/* Panel number */}
        <div className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 rounded-full bg-bg-dark/80 border border-primary/30">
          <span className="font-display text-sm text-primary/90">{index + 1}</span>
        </div>
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-primary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered || isActive ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div>
        <motion.h3 
          className="text-xl sm:text-2xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300"
          animate={{ color: isActive ? 'rgb(var(--color-neon))' : '' }}
        >
          {title}
        </motion.h3>
        <h4 className="text-lg text-secondary mb-3">{subtitle}</h4>
        <p className="text-white/70 line-clamp-3">{description}</p>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-accent/50"
        initial={{ width: '0%' }}
        animate={{ width: isHovered || isActive ? '100%' : '0%' }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default StoryPanel;